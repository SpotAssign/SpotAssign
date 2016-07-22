import testingView from './views/testingViews/testingViews.html';

export default function routing( $stateProvider, $urlRouterProvider ) {

	$urlRouterProvider.otherwise( '/' );

	$stateProvider
		.state(
			'test', {
				url: '/',
				template: testingView
			}
		)
		.state(
			'serverTest', {
				url: '/serverTest',
				templateUrl: './serverTesting/serverTesting.html',
				controller: 'serverTestingCtrl'
			}
		)

}
routing.$inject = [ `$stateProvider`, `$urlRouterProvider` ];
