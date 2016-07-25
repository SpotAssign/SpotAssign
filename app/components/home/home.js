import angular from 'angular';
import { homeDirective } from './home.directive';

export const home = angular.module( 'home', [] )
	.config( function ( $stateProvider, $urlRouterProvider ) {
		$urlRouterProvider.otherwise( '/' );

		$stateProvider.state( 'home', {
			url: '/',
			template: '<home></home>'
		} );

	} )
	.directive( 'home', homeDirective );
