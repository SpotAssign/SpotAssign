import angular from 'angular';
import { manageUsersDirective } from './manageUsers.directive';
import { sideNav } from '../sideNav/sideNav';
import { service } from '../../services/service';

export const manageUsers = angular.module( 'manageUsers', [ sideNav.name ] )
	.config( function( $stateProvider, $urlRouterProvider ) {
		$urlRouterProvider.otherwise( '/' );

		$stateProvider.state( 'manageUsers', {
			url: '/admin/manageusers',
			template: '<manage-users></manage-users>'
		} );
	} )
	.directive( 'manageUsers', manageUsersDirective )
	.factory( 'service', service );
