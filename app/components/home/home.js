import angular from 'angular';
import { homeDirective } from './home.directive';
import { navbar } from '../navbar/navbar';
import { createEvent } from '../createEvent/createEvent';
import { checkoutEvent } from '../checkout/checkout';
import angularMaterialize from 'angular-materialize';
import { footer } from '../footer/footer';

export const home = angular.module( 'home', [ navbar.name, createEvent.name, checkoutEvent.name, angularMaterialize, footer.name ] )
	.config( function ( $stateProvider, $urlRouterProvider ) {
		$urlRouterProvider.otherwise( '/' );

		$stateProvider.state( 'home', {
			url: '/',
			template: '<home></home>'
		} );
	} )
	.directive( 'home', homeDirective );
