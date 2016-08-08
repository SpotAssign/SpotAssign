import { eventDirective } from './event.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import { map } from '../map/map';

export const event = angular.module( 'event', [ uiRouter, map.name ] )
.config( ( $stateProvider, $urlRouterProvider ) => {
	$urlRouterProvider.otherwise( '/' );

	$stateProvider.state( 'event', {
		url: '/:event', // This will have a dynamic url 'spotassign.com/provo'
		template: '<event></event>'
	} );
} )
.directive( 'event', eventDirective );
