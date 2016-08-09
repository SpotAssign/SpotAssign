// IMPORT GLOBAL STYLES
import './app.scss';

// IMPORT ANGULAR MODULES
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import { routing } from './routing';
import { userService } from './services/userService';

// IMPORT COMPONENTS
import { appDirective } from './app.directive';
import { home } from './components/home/home';
import { event } from './components/event/event';
import { dashboard } from './components/dashboard/dashboard';
import { userHome } from './components/user/user';

// START MODULE
angular.module( 'SpotAssign', [
	uiRouter,
	ngAnimate,
	home.name,
	event.name,
	dashboard.name,
	userHome.name
] )
	.directive( 'app', appDirective )
	.factory( 'userService', userService )
	.config( routing )
	.run( function( $rootScope, $state ) {
		$rootScope.$on(
			'$stateChangeError',
			( evnt, toState, toParams, fromState, fromParams, error ) => {
				if ( error === 'AUTH_REQUIRED' ) {
					$state.go( 'home' );
				}
			}
		);
	} );
