class DashboardController {
	constructor( service, $state, $timeout, stateService, getCurrentEvent ) {
		this.service = service;
		this.state = $state;
		this.timeout = $timeout;
		this.stateService = stateService;
		// this.currentEvent = getCurrentEvent;

		// this.getCurrentUser();
	}

	// The User is Always Directed to the Dashboard, but if they are not Admin
	// of a market/event then they are taken to the createEvent page
	getCurrentUser() {
		return this.service.user.getCurrentOrCreate()
			.then( user => {
				this.stateService.user.setCurrentUser( user );
				console.log( user, 'USER this' );
				if ( user.admin.indexOf( this.currentEvent._id ) !== -1 ) {
					// this.state.go( 'createEvent' );
				} else {
					this.getMap();
				}
			} );
	}

	// getMap() { // TODO
	// 	return this.service.map.getOne( this.currentMap).then( response => {
	// 		localStorage.setItem( 'map', JSON.stringify( response ) );
	// 		this.map = response;
	// 	} );
	// }

}
DashboardController.$inject = [ 'service', '$state', '$timeout', 'stateService' ];
export { DashboardController };
