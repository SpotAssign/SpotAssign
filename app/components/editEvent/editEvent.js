import { editEventDirective } from './editEvent.directive';
import angular from 'angular';

export const editEvent = angular.module( 'editEvent', [] )
	.directive( 'editEvent', editEventDirective );
