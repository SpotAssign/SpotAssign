import './footer.scss';
import { FooterController as controller } from './footer.controller';
import template from './footer.html';

export const footerDirective = () => {
	return {
		controller,
		template,
		controllerAs: 'vm',
		scope: {},
		replace: true,
		restrict: 'EA'
  	};
};
