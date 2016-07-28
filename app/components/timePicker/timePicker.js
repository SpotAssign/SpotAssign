import { timePickerDirective } from './timePicker.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

// DELETE ROUTER IF NOT NEEDED
export const timePicker = angular.module( 'timePicker', [ uiRouter ] )
.config( ( $stateProvider ) => {
	$stateProvider.state( 'timePicker', {
		url: '/timePicker',
		template: '<timePicker></timePicker>'
	} );
} )
.directive( 'timePicker', timePickerDirective );
