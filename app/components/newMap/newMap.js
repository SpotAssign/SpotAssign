import angular from 'angular';
import { service } from '../../shared/service';

import { newMapDirective } from './newMap.directive';
import { stepOneDirective } from './steps/stepOne.directive';
import { stepTwoDirective } from './steps/stepTwo.directive';
import { stepThreeDirective } from './steps/stepThree.directive';

import 'filepicker-js';
import { map } from '../map/map';
import { sideNav } from '../sideNav/sideNav';

export const newMap = angular.module( 'newMap', [ map.name, sideNav.name ] )
	.config( function ( $stateProvider, $urlRouterProvider ) {
		$urlRouterProvider.otherwise( '/' );

		$stateProvider.state( 'newMap', {
			template: '<new-map></new-map>',
			url: '/newMap' // TODO
		} );
	} )
	.directive( 'newMap', newMapDirective )
	.directive( 'stepOne', stepOneDirective )
	.directive( 'stepTwo', stepTwoDirective )
	.directive( 'stepThree', stepThreeDirective )
	.factory( 'service', service );
