import { userDirective } from './user.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import { userSpots } from '../userSpots/userSpots';
import { transactionHistory } from '../transactionHistory/transactionHistory';
import { rentalHistory } from '../rentalHistory/rentalHistory';

export const userHome = angular.module(
	'userHome', [
		uiRouter,
		userSpots.name,
		rentalHistory.name,
		transactionHistory.name
	] )
	.directive( 'user', userDirective );
