import angular from 'angular';
import { createEventDirective } from './createEvent.directive';

export const createEvent = angular.module( 'createEvent', [] )
	.config( function( $stateProvider, $urlRouterProvider ) {
		$urlRouterProvider.otherwise( '/' );

		$stateProvider.state( 'createEvent', {
			url: '/create',
			template: '<create-event></create-event>'
		} );
	} )
	.directive( 'createEvent', createEventDirective );
