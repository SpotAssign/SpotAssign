import './user.scss';
import { UserController as controller } from './user.controller';
import template from './user.html';

export const userDirective = () => {
	return {
		controller,
		template,
		controllerAs: 'vm',
		scope: {},
		replace: true,
		restrict: 'E'
	};
};
