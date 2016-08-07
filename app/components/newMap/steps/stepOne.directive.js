import '../newMap.scss';
import 'materialize-css/bin/materialize.css';
import { NewMapController as controller } from '../newMap.controller';
import template from './stepOne.html';

export const stepOneDirective = () => {
	return {
		template,
		controller,
		controllerAs: 'vm',
		restrict: 'E',
		replace: true,
		scope: {}
	};
};
