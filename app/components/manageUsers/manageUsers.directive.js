import './manageUsers.scss';
import { manageUsersController as controller } from './manageUsers.controller';
import template from './manageUsers.html';
import 'materialize-css/bin/materialize.css';

export const manageUsersDirective = () => {
	return {
		template,
		controller,
		controllerAs: 'vm',
		restrict: 'E',
		replace: true,
		scope: {}
	};
};
