import { timePickerDirective } from './timePicker.directive';
import angular from 'angular';

export const timePicker = angular.module( 'timePicker', [] )
	.directive( 'timePicker', timePickerDirective );
