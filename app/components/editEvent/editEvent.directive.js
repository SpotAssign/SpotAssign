import './editEvent.scss';
import { EditEventController as controller } from './editEvent.controller';
import template from './editEvent.html';

export const editEventDirective = () => {
	return {
		controller,
		template,
		controllerAs: 'vm',
		scope: {},
		replace: true,
		restrict: 'E'
  	};
};
