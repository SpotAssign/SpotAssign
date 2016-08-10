import { errorDirective } from './error.directive';
import angular from 'angular';

export const error = angular.module( 'error', [] )
.directive( 'error', errorDirective );
