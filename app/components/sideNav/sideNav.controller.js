class SideNavController {
	constructor( userService ) {
		this.currentUser = userService.state.get();
		this.userProfilePhoto = '';
		$( '.button-collapse' ).sideNav( {
			menuWidth: 300,
			edge: 'left',
			closeOnClick: true
		} );
	}

	logout() {
		return this.userService.api.logout();
	}

}
SideNavController.$inject = [ 'userService' ];
export { SideNavController };
