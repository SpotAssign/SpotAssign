// IMPORT GLOBAL STYLES
import './app.scss';

// IMPORT ANGULAR MODULES
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

// IMPORT COMPONENTS
import { appDirective } from './app.directive';

// START MODULE
angular.module( 'SpotAssign', [
	uiRouter,
	ngAnimate
] )
.directive( 'app', appDirective );
