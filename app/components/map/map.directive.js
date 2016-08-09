import './map.scss';
import { MapController as controller } from './map.controller';
import template from './map.html';

export const mapDirective = () => {
	return {
		controller,
		template,
		controllerAs: 'vm',
		scope: {
			map: '=',
			show: '='
		},
		replace: true,
		restrict: 'E'
	};
};
