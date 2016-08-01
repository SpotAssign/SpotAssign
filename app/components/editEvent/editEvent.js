import { editEventDirective } from './editEvent.directive';
import angular from 'angular';
import { sideNav } from '../sideNav/sideNav';
import { service } from '../../shared/service';

export const editEvent = angular.module( 'editEvent', [ sideNav.name ] )
	.config( function( $stateProvider, $urlRouterProvider ) {
	$stateProvider.state( 'editEvent', {
		url: '/editEvent',
		template: '<edit-event></edit-event>'
	} );
} )
.directive( 'editEvent', editEventDirective )
.factory( 'service', service );
