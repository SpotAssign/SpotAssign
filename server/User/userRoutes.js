import userCtrl from './userCtrl';

export default function ( app ) {
	// GET REQUEST
	app.get( '/api/user', userCtrl.getUsers );
	app.get( '/api/user/:id', userCtrl.getThisUser );

	// POST REQUEST
	app.post( '/api/user', userCtrl.addUser );

	// PUT REQUEST
	app.put( '/api/user/:id', userCtrl.editUser );

	// DELETE REQUEST
	app.delete( '/api/user/:id', userCtrl.deleteUser );
}
