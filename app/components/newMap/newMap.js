import { newMapDirective } from './newMap.directive';
import angular from 'angular';
import { service } from '../../shared/service';

import 'filepicker-js';
import { map } from '../map/map';

export const newMap = angular.module( 'newMap', [ map.name ] )

.directive( 'newMap', newMapDirective )
.factory( 'service', service );
