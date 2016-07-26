import angular from 'angular';
import { checkoutDirective } from './checkout.directive';

export const checkoutEvent = angular.module( 'checkoutEvent', [] )
	.config( function( $stateProvider, $urlRouterProvider ) {
		$urlRouterProvider.otherwise( '/' );

		$stateProvider.state( 'checkout', {
			url: '/checkout',
			template: '<checkout></checkout>'
		} );
} )
.directive( 'checkout', checkoutDirective );
