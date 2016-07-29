import { userSpotsDirective } from './userSpots.directive';
import angular from 'angular';
import { service } from '../../shared/service';

// DELETE ROUTER IF NOT NEEDED
export const userSpots = angular.module( 'userSpots', [] )
.directive( 'userSpots', userSpotsDirective )
.factory( 'service', service );
