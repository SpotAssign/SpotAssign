import './userSpots.scss';
import 'materialize-css/bin/materialize.css';
import template from './userSpots.html';
import { UserSpotsController as controller } from './userSpots.controller';

export const userSpotsDirective = () => {
	return {
		template,
		controller,
		controllerAs: 'vm',
		restrict: 'E',
		replace: true,
		scope: {}
	};
};
