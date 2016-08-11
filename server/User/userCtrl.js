import Users from './Users';

function createGoogle( req, res ) {
	new Users( {
		firstName: req.user._json.given_name,
		lastName: req.user._json.family_name,
		email: req.user._json.email,
		creationDate: new Date(),
		photo: req.user._json.picture
	} ).save( ( errs, newUser ) => {
		if ( errs ) {
			return res.redirect( '/#/error' );
		}
		return res.redirect( '/#/user' );
	} );
}

function createFacebook( req, res ) {
	new Users( {
		firstName: req.user._json.given_name,
		lastName: req.user._json.family_name,
		email: req.user._json.email,
		creationDate: new Date(),
		photo: `https://graph.facebook.com/${req.user.identities[ 0 ].user_id}/picture?width=9999`
	} ).save( ( errs, newUser ) => {
		if ( errs ) {
			return res.redirect( '/#/error' );
		}
		return res.redirect( '/#/user' );
	} );
}

function createAccount( req, res ) {
	new Users( {
		firstName: req.user._json.given_name,
		lastName: req.user._json.family_name,
		email: req.user._json.email,
		creationDate: new Date(),
		photo: req.user._json.picture
	} ).save( ( errs, newUser ) => {
		if ( errs ) {
			return res.redirect( '/#/error' );
		}
		return res.redirect( '/#/user' );
	} );
}

export default {
	// ************************************************************************
	// 								Get Auth with Auth0
	// ************************************************************************
	// THIS FUNCTION IS CALLED WHEN THEY REDIRECT TO DASHBOARD, IT CHECKS IF THE
	// GOOGLE OR FACEBOOK USER IS EXSISTING THEN RETURNS DATABASE USER OBJECT
	getAuthUser( req, res ) {
		Users.findOne( { email: req.user._json.email }, ( err, user ) => {
			if ( user ) {
				Users.findById( user._id )
					.populate( 'payments' )
					.populate( 'reservations' )
					.populate( 'events' )
					.exec( ( error, currentUser ) => {
						if ( error ) {
							return res.status( 500 ).json( error );
						}
						return res.status( 200 ).json( currentUser );
					} );
			} else if ( err ) {
				return res.status( 500 ).json( err );
			}
		} );
	},

	userExists( req, res, next ) {
		if ( !req.user ) throw new Error( 'user null' );
		Users.findOne( { email: req.user._json.email }, ( err, user ) => {
			if ( err ) return res.redirect( '/#/error' );
			if ( user ) return res.redirect( '/#/user' );
			next();
		} );
	},

	createUser( req, res ) {
		if ( req.user.identities[ 0 ].provider === 'google-oauth2' ) {
			createGoogle( req, res );
		} else if ( req.user.identities[ 0 ].provider === 'facebook' ) {
			createFacebook( req, res );
		} else {
			createAccount( req, res );
		}
	},

	// GET ALL USERS
	getUsers( req, res ) {
		Users.find( ( req.query ) )
			.populate( 'payments' )
			.populate( 'reservations' )
			.populate( 'events' )
			.exec( ( err, users ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}
				return res.status( 200 ).json( users );
			} );
	},
	// GET A USER
	getThisUser( req, res ) {
		Users.findById( req.params.id )
			.populate( 'payments' )
			.populate( 'reservations' )
			.populate( 'events' )
			.exec( ( err, user ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}
				return res.status( 200 ).json( user );
			} );
	},
	// PUT REQUEST
	editUser( req, res ) {
		if ( !req.params.id ) {
			return res.status( 400 ).send( 'Not in User' );
		}
		Users.findByIdAndUpdate( req.params.id, req.body )
			.populate( 'payments' )
			.populate( 'reservations' )
			.populate( 'events' )
			.exec( ( err, user ) => {
				if ( err ) {
					return res.send( err );
				}
				return res.json( user );
			} );
	},
	// DELETE REQUEST
	deleteUser( req, res ) {
		if ( !req.params.id ) {
			return res.status( 400 ).send( 'Find User To Delete' );
		}
		Users.findByIdAndRemove( req.params.id, req.body, ( err, user ) => {
			if ( err ) {
				return res.send( err );
			}
		} );
	}
};
