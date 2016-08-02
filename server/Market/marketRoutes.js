import marketCtrl from './marketCtrl';
import middleware from '../middleware/middleware';

export default function ( app ) {
	// GET REQUEST
	app.get( '/api/markets', middleware, marketCtrl.getMarkets );
	app.get( '/api/markets/:id', middleware, marketCtrl.getThisMarket );

	// POST REQUEST
	app.post( '/api/markets', middleware, marketCtrl.addMarket );

	// PUT REQUEST
	app.put( '/api/markets/:id', middleware, marketCtrl.editMarket );

	// DELETE REQUEST
	app.delete( '/api/markets/:id', middleware, marketCtrl.deleteMarket );
}
