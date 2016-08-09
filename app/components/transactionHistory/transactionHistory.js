import { transactionHistoryDirective } from './transactionHistory.directive';
import angular from 'angular';

export const transactionHistory = angular.module( 'transactionHistory', [] )
	.directive( 'transactionHistory', transactionHistoryDirective );
