// IMPORT GLOBAL STYLES
import './app.scss';

// IMPORT ANGULAR MODULES
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

// IMPORT COMPONENTS
import { appDirective } from './app.directive';
import { home } from './components/home/home';
import { event } from './components/event/event';
import { dashboard } from './components/dashboard/dashboard';
import { userHome } from './components/userHome/userHome';
import { newMap } from './components/newMap/newMap';

// START MODULE
angular.module( 'SpotAssign', [
	uiRouter,
	ngAnimate,
	home.name,
	event.name,
	dashboard.name,
	userHome.name,
	newMap.name
] )
.directive( 'app', appDirective );
