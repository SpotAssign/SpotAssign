angular.module('SpotAssign', ['ui.router', 'auth0', 'angular-storage', 'angular-jwt'])

.config( function( $stateProvider, $urlRouterProvider ) {

$stateProvider
.state( 'home', {
  url: '/',
  templateUrl: './views/home/home.html',
  controller: 'homepageCtrl'
})
.state( 'event', {
  url: '/event',
  templateUrl: './views/event/event.html',
  controller: 'eventCtrl'
} );

$urlRouterProvider.otherwise( '/' );

})
.config( function myAppConfig ( authProvider ) {

  authProvider.init({
    domain: 'spotassignfm.auth0.com',
    clientID: 'IQOgL0n5YfMI3PK2zHxjaIktv0TRBwMA',
    loginState: 'home'
})
        //Called when login is successful
        authProvider.on( 'loginSuccess', [ '$location', 'profilePromise', 'refreshToken', 'idToken', 'store', function( $location, profilePromise, idToken, refreshToken, store ) {
            // Successfully log in
            // Access to user profile and token
            profilePromise.then(profile => {

              store.set('profile', profile);
              store.set( 'refreshToken', refreshToken );
              store.set('token', idToken);
            })

            $location.url('/welcome');
        }]);

        //Called when login fails
        authProvider.on( 'loginFailure', function() {
        });

        authProvider.on( 'authenticated', function() {
  // if user is authenticated.
  // Useful in re-authentication
        });

}).run( function( auth ) {
   auth.hookEvents();
 });
