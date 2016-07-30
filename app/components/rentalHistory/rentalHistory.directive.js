import './rentalHistory.scss';
import { RentalHistoryController as controller } from './rentalHistory.controller';
import template from './rentalHistory.html';

export const rentalHistoryDirective = () => {
	return {
		controller,
		template,
		controllerAs: 'vm',
		scope: {},
		replace: true,
		restrict: 'E'
  	};
};
