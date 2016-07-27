import angular from 'angular';
import { userSpotsDirective } from './userSpots.directive';

export const userSpots = angular.module( 'userSpots', [] )
	.config( function ( $stateProvider, $urlRouterProvider ) {
		$urlRouterProvider.otherwise( '/' );

		$stateProvider.state( 'userSpots', {
			url: '/user/spots',
			template: '<user-spots></user-spots>'
		} );
	} )
	.directive( 'userSpots', userSpotsDirective );
