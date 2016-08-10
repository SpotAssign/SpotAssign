import './error.scss';
import { ErrorController as controller } from './error.controller';
import template from './error.html';

export const errorDirective = () => {
	return {
		controller,
		template,
		controllerAs: 'vm',
		scope: {},
		replace: true,
		restrict: 'E'
  	};
};
