import paymentCtrl from './paymentCtrl';
import middleware from '../middleware/middleware';

export default function ( app ) {
	// GET REQUEST
	app.get( '/api/payment', middleware, paymentCtrl.getPayments );
	app.get( '/api/payment/:id', middleware, paymentCtrl.getThisPayment );

	// POST REQUEST
	app.post( '/api/payment', middleware, paymentCtrl.addPayment );

	// PUT REQUEST
	app.put( '/api/payment/:id', middleware, paymentCtrl.editPayment );

	// DELETE REQUEST
	app.delete( '/api/payment/:id', middleware, paymentCtrl.deletePayment );
}
