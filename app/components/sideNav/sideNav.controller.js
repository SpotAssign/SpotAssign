class SideNavController {
	constructor( service, $timeout ) {
		this.timeout = $timeout;
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
			this.timeout( () => {
				this.currentUser = user;
			} );
		} );
	}
	checkUser() {
		let checkUser = localStorage.getItem( 'currentUser' );
		checkUser = JSON.parse( checkUser );
	}


}
SideNavController.$inject = [ 'service', '$timeout' ];
export { SideNavController };
