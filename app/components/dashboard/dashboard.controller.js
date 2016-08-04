class DashboardController {
	constructor( service, $state, $timeout, $stateParams ) {
		this.service = service;
		this.state = $state;
		this.map = JSON.parse( localStorage.getItem( 'map' ) );
		this.stateParams = $stateParams;
		this.user = {};
		this.timeout = $timeout;
		this.getCurrentUser();
	}

	// The User is Always Directed to the Dashboard, but if they are not Admin
	// of a market/event then they are taken to the createEvent page
	getCurrentUser() {
		return this.service.user.getCurrentOrCreate()
			.then( user => {
				this.timeout( () => {
					this.user = user;
					if ( !user.admin[0] ) {
						this.state.go( 'createEvent' );
					} else {
						this.getMap();
					}
				} );
			} );
	}

	getMap() {
		return this.service.map.getOne( this.user.admin[this.user.admin.length - 1].map[this.user.admin[this.user.admin.length - 1].map.length - 1] ).then( response => {
			localStorage.setItem( 'map', JSON.stringify( response ) );
			this.map = response;
		} );
	}

}
DashboardController.$inject = [ 'service', '$state', '$timeout', '$stateParams' ];
export { DashboardController };
