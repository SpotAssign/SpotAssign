import angular from 'angular';
import { homeDirective } from './home.directive';
import { navbar } from '../navbar/navbar';

export const home = angular.module( 'home', [ navbar.name ] )
	.config( function ( $stateProvider, $urlRouterProvider ) {
		$urlRouterProvider.otherwise( '/' );

		$stateProvider.state( 'home', {
			url: '/',
			template: '<home></home>'
		} );
	} )
	.directive( 'home', homeDirective );
