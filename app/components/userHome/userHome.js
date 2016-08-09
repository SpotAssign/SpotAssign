import { userHomeDirective } from './userHome.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { userSpots } from '../userSpots/userSpots';
import { transactionHistory } from '../transactionHistory/transactionHistory';
import { rentalHistory } from '../rentalHistory/rentalHistory';
import { service } from '../../shared/service';

export const userHome = angular.module(
	'userHome', [
		uiRouter,
		userSpots.name,
		rentalHistory.name,
		transactionHistory.name
	] )
	.config( ( $stateProvider, $urlRouterProvider ) => {
		$urlRouterProvider.otherwise( '/' );

		$stateProvider.state( 'userHome', {
			url: '/user',
			template: '<user-home></user-home>'
		} );
	} )
	.directive( 'userHome', userHomeDirective )
	.factory( 'service', service );
