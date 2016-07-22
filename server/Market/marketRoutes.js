import marketCtrl from './marketCtrl';

export default function ( app ) {
	// GET REQUEST
	app.get( '/api/market', marketCtrl.getMarkets );
	app.get( '/api/market/:id', marketCtrl.getThisMarket );

	// POST REQUEST
	app.post( '/api/market', marketCtrl.addMarket );

	// PUT REQUEST
	app.put( '/api/market/:id', marketCtrl.editMarket );

	// DELETE REQUEST
	app.delete( '/api/market/:id', marketCtrl.deleteMarket );
}
