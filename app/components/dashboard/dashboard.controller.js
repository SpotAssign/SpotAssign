class DashboardController {
	constructor( service, $state, $timeout, stateService ) {
		this.service = service;
		this.state = $state;
		this.timeout = $timeout;
		this.stateService = stateService;

		this.getCurrentUser();
	}

	// The User is Always Directed to the Dashboard, but if they are not Admin
	// of a market/event then they are taken to the createEvent page
	getCurrentUser() {
		return this.service.user.getCurrentOrCreate()
			.then( user => {
				this.stateService.user.setCurrentUser( user );
				if ( !user.admin[0] ) {
					this.state.go( 'createEvent' );
				} else {
					this.getMap();
				}
			} );
	}

	getMap() { // TODO
		return this.service.map.getOne( this.user.admin[this.user.admin.length - 1].map[this.user.admin[this.user.admin.length - 1].map.length - 1] ).then( response => {
			localStorage.setItem( 'map', JSON.stringify( response ) );
			this.map = response;
		} );
	}

}
DashboardController.$inject = [ 'service', '$state', '$timeout', 'stateService' ];
export { DashboardController };
