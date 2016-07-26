import userCtrl from './userCtrl';
import passport from 'passport';

export default function ( app ) {
	// Auth 0 callback handler
	app.get(
		'/callback',
		passport.authenticate( 'auth0', { failureRedirect: '/' } ),
		userCtrl.getAuth
	);
	app.get( '/user', userCtrl.getAuthUser );


	// GET REQUEST
	app.get( '/api/users', userCtrl.getUsers );
	app.get( '/api/users/:id', userCtrl.getThisUser );

	// POST REQUEST
	app.post( '/api/users', userCtrl.createUser );

	// PUT REQUEST
	app.put( '/api/users/:id', userCtrl.editUser );

	// DELETE REQUEST
	app.delete( '/api/users/:id', userCtrl.deleteUser );
}
