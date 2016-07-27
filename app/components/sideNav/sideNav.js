import angular from 'angular';
import { sideNavDirective } from './sideNav.directive';
import { sideNavUserDirective } from './sideNavUser/sideNavUser.directive';
import { sideNavAdminDirective } from './sideNavAdmin/sideNavAdmin.directive';

import { userSpots } from '../userSpots/userSpots';

export const sideNav = angular.module( 'sideNav', [ userSpots.name ] )
	.directive( 'sideNav', sideNavDirective )
	.directive( 'sideNavUser', sideNavUserDirective )
	.directive( 'sideNavAdmin', sideNavAdminDirective );
