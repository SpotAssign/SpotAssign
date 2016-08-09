import { calendarDirective } from './calendar.directive';
import angular from 'angular';
import angularMaterialize from 'angular-materialize';

export const calendar = angular.module( 'calendar', [ angularMaterialize ] )
	.directive( 'calendar', calendarDirective );
