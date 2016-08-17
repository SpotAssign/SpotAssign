class FindEventController {
	constructor( eventService ) {
		this.events = [];

		eventService.getAll().then( events => this.events = events );
	}
}

FindEventController.$inject = [ 'eventService' ];
export { FindEventController };
