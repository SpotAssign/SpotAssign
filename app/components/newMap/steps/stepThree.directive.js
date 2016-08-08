import '../newMap.scss';
import 'materialize-css/bin/materialize.css';
import { NewMapController as controller } from '../newMap.controller';
import template from './stepThree.html';

export const stepThreeDirective = () => {
	return {
		template,
		restrict: 'E',
		replace: true
	};
};
