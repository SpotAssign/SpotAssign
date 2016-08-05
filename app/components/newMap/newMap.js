import { newMapDirective } from './newMap.directive';
import angular from 'angular';
import { service } from '../../shared/service';

import 'filepicker-js';
import { map } from '../map/map';

export const newMap = angular.module( 'newMap', [ map.name ] )
	.config( function ( $stateProvider, $urlRouterProvider ) {
		$urlRouterProvider.otherwise( '/' );

		$stateProvider.state( 'newMap', {
			url: '/create/map',
			template: '<new-map></new-map>'
		} );
	} )
	.directive( 'newMap', newMapDirective )
	.factory( 'service', service );
