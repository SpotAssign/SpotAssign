import userRoutes from './User/userRoutes';
import eventRoutes from './Event/eventRoutes';
import mapRoutes from './Map/mapRoutes';
import paymentRoutes from './Payment/paymentRoutes';
import reservationRoutes from './Reservation/reservationRoutes';

export default function ( app ) {
	userRoutes( app );
	mapRoutes( app );
	eventRoutes( app );
	paymentRoutes( app );
	reservationRoutes( app );
}
