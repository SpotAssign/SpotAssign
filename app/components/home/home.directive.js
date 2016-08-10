import './home.scss';
import { HomeController as controller } from './home.controller';
import template from './home.html';

export const homeDirective = () => {
	return {
		template,
		controller,
		controllerAs: 'vm',
		restrict: 'EA',
		replace: true,
		scope: {}
	};
};
