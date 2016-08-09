const routing = ( $locationProvider, $urlRouterProvider, $stateProvider ) => {
	$urlRouterProvider.otherwise( '/' );

	const isLogged = ( $q, userService ) => {
		if ( !userService.getState() ) {
			return $q.reject( 'AUTH_REQUIRED' );
		}
		return $q.resolve();
	};

	const setCurrentUser = ( $q, userService ) => {
		return userService.getCurrentUser().then( result => {
			if ( !userService.getState() ) {
				return $q.reject( 'AUTH_REQUIRED' );
			}
			return $q.resolve();
		} );
	};

	$stateProvider
	// CONTAINERS
		.state( 'home', { url: '/', template: '<home></home>' } )
		.state( 'user', {
			url: '/user',
			template: '<user></user>',
			resolve: {
				setCurrentUser
			}
		} )
		// SUB COMPONENTS
		.state( 'createEvent', {
			url: '/create-event',
			template: '<create-event></create-event>',
			resolve: { isLogged }
		} )
		.state( 'editEvent', {
			url: '/event/:name/edit-event',
			template: '<edit-event></edit-event>',
			resolve: { isLogged }
		} )
		.state( 'dashboard', {
			url: '/event/:name/dashboard',
			template: '<dashboard></dashboard>',
			resolve: {
				isLogged,
				getCurrentEvent( $stateParams ) { // TODO is this working?!?
					return this.service.getEvent( $stateParams.event ).then( response => {
						return response.data;
					} );
				}
			}
		} )
		.state( 'checkout', {
			url: '/event/:name/checkout',
			template: '<checkout></checkout>',
			resolve: { isLogged }
		} )
		.state( 'calendar', { // TODO Change URL
			url: '/calendar',
			template: '<calendar></calendar>',
			resolve: { isLogged }
		} )
		.state( 'event', { // TODO resolve with the params event
			url: '/event/:name',
			template: '<event></event>',
			resolve: {}
		} )
		.state( 'findEvent', {
			url: '/findEvent',
			template: '<find-event></find-event>'
		} )
		.state( 'manageUsers', {
			url: '/event/:name/manage-users',
			template: '<manage-users></manage-users>'
		} )
		.state( 'newMap', {
			url: '/create-map/:isAdmin',
			template: '<new-map></new-map>'
		} )
		.state( 'rentalHistory', {
			url: '/user/history',
			template: '<rental-history></rental-history>'
		} )
		.state( 'timePicker', {
			url: '/timepicker',
			template: '<time-picker></time-picker>'
		} )
		.state( 'transactionHistory', {
			url: '/user/transactions',
			template: '<transaction-history></transaction-history>'
		} )
		.state( 'userSpots', {
			url: '/user/spots',
			template: '<user-spots></user-spots>'
		} )
		.state( 'viewTransactions', {
			url: 'event/:name/transactions',
			template: '<view-transactions></view-transactions>'
		} )
};

routing.$inject = [
	'$locationProvider',
	'$urlRouterProvider',
	'$stateProvider'
];
export { routing };
