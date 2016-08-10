import { footerDirective } from './footer.directive';
import angular from 'angular';

export const footer = angular.module( 'footer', [] )
	.directive( 'footerDirective', footerDirective );
