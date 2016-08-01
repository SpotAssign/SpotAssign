class SideNavController {
	constructor( service ) {
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

	}
	logout() {
		return this.service.user.logout();
	}
	getCurrentUser() {
		return this.service.user.getCurrentOrCreate()
		.then( user => {
			this.timeout(() => {
				this.user = user
			} );
		} );
	}
	getLocal() {
		this.currentUser = this.service.user.getLocalUser()
			// const userPhoto = document.createElement( 'img' );
			// userPhoto.src = require( this.currentUser.photo );
			// this.userProfilePhoto = userPhoto.src;
		}
}


SideNavController.$inject = [ 'service' ];
export { SideNavController };
