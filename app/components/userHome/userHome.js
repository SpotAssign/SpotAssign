import { userHomeDirective } from './userHome.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { sideNav } from '../sideNav/sideNav';
import { userSpots } from '../userSpots/userSpots';
import { transactionHistory } from '../transactionHistory/transactionHistory';
import { rentalHistory } from '../rentalHistory/rentalHistory';
import { service } from '../../shared/service';


// DELETE ROUTER IF NOT NEEDED
export const userHome = angular.module( 'userHome', [ uiRouter, userSpots.name, rentalHistory.name, transactionHistory.name ] )
.config( ( $stateProvider ) => {
	$stateProvider.state( 'userHome', {
		url: '/user',
		template: '<user-home></user-home>'
	} );
} )
.directive( 'userHome', userHomeDirective )
.factory( 'service', service );
