import { userSpotsDirective } from './userSpots.directive';
import angular from 'angular';


export const userSpots = angular.module( 'userSpots', [] )
	.directive( 'userSpots', userSpotsDirective );
