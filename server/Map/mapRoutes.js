import mapCtrl from './mapCtrl';

export default function ( app ) {
	// GET REQUEST
	app.get( '/api/map', mapCtrl.getMap );
	app.get( '/api/map/:id', mapCtrl.getThisMap );

	// POST REQUEST
	app.post( '/api/map', mapCtrl.addMap );

	// PUT REQUEST
	app.put( '/api/map/:id', mapCtrl.editMap );

	// DELETE REQUEST
	app.delete( '/api/map/:id', mapCtrl.deleteMap );
}
