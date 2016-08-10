import './userFindEvent.scss';
import { UserFindEventController as controller } from './userFindEvent.controller';
import template from './userFindEvent.html';

export const userFindEventDirective = () => {
	return {
		controller,
		template,
		controllerAs: 'vm',
		scope: {},
		replace: true,
		restrict: 'E'
  	};
};
