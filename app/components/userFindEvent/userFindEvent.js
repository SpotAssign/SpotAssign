import { userFindEventDirective } from './userFindEvent.directive';
import angular from 'angular';

export const userFindEvent = angular.module( 'userFindEvent', [] )
.directive( 'userFindEvent', userFindEventDirective );
