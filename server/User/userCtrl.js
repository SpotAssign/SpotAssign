import Users from './Users';

export default {
	// ************************************************************************
	// 								Get Auth with Auth0
	// ************************************************************************
	getAuth( req, res ) {
		if ( !req.user ) {
			throw new Error('user null');
		}
		res.redirect('/user');
	},
	getAuthUser ( req, res ) {
		console.log(req.user);
		res.render( 'user', {
			user: req.user
		} );
	},


	// ************************************************************************
	// 				Create User w/ Facebook, Google, or Simple Auth
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

	 getCurrentUser( req, res ) {
		 if ( !req.user ) {
			 return res.status( 500 ).json( 'The user does not exist or is not logged in.' );
		 }
		 Users.findById( req.user._id )
		 .populate( 'payment' )
		 .populate( 'reservations' )
		 .populate( 'market' )
		 .exec( ( err, currentUser ) => {
			 if ( err ) {
				 return res.status( 500 ).json( err );
			 } return res.status( 200 ).json( currentUser );
		 } );
	 },

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
