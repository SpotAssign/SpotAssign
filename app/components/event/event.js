import { eventDirective } from './event.directive';
import angular from 'angular';

export const event = angular.module( 'event', [] )
	.directive( 'event', eventDirective );
