angular.module( 'SpotAssign', [ 'ui.router' ] )

.config( function ( $stateProvider, $urlRouterProvider ) {

	$stateProvider
		.state( 'home', {
			url: '/',
			templateUrl: './views/home/home.html',
			controller: 'homeCtrl'
		} )
		.state( 'event', {
			url: '/event',
			templateUrl: './views/event/event.html',
			controller: 'eventCtrl'
		} );

	$urlRouterProvider.otherwise( '/' );

} );
