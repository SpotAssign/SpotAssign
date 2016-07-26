import angular from 'angular';
import { eventDirective } from './event.directive';

export const event = angular.module( 'event', [] )
.config( function ( $stateProvider, $urlRouterProvider ) {
	$urlRouterProvider.otherwise( '/' );

	$stateProvider.state( 'event', {
		url: '/event',
		template: '<event></event>'
	} );
} )
.directive( 'event', eventDirective );
