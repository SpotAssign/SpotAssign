import angular from 'angular';
import { sideNavDirective } from './sideNav.directive';
import { sideNavUserDirective } from './sideNavUser/sideNavUser.directive';
import { sideNavAdminDirective } from './sideNavAdmin/sideNavAdmin.directive';
import { userService } from '../../services/userService';

export const sideNav = angular.module( 'sideNav', [] )
	.directive( 'sideNav', sideNavDirective )
	.directive( 'sideNavUser', sideNavUserDirective )
	.directive( 'sideNavAdmin', sideNavAdminDirective )
	.factory( 'userService', userService );
