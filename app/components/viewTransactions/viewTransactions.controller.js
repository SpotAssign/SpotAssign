class viewTransactionsController {
	constructor( service, $timeout, $state ) {
		this.event = {};
		this.service = service;
		this.timeout = $timeout;
		this.state = $state;
		this.user= {};
		this.marketID = [];
		this.marketUsers = [];
		this.getCurrentUser();
	}

	getCurrentUser() {
		return this.service.user.getCurrentOrCreate()
		.then( user => {
			this.timeout( () => {
				this.user = user;
				this.marketID = user.admin[0]._id;
				this.getMarketUsers( user.admin[0]._id );
			} );
		} );
	}

	getMarketUsers(marketID) {
		return this.service.market.getOne( marketID )
		.then ( market => {
			this.marketUsers = market.users;
		} );
	}
}

viewTransactionsController.$inject = [ 'service', '$timeout', '$state' ];
export { viewTransactionsController };
