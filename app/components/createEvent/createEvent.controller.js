class CreateEventController {
	constructor( service, stateService, $timeout, $state ) {
		this.service = service;
		this.stateService = stateService;
		this.timeout = $timeout;
		this.state = $state;

		this.currenUser = this.stateService.user.getCurrentUser();
		this.currentEvent = this.stateService.event.getEvent();
		this.currentMap = this.stateService.event.getMap();
	}

	createEvent( ev ) {
		if ( !this.currentMap ) {
			Materialize.toast( 'You must design a map to create an event.', 2000 );
		} else if ( ev.title && ev.bio && ev.city && ev.state && ev.paymentEmail ) {
			this.stateService.event.setEvent( ev );
			const event = this.stateService.event.getEvent();
			event.map = this.currentMap;
			return this.service.market.create( event )
				.then( result => {
					this.stateService.event.setEvent( result );
					this.state.go( 'dashboard' );
				} );
		} else {
			Materialize.toast( 'Please insert all the Event required Information.', 2000 );
		}
	}

	saveEventDetailsWhileDesigningMap( event ) {
		this.stateService.event.setEvent( event );
		this.state.go( 'newMap' );
	}

}

CreateEventController.$inject = [
	'service',
	'stateService',
	'$timeout',
	'$state'
];
export { CreateEventController };
