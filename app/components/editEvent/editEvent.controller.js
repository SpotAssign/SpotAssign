class EditEventController {
	constructor( $stateParams, $state, eventService, mapService, $location ) {
		this.state = $state;
		this.stateParams = $stateParams;
		this.eventService = eventService;
		this.location = $location;

		this.event = eventService.getState();
		this.map = mapService.getState();
	}

	createMap() {
		console.log( `/create-map/user/edit` );
		this.location.path( `/create-map/edit/${this.event.name}` );
	}

	editEvent() {
		this.eventService.editOne( this.event._id, this.event ).then( response => {
			console.log( response );
			this.user = response;
			if ( response ) {
				Materialize.toast( 'Settings saved.', 1000 );
			}
		} );
	}

	deleteEvent() {
		this.eventService.deleteOne( this.event._id ).then( response => {
			if ( response ) {
				// Materialize.toast( 'Event Successfully deleted.', 1000 );
			}
		} );
	}
}
EditEventController.$inject = [
	'$stateParams',
	'$state',
	'eventService',
	'mapService',
	'$location'
];

export { EditEventController };
