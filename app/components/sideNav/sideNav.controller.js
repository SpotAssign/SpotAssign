class SideNavController {
	constructor( userService ) {

		this.currentUser = userService.getState();
		this.userService = userService;

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
