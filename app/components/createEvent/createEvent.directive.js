import './createEvent.scss';
import { CreateEventController as controller } from './createEvent.controller';
import template from './createEvent.html';
import 'materialize-css/bin/materialize.css';

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
