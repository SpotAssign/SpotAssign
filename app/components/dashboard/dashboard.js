import angular from 'angular';
import { dashboardDirective } from './dashboard.directive';
import { sideNav } from '../sideNav/sideNav';
import { calendar } from '../calendar/calendar';
import { timePicker } from '../timePicker/timePicker';


export const dashboard = angular.module( 'dashboard', [ sideNav.name, calendar.name,
	timePicker.name ] )
.config( function ( $stateProvider, $urlRouterProvider ) {
	$urlRouterProvider.otherwise( '/' );

	$stateProvider.state( 'dashboard', {
		url: '/dashboard',
		template: '<dashboard></dashboard>'
	} );
} )
.directive( 'dashboard', dashboardDirective );
