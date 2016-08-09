// IMPORT GLOBAL STYLES
import './app.scss';

// IMPORT ANGULAR MODULES
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import { appDirective } from './app.directive';
import { routing } from './routing';
import { userService } from './services/userService';
import { eventService } from './services/eventService';
import { mapService } from './services/mapService';
import { reservationService } from './services/reservationService';

// IMPORT COMPONENTS
// import { calendar } from './components/calendar/calendar';
import { checkout } from './components/checkout/checkout';
import { createEvent } from './components/createEvent/createEvent';
import { dashboard } from './components/dashboard/dashboard';
import { editEvent } from './components/editEvent/editEvent';
import { event } from './components/event/event';
import { findEvent } from './components/findEvent/findEvent';
import { footer } from './components/footer/footer';
import { home } from './components/home/home';
import { logout } from './components/logout/logout';
import { manageUsers } from './components/manageUsers/manageUsers';
import { map } from './components/map/map';
import { navbar } from './components/navbar/navbar';
import { newMap } from './components/newMap/newMap';
import { rentalHistory } from './components/rentalHistory/rentalHistory';
import { sideNav } from './components/sideNav/sideNav';
// import { timePicker } from './components/timePicker/timePicker';
import { transactionHistory } from './components/transactionHistory/transactionHistory';
import { user } from './components/user/user';
import { userSpots } from './components/userSpots/userSpots';
import { viewTransactions } from './components/viewTransactions/viewTransactions';
import { error } from './components/error/error';
import { userFindEvent } from './components/userFindEvent/userFindEvent';

// START MODULE
angular.module( 'SpotAssign', [
	uiRouter,
	ngAnimate,
	// COMPONENTS
	// calendar.name,
	checkout.name,
	createEvent.name,
	dashboard.name,
	editEvent.name,
	event.name,
	findEvent.name,
	footer.name,
	home.name,
	logout.name,
	manageUsers.name,
	map.name,
	navbar.name,
	newMap.name,
	rentalHistory.name,
	sideNav.name,
	// timePicker.name,
	transactionHistory.name,
	user.name,
	userSpots.name,
	viewTransactions.name,
	error.name,
	userFindEvent.name
] )
	.directive( 'app', appDirective )
	.factory( 'userService', userService )
	.factory( 'eventService', eventService )
	.factory( 'mapService', mapService )
	.factory( 'reservationService', reservationService )
	.config( routing )
	.run( function ( $rootScope, $state ) {
		$rootScope.$on(
			'$stateChangeError',
			( evnt, toState, toParams, fromState, fromParams, error ) => {
				if ( error === 'AUTH_REQUIRED' ) {
					$state.go( 'home' );
				}
				if ( error === 'NO_EVENT' ) {
					$state.go( 'findEvent' );
				}
			}
		);
	} );
