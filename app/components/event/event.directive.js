import './event.scss';
import { EventController as controller } from './event.controller';
import template from './event.html';

export const eventDirective = () => {
	return {
		controller,
		template,
		controllerAs: 'vm',
		scope: {},
		replace: true,
		restrict: 'E'
	};
};
