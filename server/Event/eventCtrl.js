import Events from './event';
import Users from '../User/Users';
import Map from '../Map/Map';

function exists( name ) {
	Events.findOne( { name }, ( err, result ) => {
		if ( err ) return false;
		return true;
	} );
}

export default {
	// GET
	getEvents( req, res ) {
		Events.find( ( req.query ) )
			.populate( 'admins' )
			.populate( 'users' )
			.populate( 'map' )
			.exec( ( err, events ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}
				return res.status( 200 ).json( events );
			} );
	},
	getEventByName( req, res ) {
		Events.findOne( { name: req.params.name.toLowerCase() } )
			.populate( 'currentMap' )
			.exec( ( err, event ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}
				if ( event ) {
					const filteredEvent = {
						admins: event.admins,
						bio: event.bio,
						closedDates: event.closedDates,
						location: event.location,
						activeMap: event.activeMap,
						name: event.name,
						title: event.title,
						photo: event.photo,
						currentMap: event.currentMap,
						recurrence: event.recurrence
					};
					return res.status( 200 ).json( filteredEvent );
				}
				return res.status( 200 ).json( null );
			} );
	},
	// POST
	addEvent( req, res ) {
		req.body.title = req.body.name;
		req.body.name = req.body.name.toLowerCase().split( ' ' ).join( '' );
		if ( exists( req.body.name ) ) {
			return res.send( 400 ).json( 'Event with this name already exists' );
		}
		new Events( req.body ).save( ( err, event ) => {
			if ( err ) return res.send( err );
			Users.findByIdAndUpdate(
				req.body.admins,
				{ $push: { admin: event._id } },
				{ safe: true, upsert: true, new: true }, error => {
				if ( error ) return res.send( error );
			} );
			Map.findByIdAndUpdate( // TODO event map id not working properly
				event._id,
				{ $push: { event: event._id } },
				{ safe: true, upsert: true, new: true }, error => {
					if ( error ) return res.send( error );
			} );
			return res.json( event );
		} );
	},
	// PUT
	editEvent( req, res ) {
		if ( !req.params.id ) {
			return res.status( 400 ).send( 'Not in User' ); // TODO what is this?
		}
		Events.findByIdAndUpdate( req.params.id, req.body, ( err, event ) => {
			if ( err ) {
				return res.status( 400 ).send( err );
			} else if ( event.recurrence.daysOfWeek ) {
				// TODO what should be here?
			}
			return res.status( 200 ).json( event );
		} );
	},
	// DELETE
	deleteEvent( req, res ) {
		if ( !req.params.id ) {
			return res.status( 400 ).send( 'Need an id as param' );
		}
		Events.findByIdAndRemove( req.params.id, req.body, ( err, event ) => {
			if ( err ) {
				return res.send( err );
			}
			Users.findByIdAndUpdate(
				event.user,
				{ $pull: { event: { $in: [ req.params.id ] } } },
				{ safe: true, upsert: true, new: true }, ( error, user ) => {
				if ( error ) {
					return res.send( err );
				}
				return res.json( event );
			} );
		} );
	}
};
