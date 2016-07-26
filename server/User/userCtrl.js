import Users from './Users';

export default {
	// ************************************************************************
	// 								Get Auth with Auth0
	// ************************************************************************
	getAuth( req, res ) {
		if ( !req.user ) {
			throw new Error( 'user null' );
		}
		res.redirect( '/user' );
	},
	getAuthUser( req, res, next ) {
		Users.findOne( { email: req.user._json.email }, ( err, user ) => {
			if ( user ) {
				Users.findById( user._id )
				.populate( 'payment' )
				.populate( 'reservations' )
				.populate( 'market' )
				.exec( ( error, currentUser ) => {
					if ( error ) {
						return res.status( 500 ).json( error );
					} return res.status( 200 ).json( currentUser );
				} );
			} else if ( err ) {
				return res.status( 500 ).json( err );
			} else {
				new Users( {
					firstName: req.user._json.given_name,
					lastName: req.user._json.family_name,
					email: req.user._json.email,
					creationDate: new Date(),
					photo: req.user._json.picture
				} ).save( ( errs, newUser ) => {
					if ( errs ) {
						return res.status( 500 ).json( errs );
					} return res.status( 200 ).json( newUser );
				} );
			}
		} );
	},


	// ************************************************************************
	// 				Find User By Email, or Create Account
	// ************************************************************************
	createUser( req, res ) {
		if ( req.body.fname ) {
			 // Google or Facebook Account Creation Auth
			 new Users( {
				 id: req.body.id,
				 firstName: req.body.fname,
				 lastName: req.body.lname,
				 email: req.body.email,
				 creationDate: new Date(),
				 photo: req.body.picture
			 } ).save( ( err, newUser ) => {
				 if ( err ) {
					 return res.status( 500 ).json( err );
				 } return res.status( 200 ).json( newUser );
			 } );

		   } else {
			 // Simple Auth
			   new Users( {
				   id: req.body.id,
				   email: req.body.email,
				   creationDate: new Date(),
				   photo: req.body.picture
			   } ).save( ( err, newUser ) => {
				   if ( err ) {
					   return res.status( 500 ).json( err );
				   } return res.status( 200 ).json( newUser );
			   } );
		    }
	},

	 // ************************************************************************
	 //			 					Get Current User
	 // ************************************************************************


	// GET ALL USERS
	getUsers( req, res ) {
		Users.find( ( req.query ) )
			.populate( 'payment' )
			.populate( 'reservations' )
			.populate( 'market' )
			.exec( ( err, users ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				} return res.status( 200 ).json( users );
			} );
	},
	// GET A USER
	getThisUser( req, res, next ) {
		Users.findById( req.params.id )
			.populate( 'payment' )
			.populate( 'reservations' )
			.populate( 'market' )
			.exec( ( err, user ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				} return res.status( 200 ).json( user );
			} );
	},
	// PUT REQUEST
	editUser( req, res ) {
		if ( !req.params.id ) {
			return res.status( 400 ).send( 'Not in User' );
		}
		Users.findByIdAndUpdate( req.params.id, req.body )
		.populate( 'payment' )
		.populate( 'reservations' )
		.populate( 'market' )
		.exec( ( err, user ) => {
			if ( err ) {
				return res.send( err );
			} return res.json( user );
		} );
	},
	// DELETE REQUEST
	deleteUser( req, res ) {
		if ( !req.params.id ) {
			return res.status( 400 ).send( 'Find User To Delete' );
		} Users.findByIdAndRemove( req.params.id, req.body, ( err, user ) => {
			if ( err ) {
				return res.send( err );
			}
		} );
	}
};
