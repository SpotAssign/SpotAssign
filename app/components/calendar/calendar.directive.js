import './calendar.scss';
import { CalendarController as controller } from './calendar.controller';
import template from './calendar.html';

export const calendarDirective = () => {
	return {
		controller,
		template,
		controllerAs: 'vm',
		scope: {
			date: '='
		},
		replace: true,
		restrict: 'E'
  	};
};
