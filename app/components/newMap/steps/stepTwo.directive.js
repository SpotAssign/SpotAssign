import '../newMap.scss';
import 'materialize-css/bin/materialize.css';
import { NewMapController as controller } from '../newMap.controller';
import template from './stepTwo.html';

export const stepTwoDirective = () => {
	return {
		template,
		restrict: 'E',
		replace: true
	};
};
