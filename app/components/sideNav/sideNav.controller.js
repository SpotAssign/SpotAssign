class SideNavController {
	constructor( service ) {
		this.service = service;
		this.getCurrentUser();
		this.currentUser = {};
		this.setTimeout(function () {

		}, 10);
		this.userProfilePhoto = {};
		this.getLocal();
		$( '.button-collapse' ).sideNav( {
			menuWidth: 300,
			edge: 'left',
			closeOnClick: true
		} );
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
	getLocal() {
		// setTimeout( function () {
		// 	this.currentUser = this.service.user.getLocalUser();
		// }, 500 );
		}
}


SideNavController.$inject = [ 'service' ];
export { SideNavController };
