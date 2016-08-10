import angular from 'angular';
import angularMaterialize from 'angular-materialize';
import { findEventDirective } from './findEvent.directive';

export const findEvent = angular.module( 'findEvent', [ angularMaterialize ] )
	.directive( 'findEvent', findEventDirective );
