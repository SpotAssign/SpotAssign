class UserFindEventController {
	constructor( eventService ) {
		this.events = [];

		eventService.getAll().then( events => this.events = events );
	}
}

UserFindEventController.$inject = [ 'eventService' ];

export { UserFindEventController };
