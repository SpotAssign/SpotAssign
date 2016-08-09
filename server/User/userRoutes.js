import userCtrl from './userCtrl';
import passport from 'passport';
import middleware from '../middleware/middleware';

export default function ( app ) {
	// Auth 0 callback handler
	app.get(
		'/callback',
		passport.authenticate( 'auth0', { failureRedirect: '/' } ),
		userCtrl.userExists,
		userCtrl.createUser
	);
	app.get( '/api/user', middleware, userCtrl.getAuthUser );

	// GET REQUEST
	app.get( '/api/users', middleware, userCtrl.getUsers );
	app.get( '/api/users/:id', middleware, userCtrl.getThisUser );

	// PUT REQUEST
	app.put( '/api/users/:id', middleware, userCtrl.editUser );

	// DELETE REQUEST
	app.delete( '/api/users/:id', middleware, userCtrl.deleteUser );
}
