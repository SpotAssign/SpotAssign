import { eventDirective } from './event.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import { map } from '../map/map';

export const event = angular.module( 'event', [ uiRouter, map.name ] )
.config( ( $stateProvider ) => {
	$stateProvider.state( 'event', {
		url: '/event/:name/:id', // This will have a dynamic url 'spotassign.com/provo'
		template: '<event></event>'
	} );
} )
.directive( 'event', eventDirective );
