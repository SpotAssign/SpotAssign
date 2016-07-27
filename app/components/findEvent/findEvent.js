import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularMaterialize from 'angular-materialize';
import { findEventDirective } from './findEvent.directive';

export const findEvent = angular.module(
	'findEvent', [
		uiRouter,
		angularMaterialize
	]
)
.config( function ( $stateProvider, $urlRouterProvider ) {
	$urlRouterProvider.otherwise( '/' );

	$stateProvider.state( 'findEvent', {
		url: '/find',
		template: '<find-event></find-event>'
	} );
} )
.directive( 'findEvent', findEventDirective );
