import Events from '../Event/event';
import Map from './Map';

export default {
	// GET REQUEST
	getMap( req, res ) {
		Map.find( ( req.query ) )
			.populate( 'event' )
			.populate( 'reservations' )
			.exec( ( err, map ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}
				return res.status( 200 ).json( map );
			} );
	},
	getThisMap( req, res ) {
		Map.findById( req.params.id )
			.populate( 'event' )
			.populate( 'reservations' )
			.exec( ( err, map ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}
				return res.status( 200 ).json( map );
			} );
	},
	// POST REQUEST
	addMap( req, res ) {
		new Map( req.body ).save( ( err, map ) => {
			if ( err ) {
				return res.send( err );
			}
			return res.status( 200 ).json( map );
			// Events.findByIdAndUpdate( req.body.user.events[ req.body.user.events.length - 1 ]._id, { $push: { map: map._id } }, {
			// 	,
			// 	upsert: true,
			// 	new: true
			// }, ( error, user ) => {
			// 	if ( error ) {
			// 		return res.send( err );
			// 	}
			// 	return res.json( map );
			// } );
		} );
	},
	// PUT REQUEST
	editMap( req, res ) {
		if ( !req.params.id ) {
			return res.status( 400 ).send( 'Not in User' );
		} Map.findByIdAndUpdate( req.params.id, req.body )
		.populate( 'event' )
		.populate( 'reservations' )
		.exec( ( err, map ) => {
			if ( err ) {
				return res.send( err );
			} return res.json( map );
		} );
	},
	// DELETE REQUEST
	deleteMap( req, res ) {
		if ( !req.params.id ) {
			return res.status( 400 ).send( 'Find User To Delete' );
		}
		Map.findByIdAndRemove( req.params.id, req.body, ( err, map ) => {
			if ( err ) {
				return res.send( err );
			}
			Events.findByIdAndUpdate( map.user, { $pull: { map: { $in: [ req.params.id ] } } }, {
				upsert: true,
				new: true
			}, ( error, user ) => {
				if ( error ) {
					return res.send( error );
				}
			} );
			return res.json( map );
		} );
	}
};
