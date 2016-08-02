class manageUsersController {
	constructor( service, $timeout, $state ) {
		this.event = {};
		this.service = service;
		this.timeout = $timeout;
		this.state = $state;
		this.user= {};
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

manageUsersController.$inject = [ 'service', '$timeout', '$state' ];
export { manageUsersController };
