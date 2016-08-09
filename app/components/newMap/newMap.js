import angular from 'angular';

import { newMapDirective } from './newMap.directive';
import { stepOneDirective } from './steps/stepOne.directive';
import { stepTwoDirective } from './steps/stepTwo.directive';
import { stepThreeDirective } from './steps/stepThree.directive';

import 'filepicker-js';

export const newMap = angular.module( 'newMap', [] )
	.directive( 'newMap', newMapDirective )
	.directive( 'stepOne', stepOneDirective )
	.directive( 'stepTwo', stepTwoDirective )
	.directive( 'stepThree', stepThreeDirective );
