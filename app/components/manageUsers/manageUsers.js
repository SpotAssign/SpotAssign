import angular from 'angular';
import { manageUsersDirective } from './manageUsers.directive';

export const manageUsers = angular.module( 'manageUsers', [] )
	.directive( 'manageUsers', manageUsersDirective );
