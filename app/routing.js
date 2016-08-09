import { userService } from './services/userService';

const routing = ( $locationProvider, $urlRouterProvider, $stateProvider ) => {
	$urlRouterProvider.otherwise( '/' );

	const isLogged = ( $q ) => {
		if ( !userService.state.get() || !userService.api.getCurrentUser() ) {
			return $q.reject( 'AUTH_REQUIRED' );
		}
		return $q.resolve();
	};

	$stateProvider
		.state( 'home', { url: '/', template: '<home></home>' } )
		.state( 'user',
			{
				url: '/user',
				template: '<user></user>',
				resolve: {
					// isLogged
				}
			}
		);
};
// TODO Do I need this?!?
routing.$inject = [
	'$locationProvider',
	'$urlRouterProvider',
	'$stateProvider'
];
export { routing };
