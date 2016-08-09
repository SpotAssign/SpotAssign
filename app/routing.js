const routing = ( $locationProvider, $urlRouterProvider, $stateProvider ) => {
	$urlRouterProvider.otherwise( '/' );

	const isLogged = ( $q, userService ) => {
		if ( !userService.getState() ) return $q.reject( 'AUTH_REQUIRED' );
		return $q.resolve();
	};

	const setCurrentUser = ( $q, userService ) => {
		return userService.getCurrentUser().then( result => {
			if ( !userService.getState() ) return $q.reject( 'AUTH_REQUIRED' );
			return $q.resolve();
		} );
	};

	const getCurrentEvent = ( $q, eventService, $stateParams ) => {
		return eventService.getEventByName( $stateParams.name ).then( result => {
			if ( !eventService.getState() ) return $q.reject( 'NO_EVENT' );
			return $q.resolve();
		} );
	};

	$stateProvider
		// HOME TODO ERROR PAGE
		.state( 'home', { url: '/', template: '<home></home>' } )
		.state( 'findEvent', {
			url: '/find-events',
			template: '<find-event></find-event>'
		} )
		// USER
		.state( 'user', {
			url: '/user',
			template: '<user></user>',
			resolve: {
				setCurrentUser
			}
		} )
		.state( 'createEvent', {
			url: '/user/create-event',
			template: '<create-event></create-event>',
			resolve: { isLogged }
		} )
		.state( 'rentalHistory', {
			url: '/user/history',
			template: '<rental-history></rental-history>',
			resolve: { isLogged }
		} )
		.state( 'transactionHistory', {
			url: '/user/transactions',
			template: '<transaction-history></transaction-history>',
			resolve: { isLogged }
		} )
		.state( 'userSpots', {
			url: '/user/spots',
			template: '<user-spots></user-spots>',
			resolve: { isLogged }
		} )
		// EVENT
		.state( 'event', {
			url: '/event/:name',
			template: '<event></event>',
			resolve: {
				getCurrentEvent
			}
		} )
		.state( 'editEvent', {
			url: '/event/:name/edit-event',
			template: '<edit-event></edit-event>',
			// resolve: { isLogged }
		} )
		.state( 'dashboard', {
			url: '/event/:name/dashboard',
			template: '<dashboard></dashboard>',
			// resolve: {
			// 	isLogged,
			// 	getCurrentEvent( $stateParams ) { // TODO is this working?!?
			// 		return this.service.getEvent( $stateParams.event ).then( response => {
			// 			return response.data;
			// 		} );
			// 	}
			// }
		} )
		.state( 'checkout', {
			url: '/event/:name/checkout',
			template: '<checkout></checkout>',
			// resolve: { isLogged }
		} )
		.state( 'manageUsers', {
			url: '/event/:name/manage-users',
			template: '<manage-users></manage-users>',
			// resolve: { isLogged }
		} )
		.state( 'viewTransactions', {
			url: 'event/:name/transactions',
			template: '<view-transactions></view-transactions>',
			// resolve: { isLogged }
		} )
		// GLOBAL
		.state( 'newMap', {
			url: '/create-map/:isAdmin',
			template: '<new-map></new-map>',
			resolve: { isLogged }
		} )
		// TBD
		// .state( 'calendar', { // TODO Change URL
		// 	url: '/calendar',
		// 	template: '<calendar></calendar>',
		// 	resolve: { isLogged }
		// } )
		// .state( 'timePicker', {
		// 	url: '/timepicker',
		// 	template: '<time-picker></time-picker>'
		// } );
};

routing.$inject = [
	'$locationProvider',
	'$urlRouterProvider',
	'$stateProvider'
];
export { routing };
