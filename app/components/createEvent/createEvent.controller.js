class CreateEventController {
	constructor( service, stateService, $timeout, $state ) {
		this.service = service;
		this.stateService = stateService;
		this.timeout = $timeout;
		this.state = $state;

		this.currenUser = this.stateService.user.getCurrentUser();
		this.currentEvent = this.stateService.event.getEvent();
	}


	createEvent( ev ) {
		const currentMap = this.stateService.event.getMap();
		if ( !currentMap ) {
			Materialize.toast( 'You must design a map to create an event.', 2000 );
		} else if ( ev.title && ev.bio && ev.city && ev.state && ev.paymentEmail ) {
			this.stateService.event.setEvent( ev );
			const event = this.stateService.event.getEvent();
			event.map = this.stateService.event.getMap();
			return this.service.market.create( event )
				.then( result => {
					this.stateService.event.setEvent( result );
					this.state.go( 'dashboard' );
				} );
		} else {
			Materialize.toast( 'Please insert all the Event required Information.', 2000 );
		}
	}

	// saveTime( day, startTime, endTime ) {
	// 	return this.service.market.editOne( id, {
	// 		recurrence: {
	// 			dayOfWeek: [ {
	// 				day,
	// 				hours: []
	// 			} ]
	// 		}
	// 	} );
	// }

	saveEventDetailsWhileDesigningMap( event ) {
		localStorage.setItem( 'event', JSON.stringify( event ) ); // TODO DELETE
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
