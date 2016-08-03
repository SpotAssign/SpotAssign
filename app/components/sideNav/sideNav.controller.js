class SideNavController {
	constructor( service, $timeout, $state ) {
		this.timeout = $timeout;
		this.state = $state;
		this.service = service;
		this.getCurrentUser();
		this.currentUser = {};
		this.userProfilePhoto = {};
		$( '.button-collapse' ).sideNav( {
			menuWidth: 300,
			edge: 'left',
			closeOnClick: true
		} );
		this.checkUser();
	}
	logout() {
		return this.service.user.logout();
	}
	getCurrentUser() {
		return this.service.user.getCurrentOrCreate()
		.then( user => {
			if ( user.userAuthenticated === false ) {
				return this.state.go( 'home' )
			}
			else {
				this.currentUser = user;
			}
		} );
	}
	checkUser() {
		let checkUser = localStorage.getItem( 'currentUser' );
		checkUser = JSON.parse( checkUser );
	}


}
SideNavController.$inject = [ 'service', '$timeout', '$state' ];
export { SideNavController };
