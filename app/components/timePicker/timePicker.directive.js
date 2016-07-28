import './timePicker.scss';
import { TimePickerController as controller } from './timePicker.controller';
import template from './timePicker.html';

export const timePickerDirective = () => {
	return {
		controller,
		template,
		controllerAs: 'vm',
		scope: {
			hours: '='
		},
		replace: true,
		restrict: 'E'
  	};
};
