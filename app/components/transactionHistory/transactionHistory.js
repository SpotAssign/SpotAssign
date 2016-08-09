import { transactionHistoryDirective } from './transactionHistory.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { service } from '../../services/service';

export const transactionHistory = angular.module( 'transactionHistory', [ uiRouter ] )
.config( ( $stateProvider ) => {
	$stateProvider.state( 'transactionHistory', {
		url: '/user/transactions',
		template: '<transaction-history></transaction-history>'
	} );
} )
.directive( 'transactionHistory', transactionHistoryDirective )
.factory( 'service', service );
