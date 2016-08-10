class DashboardController {
	constructor( eventService ) {
		this.event = eventService.getState();
	}
}

DashboardController.$inject = [ 'eventService' ];
export { DashboardController };
