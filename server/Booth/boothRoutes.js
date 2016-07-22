import boothCtrl from './boothCtrl';

export default function ( app ) {
	// GET REQUEST
	app.get( '/api/booths', boothCtrl.getBooths );
	app.get( '/api/booths/:id', boothCtrl.getThisBooth );

	// POST REQUEST
	app.post( '/api/booths', boothCtrl.addBooth );

	// PUT REQUEST
	app.put( '/api/booths/:id', boothCtrl.editBooth );

	// DELETE REQUEST
	app.delete( '/api/booths/:id', boothCtrl.deleteBooth );
}
