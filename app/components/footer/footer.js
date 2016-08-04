import { footerDirective } from './footer.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

// DELETE ROUTER IF NOT NEEDED
export const footer = angular.module( 'footer', [ uiRouter ] )
.config( ( $stateProvider ) => {
	$stateProvider.state( 'footer', {
		url: '/footer',
		template: '<footer-directive></footer-directive>'
	} );
} )
.directive( 'footerDirective', footerDirective );
