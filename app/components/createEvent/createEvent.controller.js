class CreateEventController {
	constructor( service, stateService, $timeout, $state ) {
		this.service = service;
		this.stateService = stateService;
		this.timeout = $timeout;
		this.state = $state;
		this.event = {
			title: null,
			bio: null,
			city: null,
			email: null
		};

		this.currenUser = this.stateService.user.getCurrentUser();
		this.currentEvent = this.stateService.event.getEvent();
		this.currentMap = this.stateService.event.getMap();
		if ( this.currentEvent ) {
			$timeout(() => {
			document.getElementById( 'title' ).value = this.currentEvent.title;
			this.event.title = this.currentEvent.title;
			document.getElementById( 'bio' ).value = this.currentEvent.bio;
			this.event.bio = this.currentEvent.bio;
			document.getElementById( 'city' ).value = this.currentEvent.city;
			this.event.city = this.currentEvent.city;
			document.getElementById( 'state' ).value = this.currentEvent.state;
			this.event.state = this.currentEvent.state;
			document.getElementById( 'email' ).value = this.currentEvent.paymentEmail;
			this.event.paymentEmail = this.currentEvent.paymentEmail;
			} );
		}
	}

	createEvent() {
		if ( !this.currentMap ) {
			Materialize.toast( 'You must design a map to create an event.', 2000 );
		} else if ( this.event.title && this.event.bio && this.event.city && this.event.state && this.event.paymentEmail ) {
			this.stateService.event.setEvent( this.event );
			this.service.map.create( this.currentMap ).then( response => {
				this.currentMap = response.data;

				event = {
					name: this.event.title,
					location: {
						city: this.event.city,
						state: this.event.state
					},
					bio: this.event.bio,
					paymentInfo: this.event.paymentEmail,
					map: this.currentMap._id
				}
				this.service.market.create( event )
					.then( result => {
						console.log( result, 'RESULT line 54' );
						this.stateService.event.setEvent( result );
						this.state.go( 'dashboard' );
						console.log( 'not leaving' );
					} );
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
