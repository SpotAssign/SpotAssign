angular.module( 'SpotAssign' )
.factory('profileService', function( $http ) {
    profileService = {};

      // -------------------------------------------------- //
      // -----------------CREATE EMAIL USER---------------- //
      // -------------------------------------------------- //

      profileService.createEmailUser = ( email, picture, authId ) => {
        return $http({
          method: 'POST',
          url: '/api/users',
          data: {
            email: email,
            picture: picture,
            id: authId
          }
        }).then( response => {
          return response.data;
        });
      }

      // -------------------------------------------------- //
      // -----------CREATE GOOGLE OR FACEBOOK USER--------- //
      // -------------------------------------------------- //

      profileService.createGoogleOrFacebookUser = ( fname, lname, email, picture, authId ) => {
        return $http({
          method: 'POST',
          url: '/api/users',
          data: {
            fname: fname,
            lname: lname,
            email: email,
            picture: picture,
            id: authId
          }
        }).then( response => {
          return response.data;
        });
      }



  return profileService;
});
