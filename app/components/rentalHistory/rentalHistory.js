import { rentalHistoryDirective } from './rentalHistory.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { service } from '../../services/service';
import { sideNav } from '../sideNav/sideNav';


export const rentalHistory = angular.module( 'rentalHistory', [ uiRouter ] )
.config( ( $stateProvider ) => {
	$stateProvider.state( 'rentalHistory', {
		url: '/user/history',
		template: '<rental-history></rental-history>'
	} );
} )
.directive( 'rentalHistory', rentalHistoryDirective )
.factory( 'service', service );
