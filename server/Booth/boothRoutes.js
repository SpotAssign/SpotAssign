import boothCtrl from './boothCtrl';
import middleware from '../middleware/middleware';

export default function ( app ) {
	// GET REQUEST
	app.get( '/api/booths', middleware, boothCtrl.getBooths );
	app.get( '/api/booths/:id', middleware, boothCtrl.getThisBooth );

	// POST REQUEST
	app.post( '/api/booths', middleware, boothCtrl.addBooth );

	// PUT REQUEST
	app.put( '/api/booths/:id', middleware, boothCtrl.editBooth );

	// DELETE REQUEST
	app.delete( '/api/booths/:id', middleware, boothCtrl.deleteBooth );
}
