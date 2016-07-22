import userCtrl from './userCtrl';

export default function ( app ) {
	// GET REQUEST
	app.get( '/api/users', userCtrl.getUsers );
	app.get( '/api/current', userCtrl.getCurrentUser );
	app.get( '/api/users/:id', userCtrl.getThisUser );

	// POST REQUEST
	app.post( '/api/users', userCtrl.createUser );

	// PUT REQUEST
	app.put( '/api/users/:id', userCtrl.editUser );

	// DELETE REQUEST
	app.delete( '/api/users/:id', userCtrl.deleteUser );
}
