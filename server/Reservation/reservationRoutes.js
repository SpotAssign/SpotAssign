import reservationCtrl from './reservationCtrl';

export default function ( app ) {
	// GET REQUEST
	app.get( '/api/reservations', reservationCtrl.getReservations );
	app.get( '/api/reservations/:id', reservationCtrl.getThisReservation );

	// POST REQUEST
	app.post( '/api/reservations', reservationCtrl.addReservation );

	// PUT REQUEST
	app.put( '/api/reservations/:id', reservationCtrl.editReservation );

	// DELETE REQUEST
	app.delete( '/api/reservations/:id', reservationCtrl.deleteReservation );
}
