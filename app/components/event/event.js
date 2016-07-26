import angular from 'angular';
import { eventDirective } from './event.directive';
import { dashboard } from '../dashboard/dashboard';

export const event = angular.module( 'event', [ dashboard.name ] )
.config( function ( $stateProvider, $urlRouterProvider ) {
	$urlRouterProvider.otherwise( '/' );

	$stateProvider.state( 'event', {
		url: '/event',
		template: '<event></event>'
	} );
} )
.directive( 'event', eventDirective );
