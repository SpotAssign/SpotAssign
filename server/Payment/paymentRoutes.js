import paymentCtrl from './paymentCtrl';

export default function ( app ) {
	// GET REQUEST
	app.get( '/api/payment', paymentCtrl.getPayments );
	app.get( '/api/payment/:id', paymentCtrl.getThisPayment );

	// POST REQUEST
	app.post( '/api/payment', paymentCtrl.addPayment );

	// PUT REQUEST
	app.put( '/api/payment/:id', paymentCtrl.editPayment );

	// DELETE REQUEST
	app.delete( '/api/payment/:id', paymentCtrl.deletePayment );
}
