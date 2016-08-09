import { homeDirective } from './home.directive';
import angular from 'angular';

import angularMaterialize from 'angular-materialize'; // TODO Do I need this?!?

export const home = angular.module( 'home', [ angularMaterialize ] )
	.directive( 'home', homeDirective );
