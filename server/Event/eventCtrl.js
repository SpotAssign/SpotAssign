import Events from './event';
import Users from '../User/Users';

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
	getThisEvent( req, res ) {
		Event.findById( req.params.id )
			.populate( 'admins' )
			.populate( 'users' )
			.populate( 'map' )
			.exec( ( err, event ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}
				return res.status( 200 ).json( event );
			} );
	},
	// POST
	addEvent( req, res ) {
		new Events( req.body ).save( ( err, event ) => {
			if ( err ) return res.send( err );
			Users.findByIdAndUpdate(
				req.body.admins,
				{ $push: { admin: event._id } },
				{ safe: true, upsert: true, new: true }, error => {
				if ( error ) {
					return res.send( error );
				}
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
