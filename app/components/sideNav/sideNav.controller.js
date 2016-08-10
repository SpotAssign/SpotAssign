class SideNavController {
	constructor( userService, eventService ) {
		this.userService = userService;
		this.currentUser = userService.getState();
		this.event = eventService.getState();

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
SideNavController.$inject = [ 'userService', 'eventService' ];
export { SideNavController };
