import Reservations from './Reservations';
import Payments from '../Payment/Payments';
import Map from '../Map/Map';


export default {
	// GET REQUEST
	getReservations( req, res ) {
		Reservations.find( ( req.query ) )
			.populate( 'user' )
			.populate( 'event' )
			.populate( 'payment' )
			.populate( 'map' )
			.exec( ( err, reservation ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				} return res.status( 200 ).json( reservation );
			} );
	},
	getThisReservation( req, res ) {
		Reservations.findById( req.params.id )
			.populate( 'user' )
			.populate( 'event' )
			.populate( 'payment' )
			.populate( 'map' )
			.exec( ( err, payment ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}
				return res.status( 200 ).json( payment );
			} );
	},
	// POST REQUEST// DO WE NEED THEM TO HAVE A USER ACCOUNT FIRST?
	addReservation( req, res ) {
		if ( !req.user ) {
			return res.status( 400 ).send( 'You must be logged in.' );
		}
		new Reservations( req.body ).save( ( err, reservation ) => {
			if ( err ) {
				return res.send( err );
			}
			Payments.findByIdAndUpdate( req.body.user, { $push: { reservation: reservation._id } }, {
				upsert: true,
				new: true
			}, ( error, user ) => {
				if ( error ) {
					return res.send( err );
				}
			} );
			return res.json( reservation );
		} );
	},
	// PUT REQUEST
	editReservation( req, res ) {
		if ( !req.params.id ) {
			return res.status( 400 ).send( 'Not in User' );
		}
		Reservations.findByIdAndUpdate( req.params.id, req.body, ( err, reservation ) => {
			if ( err ) {
				return res.send( err );
			}
			return res.json( reservation );
		} );
	},
	// DELETE REQUEST
	deleteReservation( req, res ) {
		if ( !req.params.id ) {
			return res.status( 400 ).send( 'Find User To Delete' );
		}
		Reservations.findByIdAndRemove( req.params.id, req.body, ( err, reservation ) => {
			if ( err ) {
				return res.send( err );
			}
			Payments.findByIdAndUpdate(
				reservation.user,
				{ $pull: { reservation: { $in: [ req.params.id ] } } },
				{
					upsert: true,
					new: true
				}, ( error, user ) => {
					if ( error ) {
						return res.send( err );
					}
				}
			);
			return res.json( reservation );
		} );
	}
};
