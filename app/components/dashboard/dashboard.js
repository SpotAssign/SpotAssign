import angular from 'angular';
import { dashboardDirective } from './dashboard.directive';
import { sideNav } from '../sideNav/sideNav';
import { calendar } from '../calendar/calendar';
import { timePicker } from '../timePicker/timePicker';
import { logout } from '../logout/logout';
import { newMap } from '../newMap/newMap';
import { map } from '../map/map';
import { stateService } from '../../shared/stateService';


export const dashboard = angular.module( 'dashboard', [ sideNav.name, calendar.name,
	timePicker.name, logout.name, newMap.name, map.name ] )
.config( function ( $stateProvider, $urlRouterProvider ) {
	// $urlRouterProvider.otherwise( '/' );

	$stateProvider.state( 'dashboard', {
		url: '/:event/dashboard',
		template: '<dashboard></dashboard>',
		resolve: {
			getCurrentEvent( $stateParams ) {
				return this.service.getEvent( $stateParams.event ).then( response => {
					return response.data;
				} );
			}
		}
	} );
} )
	.directive( 'dashboard', dashboardDirective )
	.factory( 'stateService', stateService );
