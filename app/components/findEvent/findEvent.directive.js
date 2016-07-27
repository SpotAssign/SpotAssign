import './findEvent.scss';
import { FindEventController as controller } from './findEvent.controller';
import template from './findEvent.html';

export const findEventDirective = () => {
	return {
		controller,
		template,
		controllerAs: 'vm',
		restrict: 'E',
		replace: true,
		scope: {}
	};
};
