import userRoutes from './User/userRoutes';
import marketRoutes from './Market/marketRoutes';
import mapRoutes from './Map/mapRoutes';
import paymentRoutes from './Payment/paymentRoutes';
import reservationRoutes from './Reservation/reservationRoutes';

export default function ( app ) {
	userRoutes( app );
	mapRoutes( app );
	marketRoutes( app );
	paymentRoutes( app );
	reservationRoutes( app );
}
