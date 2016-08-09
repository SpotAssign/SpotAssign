import { userDirective } from './user.directive';
import angular from 'angular';

export const user = angular.module( 'user', [] )
	.directive( 'user', userDirective );
