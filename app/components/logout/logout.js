import { logoutDirective } from './logout.directive';
import angular from 'angular';

export const logout = angular.module( 'logout', [] )
	.directive( 'logout', logoutDirective );
