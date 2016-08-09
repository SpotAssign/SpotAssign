import Users from './Users';

function createFacebook() {
	new Users( {
		firstName: req.user._json.given_name,
		lastName: req.user._json.family_name,
		email: req.user._json.email,
		creationDate: new Date(),
		photo: `https://graph.facebook.com/${req.user.identities[0].user_id}/picture?width=9999`
	} ).save( ( err, newUser ) => {
		if ( err ) {
			return res.status( 500 ).json( err );
		}
		return res.status( 200 ).json( newUser ).redirect( '/#/user' );
	} );
}

function createGoogle() {
	new Users( {
		firstName: req.user._json.given_name,
		lastName: req.user._json.family_name,
		email: req.user._json.email,
		creationDate: new Date(),
		photo: req.user._json.picture
	} ).save( ( errs, newUser ) => {
		if ( errs ) {
			return res.status( 500 ).json( errs );
		}
		return res.status( 200 ).json( newUser ).redirect( '/#/user' );
	} );
}

function createAccount() {
	new Users( {
		firstName: req.user._json.given_name,
		lastName: req.user._json.family_name,
		email: req.user._json.email,
		creationDate: new Date(),
		photo: req.user._json.picture
	} ).save( ( errs, newUser ) => {
		if ( errs ) {
			return res.status( 500 ).json( errs );
		}
		return res.status( 200 ).json( newUser ).redirect( '/#/user' );
	} );
}

export default {
	// ************************************************************************
	// 								Get Auth with Auth0
	// ************************************************************************
	// THIS FUNCTION ONLY HAS THE USER OBJECT FROM FACEBOOK OR GOOGLE
	getAuth( req, res, next ) {
		if ( !req.user ) {
			throw new Error( 'user null' );
			return res.redirect( '/#/' );
		} else {
			next();
		}
	},
	// THIS FUNCTION IS CALLED WHEN THEY REDIRECT TO DASHBOARD, IT CHECKS IF THE
	// GOOGLE OR FACEBOOK USER IS EXSISTING THEN RETURNS DATABASE USER OBJECT
	getAuthUser( req, res, next ) {
		Users.findOne( { email: req.user._json.email }, ( err, user ) => {
			if ( user ) {
				Users.findById( user._id )
					.populate( 'payment' )
					.populate( 'reservations' )
					.populate( 'markets' )
					.populate( 'admin' )
					.exec( ( error, currentUser ) => {
						if ( error ) {
							return res.status( 500 ).json( error );
						}
						return res.status( 200 ).json( currentUser );
					} );
			} else if ( err ) {
				return res.status( 500 ).json( err );
			} else {
				if ( req.user.identities[0].provider === 'google-oauth2' ) {
					createGoogle();
				} else if ( req.user.identities[0].provider === 'facebook' ) {
					createFacebook();
				} else {
					createAccount();
				}
			}
		} );
	},

	// GET ALL USERS
	getUsers( req, res ) {
		Users.find( ( req.query ) )
			.populate( 'payment' )
			.populate( 'reservations' )
			.populate( 'market' )
			.populate( 'admin' )
			.exec( ( err, users ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}
				return res.status( 200 ).json( users );
			} );
	},
	// GET A USER
	getThisUser( req, res, next ) {
		Users.findById( req.params.id )
			.populate( 'payment' )
			.populate( 'reservations' )
			.populate( 'market' )
			.populate( 'admin' )
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
			.populate( 'payment' )
			.populate( 'reservations' )
			.populate( 'market' )
			.populate( 'admin' )
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
