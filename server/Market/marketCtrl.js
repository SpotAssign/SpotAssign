import Markets from './Markets';
import Users from '../User/Users';

export default {
// GET REQUEST
	getMarkets( req, res ) {
		Markets.find( ( req.query ) )
			.populate( 'admins' )
			.populate( 'users' )
			.populate( 'map' )
			.exec( ( err, markets ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}
				return res.status( 200 ).json( markets );
			} );
	},
	getThisMarket( req, res ) {
		Markets.findById( req.params.id )
			.populate( 'admins' )
			.populate( 'users' )
			.populate( 'map' )
			.exec( ( err, market ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}
				return res.status( 200 ).json( market );
			} );
	},
	// POST REQUEST// DO WE NEED THEM TO HAVE A USER ACCOUNT FIRST?
	addMarket( req, res ) {
		console.log( req.body, 'this is req.body' );
		new Markets( req.body ).save( ( err, market ) => {
			if ( err ) {
				return res.send( err );
			}
			Users.findByIdAndUpdate( req.body.admins, { $push: { admin: market._id } }, {
				safe: true,
				upsert: true,
				new: true
			}, ( error, user ) => {
				if ( error ) {
					return res.send( error );
				}

				return res.json( market );
			} );
		} );
	},
	// PUT REQUEST
	editMarket( req, res ) {
		if ( !req.params.id ) {
			return res.status( 400 ).send( 'Not in User' );
		}
		Markets.findByIdAndUpdate( req.params.id, req.body, ( err, market ) => {
			if ( err ) {
				return res.status( 400 ).send( err );
			}
			else if ( market.recurrence.daysOfWeek ) {

			}
			return res.status( 200 ).json( market );
		} );
	},
	// DELETE REQUEST
	deleteMarket( req, res ) {
		if ( !req.params.id ) {
			return res.status( 400 ).send( 'Find User To Delete' );
		}
		Markets.findByIdAndRemove( req.params.id, req.body, ( err, market ) => {
			if ( err ) {
				return res.send( err );
			}
			Users.findByIdAndUpdate( market.user, { $pull: { market: { $in: [ req.params.id ] } } }, {
				safe: true,
				upsert: true,
				new: true
			}, ( error, user ) => {
				if ( error ) {
					return res.send( err );
				}

				return res.json( market );
			} );
		} );
	}
};
