import angular from 'angular';
import { dashboardDirective } from './dashboard.directive';
import { sideNav } from '../sideNav/sideNav';

export const dashboard = angular.module( 'dashboard', [ sideNav.name ] )
.config( function ( $stateProvider, $urlRouterProvider ) {
	$urlRouterProvider.otherwise( '/' );

	$stateProvider.state( 'dashboard', {
		url: '/dashboard',
		template: '<dashboard></dashboard>'
	} );
} )
.directive( 'dashboard', dashboardDirective );
