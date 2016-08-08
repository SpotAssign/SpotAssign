// IMPORT GLOBAL STYLES
import './app.scss';

// IMPORT ANGULAR MODULES
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import { stateService } from './shared/stateService';

// IMPORT COMPONENTS
import { appDirective } from './app.directive';
import { home } from './components/home/home';
import { event } from './components/event/event';
import { dashboard } from './components/dashboard/dashboard';
import { userHome } from './components/userHome/userHome';
import { newMap } from './components/newMap/newMap';
import { editEvent } from './components/editEvent/editEvent';
import { manageUsers } from './components/manageUsers/manageUsers';
import { viewTransactions } from './components/viewTransactions/viewTransactions';

// START MODULE
angular.module( 'SpotAssign', [
	uiRouter,
	ngAnimate,
	home.name,
	event.name,
	dashboard.name,
	userHome.name,
	newMap.name,
	editEvent.name,
	manageUsers.name,
	viewTransactions.name
] )
	.service( 'stateService', stateService )
	.directive( 'app', appDirective );
