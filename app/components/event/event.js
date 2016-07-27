import { eventDirective } from './event.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

export const event = angular.module( 'event', [ uiRouter ] )
.config( ( $stateProvider ) => {
	$stateProvider.state( 'event', {
		url: '/event', // This will have a dynamic url 'spotassign.com/provo'
		template: '<event></event>'
	} );
} )
.directive( 'event', eventDirective );
