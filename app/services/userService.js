const userService = ( $http, $location ) => {
	const api = 'http://localhost:8080';
	let currentUser = null;
	return {
		setState( user ) {
			currentUser = user;
		},
		getState() {
			return currentUser;
		},
		getCurrentUser() {
			if ( !currentUser ) {
				return $http.get( `${api}/api/user` )
					.then( result => {
						if ( result.data.firstName ) {
							this.setState( result.data );
							return result.data;
						} else {
							$location.path( '/#/' );
						}
					} );
			} else {
				return currentUser;
			}
		},
		getAll() {
			return $http.get( `${api}/api/users` )
				.then( data => data );
		},
		logout () {
			this.setState( null );
			return $location.url( `/v2/logout?returnTo=${api}/#/` );
		}
	};
};

userService.$inject = [ '$http', '$location' ];
export { userService };
