class CreateEventController {
	constructor( service, $timeout, $state, $stateParams ) {
		this.event = {};
		this.service = service;
		this.timeout = $timeout;
		this.state = $state;
		this.user = {};
		this.getCurrentUser();
		this.stateParams = $stateParams;
		this.hasMap = false;

		if ( this.stateParams.event ) {
			this.timeout( () => {
				document.getElementById( 'title' ).value = this.stateParams.event.eventTitle ? this.stateParams.event.eventTitle : '';
				document.getElementById( 'bio' ).value = this.stateParams.event.bio ? this.stateParams.event.bio : '';
				document.getElementById( 'city' ).value = this.stateParams.event.city ? this.stateParams.event.city : '';
				document.getElementById( 'state' ).value = this.stateParams.event.state ? this.stateParams.event.state : '';
				document.getElementById( 'email' ).value = this.stateParams.event.paymentEmail ? this.stateParams.event.paymentEmail : '';
			} );
		}
	}


	createEvent( name, bio, city, state, paymentEmail, eventId ) {
		console.log( eventId, 'this is eventId' );
		if ( !eventId ) {
			Materialize.toast( 'You must design a map to create an event.', 2000 );
		} else {
			return this.service.market.create( {
				name,
				location: {
					city,
					state
				},
				bio,
				admins: this.user._id,
				paymentInfo: paymentEmail,
				map: eventId
			} )
				.then( event => {
					this.event = event;

					this.service.map.getOne( this.event.map[ 0 ] ).then( response => {
						console.log( this.stateParams.map, response )
						localStorage.setItem( 'map', JSON.stringify( this.stateParams.map ) );
						this.state.go( 'dashboard', { event: response, map: this.stateParams.map } );
					} );
				} );
		}
	}

	saveTime( day, startTime, endTime ) {
		return this.service.market.editOne( id, {
			recurrence: {
				dayOfWeek: [ {
					day,
					hours: []
				} ]
			}
		} );
	}

	getCurrentUser() {
		return this.service.user.getCurrentOrCreate()
			.then( user => {
				this.timeout( () => {
					this.user = user;
				} );
			} );
	}

	toggleMap() {
		this.hasMap = !this.hasMap;
	}

	saveEventDetailsWhileDesigningMap( eventTitle, bio, city, state, paymentEmail ) {
		const event = {
			eventTitle,
			bio,
			city,
			state,
			paymentEmail
		};
		console.log( event, 'this is event' );
		localStorage.setItem( 'event', JSON.stringify( event ) );
	}

}

CreateEventController.$inject = [ 'service', '$timeout', '$state', '$stateParams' ];
export { CreateEventController };
