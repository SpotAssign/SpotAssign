import angular from 'angular';
import { checkoutDirective } from './checkout.directive';
import { sideNav } from '../sideNav/sideNav';

export const checkoutEvent = angular.module( 'checkoutEvent', [ sideNav.name ] )
<<<<<<< HEAD
	.config( function( $stateProvider, $urlRouterProvider ) {
=======
	.config( function ( $stateProvider, $urlRouterProvider ) {
>>>>>>> fe679a6d808053f401b9b86eefbd939a0f0ff3fc
		$urlRouterProvider.otherwise( '/' );

		$stateProvider.state( 'checkout', {
			url: '/checkout',
			template: '<checkout></checkout>'
		} );
	} )
.directive( 'checkout', checkoutDirective );
