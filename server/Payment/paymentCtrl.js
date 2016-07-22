// How do we want to get the payment details onto the reservations, what is created first?

import Payments from './Payments';
import Reservations from '../Reservation/Reservations';

export default {
	// GET REQUEST
	getPayments( req, res ) {
		Payments.find( ( req.query ) )
			.populate( 'user' )
			.populate( 'market' )
			.populate( 'reservation' )
			.exec( ( err, payments ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}
				return res.status( 200 ).json( payments );
			} );
	},
	getThisPayment( req, res ) {
		Payments.findById( req.params.id )
			.populate( 'user' )
			.populate( 'market' )
			.populate( 'reservation' )
			.exec( ( err, payment ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}
				return res.status( 200 ).json( payment );
			} );
	},
	// POST REQUEST// DO WE NEED THEM TO HAVE A USER ACCOUNT FIRST?
	addPayment( req, res ) {
		new Payments( req.body ).save( ( err, payment ) => {
			if ( err ) {
				return res.send( err );
			}
			Reservations.findByIdAndUpdate( req.body.user, { $push: { payment: payment._id } }, {
				safe: true,
				upsert: true,
				new: true
			}, ( err, user ) => {
				if ( err ) {
					return res.send( err );
				}
			} );
			return res.json( payment );
		} );
	},
	// PUT REQUEST
	editPayment( req, res ) {
		if ( !req.params.id ) {
			return res.status( 400 ).send( 'Not in User' );
		}
		Payments.findByIdAndUpdate( req.params.id, req.body, ( err, payment ) => {
			if ( err ) {
				return res.send( err );
			}
			else {
				return res.json( payment );
			}
		} );
	},
	// DELETE REQUEST
	deletePayment( req, res ) {
		if ( !req.params.id ) {
			return res.status( 400 ).send( 'Find User To Delete' );
		}
		Payments.findByIdAndRemove( req.params.id, req.body, ( err, payment ) => {
			if ( err ) {
				return res.send( err );
			}
			Reservations.findByIdAndUpdate( response.user, { $pull: { payment: { $in: [ req.params.id ] } } }, {
				safe: true,
				upsert: true,
				new: true
			}, ( err, user ) => {
				if ( err ) {
					return res.send( err );
				}
			} );
			return res.json( payment );
		} );
	}
};
