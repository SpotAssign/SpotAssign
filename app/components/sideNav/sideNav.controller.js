class SideNavController {
	constructor( service ) {
		this.service = service;
		this.currentUser = {};
		this.userProfilePhoto = {};
		this.getUser();
		$( '.button-collapse' ).sideNav( {
			menuWidth: 300,
			edge: 'left',
			closeOnClick: true
		} );

	}
	logout() {
		return this.service.user.logout();
	}
	getUser() {
		return this.service.user.getCurrentOrCreate().then( (user) => {
			this.currentUser = user;
			// const userPhoto = document.createElement( 'img' );
			// userPhoto.src = require( this.currentUser.photo );
			// this.userProfilePhoto = userPhoto.src;
		} );
	}
}


SideNavController.$inject = [ 'service' ];
export { SideNavController };
