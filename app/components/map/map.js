import { mapDirective } from './map.directive';
import angular from 'angular';

export const map = angular.module( 'map', [] )
	.directive( 'map', mapDirective );
