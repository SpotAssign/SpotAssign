class DashboardController {
	constructor( service, $state, $timeout ) {
		this.service = service;
		this.state = $state;
		this.user = {};
		this.timeout = $timeout;
		this.getCurrentUser();
	}

	// The User is Always Directed to the Dashboard, but if they are not Admin
	// of a market/event then they are taken to the createEvent page
	getCurrentUser() {
		return this.service.user.getCurrentOrCreate()
		.then( user => {
			this.timeout(() => {
				this.user = user;
				if (!user.admin[0]) {
					this.state.go('createEvent')
				}
			} );
		} );
	}
}

DashboardController.$inject = [ 'service', '$state', '$timeout' ];
export { DashboardController };
