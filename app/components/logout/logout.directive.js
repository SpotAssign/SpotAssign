import './logout.scss';
import { LogoutController as controller } from './logout.controller';
import template from './logout.html';

export const logoutDirective = () => {
	return {
		controller,
		template,
		controllerAs: 'vm',
		scope: {
			user: '='
		},
		replace: true,
		restrict: 'E'
  	};
};
