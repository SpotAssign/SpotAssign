import { mapDirective } from './map.directive';
import angular from 'angular';
import angularMaterialize from 'angular-materialize';

export const map = angular.module( 'map', [ angularMaterialize ] )
	.directive( 'map', mapDirective );
