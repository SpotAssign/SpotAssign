import './checkout.scss';
import { CheckoutController as controller } from './checkout.controller';
import template from './checkout.html';

export const checkoutDirective = () => {
	return {
		template,
		controller,
		controllerAs: 'vm',
		restrict: 'E',
		replace: true,
		scope: {}
	};
};
