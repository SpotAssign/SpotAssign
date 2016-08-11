class manageUsersController {
	constructor( userService, $timeout, $state ) {
		this.event = {};
		this.userService = userService;
		this.timeout = $timeout;
		this.state = $state;
		this.user = this.userService.getState();
		this.marketID = [];
		this.marketUsers = [];
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

	// This function will need to redirect the user to the Add Reservation page, it also passes the User Id
	addReservation(userId) {
		// Do Stuff
	}

	// This function will remove the User from the Market
	deleteUser(userId) {
		// Do Stuff
	}

	// This function will send an email to an invited user
	inviteUser(email) {
		// Send Invite Email
	}
}

manageUsersController.$inject = [ 'userService', '$timeout', '$state' ];
export { manageUsersController };
