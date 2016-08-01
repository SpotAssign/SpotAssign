class SideNavController {
	constructor( service, $timeout ) {
		this.service = service;
		this.getCurrentUser();
		this.currentUser = {};
		this.userProfilePhoto = {};
		this.getLocal();
		$( '.button-collapse' ).sideNav( {
			menuWidth: 300,
			edge: 'left',
			closeOnClick: true
		} );
		this.checkUser();
		this.timeout = $timeout;
	}
	logout() {
		return this.service.user.logout();
	}
	getCurrentUser() {
		return this.service.user.getCurrentOrCreate()
		.then( user => {
			this.timeout( () => {
				this.user = user;
			} );
		} );
	}
	checkUser() {
		let checkUser = localStorage.getItem( 'currentUser' );
		checkUser = JSON.parse( checkUser );
		this.checkUser = checkUser.markets.length > 0;
	}
}
SideNavController.$inject = [ 'service', '$timeout' ];
export { SideNavController };
