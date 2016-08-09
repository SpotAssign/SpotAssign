import angular from 'angular';
import { createEventDirective } from './createEvent.directive';
import { service } from '../../shared/service';

import 'filepicker-js';
import { sideNav } from '../sideNav/sideNav';
import { logout } from '../logout/logout';

export const createEvent = angular.module( 'createEvent', [ sideNav.name, logout.name ] )
	.config( function( $stateProvider, $urlRouterProvider ) {
		$urlRouterProvider.otherwise( '/' );

		$stateProvider.state( 'createEvent', {
			url: '/create-event',
			template: '<create-event></create-event>'
		} );
	} )
	.directive( 'createEvent', createEventDirective )
	.factory( 'service', service );
