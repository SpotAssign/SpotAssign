const userService = ( $http, $location ) => {
	const api = 'http://localhost:8080';
	let currentUser = null;
	return {
		setState( user ) {
			currentUser = user;
			console.log( 'SET USER ########## ', currentUser );
		},
		getState() {
			console.log( 'GET USER ########## ', currentUser );
			return currentUser;
		},
		getCurrentUser() {
			return $http.get( `${api}/api/user` )
				.then( result => {
					this.setState( result.data );
					return result.data;
				} );
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
