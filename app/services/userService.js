const userService = ( $http, $location ) => {
	const api = 'http://localhost:8080';
	let currentUser = null;
	return {
		state: {
			set( user ) {
				currentUser = user;
				console.log( 'SET USER ########## ', currentUser );
			},
			get() {
				console.log( 'GET USER ########## ', currentUser );
				return currentUser;
			}
		},
		api: {
			getCurrentUser() {
				return $http.get( `${api}/user` )
					.then( ( { data } ) => {
						this.state.set( data );
						return data;
					} );
			},
			getOne( id ) {
				return $http.get( `${api}/api/users/${id}` )
					.then( data => data );
			},
			getAll() {
				return $http.get( `${api}/api/users` )
					.then( data => data );
			},
			editOne( id, editedUser ) { // TODO do we need this?!?
				return $http( {
					method: 'PUT',
					url: `${api}/api/users/${id}`,
					data: {
						phoneNumber: editedUser.phoneNumber,
						boothCompName: editedUser.boothCompName,
						paymentInfo: editedUser.paymentInfo
					}
				} ).then( data => data );
			},
			logout () {
				this.state.set( null );
				return $location.url( `/v2/logout?returnTo=${api}/#/` );
			}
		}
	};
};

userService.$inject = [ '$http', '$location' ];
export { userService };
