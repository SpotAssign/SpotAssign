class SideNavController {
	constructor( service ) {
		this.service = service;
		$( '.button-collapse' ).sideNav( {
			menuWidth: 300,
			edge: 'left',
			closeOnClick: true
		} );
	}
	logout() {
		return this.service.user.logout()
	}
}

SideNavController.$inject = [ 'service' ];
export { SideNavController };
