import './createEvent.scss';
import { CreateEventController as controller } from './createEvent.controller';
import template from './createEvent.html';

export const createEventDirective = () => {
	return {
		template,
		controller,
		controllerAs: 'vm',
		restrict: 'E',
		replace: true,
		scope: {}
	};
};
