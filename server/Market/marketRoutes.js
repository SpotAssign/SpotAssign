import marketCtrl from './marketCtrl';

export default function ( app ) {
	// GET REQUEST
	app.get( '/api/markets', marketCtrl.getMarkets );
	app.get( '/api/markets/:id', marketCtrl.getThisMarket );

	// POST REQUEST
	app.post( '/api/markets', marketCtrl.addMarket );

	// PUT REQUEST
	app.put( '/api/markets/:id', marketCtrl.editMarket );

	// DELETE REQUEST
	app.delete( '/api/markets/:id', marketCtrl.deleteMarket );
}
