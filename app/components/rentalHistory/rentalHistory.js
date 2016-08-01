import { rentalHistoryDirective } from './rentalHistory.directive';
import angular from 'angular';
import { service } from '../../shared/service';

export const rentalHistory = angular.module( 'rentalHistory', [ ] )
.directive( 'rentalHistory', rentalHistoryDirective )
.factory( 'service', service );
