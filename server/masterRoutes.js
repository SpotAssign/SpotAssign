import userRoutes from './User/userRoutes';
import mapRoutes from './Map/mapRoutes';
import marketRoutes from './Market/marketRoutes';
import paymentRoutes from './Payment/paymentRoutes';
import reservationRoutes from './Reservation/reservationRoutes';

export default function ( app ) {
	userRoutes( app );
	mapRoutes( app );
	marketRoutes( app );
	paymentRoutes( app );
	reservationRoutes( app );
}
