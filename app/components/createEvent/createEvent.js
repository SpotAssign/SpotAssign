import angular from 'angular';
import { createEventDirective } from './createEvent.directive';

import 'filepicker-js';

export const createEvent = angular.module( 'createEvent', [] )
	.directive( 'createEvent', createEventDirective );
