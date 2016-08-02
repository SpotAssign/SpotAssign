import reservationCtrl from './reservationCtrl';
import middleware from '../middleware/middleware';


export default function ( app ) {
	// GET REQUEST
	app.get( '/api/reservations', middleware, reservationCtrl.getReservations );
	app.get( '/api/reservations/:id', middleware, reservationCtrl.getThisReservation );

	// POST REQUEST
	app.post( '/api/reservations', middleware, reservationCtrl.addReservation );

	// PUT REQUEST
	app.put( '/api/reservations/:id', middleware, reservationCtrl.editReservation );

	// DELETE REQUEST
	app.delete( '/api/reservations/:id', middleware, reservationCtrl.deleteReservation );
}
