import angular from 'angular';
import { viewTransactionsDirective } from './viewTransactions.directive';
import { sideNav } from '../sideNav/sideNav';
import { service } from '../../shared/service';

export const viewTransactions = angular.module( 'viewTransactions', [ sideNav.name ] )
	.config( function( $stateProvider, $urlRouterProvider ) {
		$urlRouterProvider.otherwise( '/' );

		$stateProvider.state( 'viewTransactions', {
			url: '/admin/viewtransactions',
			template: '<view-transactions></view-transactions>'
		} );
	} )
	.directive( 'viewTransactions', viewTransactionsDirective )
	.factory( 'service', service );
