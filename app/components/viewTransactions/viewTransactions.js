import { viewTransactionsDirective } from './viewTransactions.directive';
import angular from 'angular';

export const viewTransactions = angular.module( 'viewTransactions', [] )
	.directive( 'viewTransactions', viewTransactionsDirective );
