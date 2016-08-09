import angular from 'angular';
import { checkoutDirective } from './checkout.directive';

export const checkout = angular.module( 'checkout', [] )
	.directive( 'checkout', checkoutDirective );
