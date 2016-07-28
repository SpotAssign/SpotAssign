import angular from 'angular';
import { createEventDirective } from './createEvent.directive';
import { sideNav } from '../sideNav/sideNav';
import { service } from '../../shared/service';

export const createEvent = angular.module( 'createEvent', [ sideNav.name ] )
	.config( function( $stateProvider, $urlRouterProvider ) {
		$urlRouterProvider.otherwise( '/' );

		$stateProvider.state( 'createEvent', {
			url: '/create',
			template: '<create-event></create-event>'
		} );
	} )
	.directive( 'createEvent', createEventDirective )
	.factory( 'service', service );
