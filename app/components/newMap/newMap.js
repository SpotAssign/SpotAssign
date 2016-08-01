import { newMapDirective } from './newMap.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import 'filepicker-js';
import { map } from '../map/map';

export const newMap = angular.module( 'newMap', [ uiRouter, map.name ] )
.config( ( $stateProvider ) => {
	$stateProvider.state( 'newMap', {
		url: '/newMap',
		template: '<new-map></new-map>'
	} );
} )
.directive( 'newMap', newMapDirective );
