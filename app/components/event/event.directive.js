import './event.scss';
import { EventController as controller } from './event.controller';
import template from './event.html';

export const eventDirective = () => {
	return {
		controller,
		template,
		controllerAs: 'vm',
		restrict: 'E',
		replace: true,
		scope: {}
	};
};
