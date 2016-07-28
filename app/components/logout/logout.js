import { logoutDirective } from './logout.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

// DELETE ROUTER IF NOT NEEDED
export const logout = angular.module( 'logout', [ uiRouter ] )
.config( ( $stateProvider ) => {
	$stateProvider.state( 'logout', {
		url: '/logout',
		template: '<logout></logout>'
	} );
} )
.directive( 'logout', logoutDirective );
