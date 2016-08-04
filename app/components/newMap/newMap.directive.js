import './newMap.scss';
import { NewMapController as controller } from './newMap.controller';
import template from './newMap.html';

export const newMapDirective = () => {
	return {
		controller,
		template,
		controllerAs: 'vm',
		scope: {
			showMap: '='
		},
		replace: true,
		restrict: 'E'
	};
};
