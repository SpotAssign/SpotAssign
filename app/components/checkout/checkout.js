import angular from 'angular';
import { checkoutDirective } from './checkout.directive';
import { sideNav } from '../sideNav/sideNav';
import { userService } from '../../shared/userService.js';

export const checkoutEvent = angular.module( 'checkoutEvent', [ sideNav.name ] )
	.config( function ( $stateProvider, $urlRouterProvider ) {
		$urlRouterProvider.otherwise( '/' );

		$stateProvider.state( 'checkout', {
			url: '/checkout',
			template: '<checkout></checkout>'
		} );
	} )
.directive( 'checkout', checkoutDirective )
.factory( 'userService', userService );
