import angular from 'angular';
import { dashboardDirective } from './dashboard.directive';

export const dashboard = angular.module( 'dashboard', [] )
	.directive( 'dashboard', dashboardDirective );
