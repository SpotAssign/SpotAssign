import '../sideNav.scss';
import 'materialize-css/bin/materialize.css';
import { SideNavController as controller } from '../sideNav.controller';
import template from './sideNavAdmin.html';

export const sideNavAdminDirective = () => {
	return {
		template,
		controller,
		controllerAs: 'vm',
		restrict: 'E',
		replace: true,
		scope: {}
	};
};
