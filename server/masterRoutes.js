import userRoutes from './User/userRoutes';
import boothRoutes from './Booth/boothRoutes';
import marketRoutes from './Market/marketRoutes';
import paymentRoutes from './Payment/paymentRoutes';
import reservationRoutes from './Reservation/reservationRoutes';

export default function ( app ) {
	userRoutes( app );
	boothRoutes( app );
	marketRoutes( app );
	paymentRoutes( app );
	reservationRoutes( app );
}
