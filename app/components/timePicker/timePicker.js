import { timePickerDirective } from './timePicker.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { service } from '../../services/service';


// DELETE ROUTER IF NOT NEEDED
export const timePicker = angular.module( 'timePicker', [ uiRouter ] )
.config( ( $stateProvider ) => {
	$stateProvider.state( 'timePicker', {
		url: '/timepicker',
		template: '<time-picker></time-picker>'
	} );
} )
.directive( 'timePicker', timePickerDirective )
.factory( 'service', service );
