class DashboardController {
	constructor( service, $state, $timeout ) {
		this.service = service;
		this.state = $state;
		this.user = {};
		this.timeout = $timeout;
		this.getCurrentUser();
	}

	getCurrentUser() {
		return this.service.user.getCurrentOrCreate()
		.then( user => {
			this.timeout(() => {
				this.user = user;
			} );
		} );
	}

}

DashboardController.$inject = [ 'service', '$state', '$timeout' ];
export { DashboardController };
