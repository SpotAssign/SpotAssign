import testingView from './views/testingViews/testingViews.html';

export default function routing( $stateProvider, $urlRouterProvider ) {

	$urlRouterProvider.otherwise( '/' );

	$stateProvider
		.state(
			'test', {
				url: '/',
				template: testingView
			}
		);

}
routing.$inject = [ `$stateProvider`, `$urlRouterProvider` ];
