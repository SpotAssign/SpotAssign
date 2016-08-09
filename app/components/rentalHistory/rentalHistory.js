import { rentalHistoryDirective } from './rentalHistory.directive';
import angular from 'angular';

export const rentalHistory = angular.module( 'rentalHistory', [] )
	.directive( 'rentalHistory', rentalHistoryDirective );
