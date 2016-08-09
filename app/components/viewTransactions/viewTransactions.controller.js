class viewTransactionsController {
	constructor( eventService, $state ) {
		this.eventService = eventService;

		this.state = $state;
		this.eventId = [];
		this.eventUsers = [];
	}

	getEventUsers( eventId ) { // TODO eventName
		return this.eventService.getOne( eventId )
		.then( event => {
			this.eventUsers = event.users;
		} );
	}
}

viewTransactionsController.$inject = [ 'eventService', '$state' ];
export { viewTransactionsController };
