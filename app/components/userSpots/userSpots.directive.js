import './userSpots.scss';
import { UserSpotsController as controller } from './userSpots.controller';
import template from './userSpots.html';

export const userSpotsDirective = () => {
	return {
		controller,
		template,
		controllerAs: 'vm',
		scope: {},
		replace: true,
		restrict: 'E'
  	};
};
