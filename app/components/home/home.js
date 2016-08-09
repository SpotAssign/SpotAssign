import { homeDirective } from './home.directive';
import angular from 'angular';

export const home = angular.module( 'home', [] )
	.directive( 'home', homeDirective );
