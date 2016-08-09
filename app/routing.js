const routing = ( $locationProvider, $urlRouterProvider, $stateProvider ) => {
	$urlRouterProvider.otherwise( '/' );

	const isLogged = ( $q, userService ) => {
		console.log( userService.getState() );
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
		.state( 'home', { url: '/', template: '<home></home>' } )
		.state( 'user',
			{
				url: '/user',
				template: '<user></user>',
				resolve: {
					setCurrentUser
				}
			}
		);
};

routing.$inject = [
	'$locationProvider',
	'$urlRouterProvider',
	'$stateProvider'
];
export { routing };
