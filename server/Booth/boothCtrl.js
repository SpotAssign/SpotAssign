import Booths from './Booths';
import Users from '../User/Users';

export default {
	// GET REQUEST
	getBooths( req, res ) {
		Booths.find( ( req.query ) )
			.populate( 'market' )
			.populate( 'reservations' )
			.exec( ( err, booths ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}
				return res.status( 200 ).json( booths );
			} );
	},
	getThisBooth( req, res ) {
		Booths.findById( req.params.id )
			.populate( 'market' )
			.populate( 'reservations' )
			.exec( ( err, booth ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}
				return res.status( 200 ).json( booth );
			} );
	},
	// POST REQUEST
	addBooth( req, res ) {
		new Booths( req.body ).save( ( err, booth ) => {
			if ( err ) {
				return res.send( err );
			}
			Users.findByIdAndUpdate( req.body.user, { $push: { booths: booth._id } }, {
				safe: true,
				upsert: true,
				new: true
			}, ( error, user ) => {
				if ( error ) {
					return res.send( err );
				}
			} );
			return res.json( booth );
		} );
	},
	// PUT REQUEST
	editBooth( req, res ) {
		if ( !req.params.id ) {
			return res.status( 400 ).send( 'Not in User' );
		} Booths.findByIdAndUpdate( req.params.id, req.body )
		.populate( 'market' )
		.populate( 'reservations' )
		.exec( ( err, booth ) => {
			if ( err ) {
				return res.send( err );
			} return res.json( booth );
		} );
	},
	// DELETE REQUEST
	deleteBooth( req, res ) {
		if ( !req.params.id ) {
			return res.status( 400 ).send( 'Find User To Delete' );
		}
		Booths.findByIdAndRemove( req.params.id, req.body, ( err, booth ) => {
			if ( err ) {
				return res.send( err );
			}
			Users.findByIdAndUpdate( booth.user, { $pull: { booths: { $in: [ req.params.id ] } } }, {
				safe: true,
				upsert: true,
				new: true
			}, ( error, user ) => {
				if ( error ) {
					return res.send( error );
				}
			} );
			return res.json( booth );
		} );
	}
};
