angular.module( 'SpotAssign' )
	.controller( 'homepageCtrl', function ( $scope, jwtHelper, $rootScope, $location, store, auth, profileService ) {

		$scope.login = () => {

	            auth.signin({
	                icon: '',
	                callbackUrL: '/'
	            }, function( profile, idToken, accessToken, state, refreshToken ) {

	                profileService.checkUser( profile.email ).then( response => {

	                  if ( response !== 'User' ) {

	                    // EMAIL LOG IN
	                    if ( profile.user_id.slice( 0, 4 ) === 'auth' ) {

	                      profileService.createEmailUser( profile.email, profile.picture, profile.user_id ).then( response => {

	                        $scope.userDetails = response;
	                      });

	                    // GOOGLE LOG IN
	                  } else if ( profile.user_id.slice( 0, 4 ) === 'goog' ) {

	                      profileService.createGoogleOrFacebookUser( profile.given_name, profile.family_name, profile.email, profile.picture,
	                        profile.user_id ).then( response => {

	                          $scope.userDetails = response;
	                        });

	                    // FACEBOOK LOG IN
	                  } else if ( profile.user_id.slice( 0, 4 ) === 'face' ) {

	                    profileService.createGoogleOrFacebookUser( profile.given_name, profile.family_name, profile.email, profile.picture_large,
	                      profile.user_id ).then( response => {

	                        $scope.userDetails = response;
	                      });
	                  }
	                  } else {

	                    profileService.findUserByEmail( profile.email ).then( response => {

	                      $scope.userDetails = response;
	                    });
	                  }
	                });

	                $scope.userIsLoggedIn = true;
	            }, function( err ) {
								console.log( err, 'homeCtrl line 52');
	            });
	        }

	        $rootScope.$on('$locationChangeStart', function() {
	            // Grab the user's token
	            let token = store.get( 'token' );
	            let refreshToken = store.get( 'refreshToken' );
	            console.log( token, 'this is the token');
	            // Check if token was actually stored
	            if ( token ) {
	                // Check if token is yet to expire
	                console.log( !jwtHelper.isTokenExpired( token ))
	                if ( !jwtHelper.isTokenExpired( token ) ) {
	                  console.log( 'token is not expired ');
	                    // Check if the user is not authenticated
	                    if ( !auth.isAuthenticated ) {
	                        // Re-authenticate with the user's profile
	                        // Calls authProvider.on('authenticated')
	                        auth.authenticate( store.get( 'profile' ), token );
	                    }
	                } else {
	                    // Either show the login page
	                    // $location.path('/');
	                    console.log( 'this is what is happening 105 navbarCtrl');
	                    // .. or
	                    // or use the refresh token to get a new idToken
	                    console.log( auth.refreshIdToken( refreshToken ));
	                    auth.refreshIdToken( refreshToken );
	                }
	            }

	        });



	} );
