import '../newMap.scss';
import 'materialize-css/bin/materialize.css';
import template from './stepOne.html';

export const stepOneDirective = () => {
	return {
		template,
		restrict: 'E',
		replace: true
	};
};
