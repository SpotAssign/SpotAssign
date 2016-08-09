import { userSpotsDirective } from './userSpots.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { service } from '../../services/service';
import { sideNav } from '../sideNav/sideNav';


export const userSpots = angular.module( 'userSpots', [ uiRouter ] )
.config( ( $stateProvider ) => {
	$stateProvider.state( 'userSpots', {
		url: '/user/spots',
		template: '<user-spots></user-spots>'
	} );
} )
.directive( 'userSpots', userSpotsDirective )
.factory( 'service', service );
