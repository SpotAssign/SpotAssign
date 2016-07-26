import '../sideNav.scss';
import 'materialize-css/bin/materialize.css';
import { SideNavController as controller } from '../sideNav.controller';
import template from './sideNavUser.html';

export const sideNavUserDirective = () => {
	return {
		template,
		controller,
		controllerAs: 'vm',
		restrict: 'E',
		replace: true,
		scope: {}
	};
};
