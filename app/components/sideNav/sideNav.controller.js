class SideNavController {
	constructor( userService ) {
		this.userService = userService;
		this.currentUser = userService.getState();

		$( '.button-collapse' ).sideNav( {
			menuWidth: 300,
			edge: 'left',
			closeOnClick: true
		} );
	}

	logout() {
		return this.userService.logout();
	}

}
SideNavController.$inject = [ 'userService' ];
export { SideNavController };
