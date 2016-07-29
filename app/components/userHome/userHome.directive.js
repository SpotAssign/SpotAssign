import './userHome.scss';
import { UserHomeController as controller } from './userHome.controller';
import template from './userHome.html';

export const userHomeDirective = () => {
	return {
		controller,
		template,
		controllerAs: 'vm',
		scope: {},
		replace: true,
		restrict: 'E'
  	};
};
