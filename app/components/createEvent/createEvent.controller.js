class CreateEventController {
	constructor( service, $timeout, $state, $stateParams ) {
		this.event = {};
		this.service = service;
		this.timeout = $timeout;
		this.state = $state;
		this.user= {};
		this.getCurrentUser();
		this.stateParams = $stateParams;
	}


	createEvent ( name, bio, city, state, paymentEmail, eventId ) {
		console.log( eventId, 'this is eventId');
		if ( !eventId ) {
			Materialize.toast( 'You must design a map to create an event.', 2000 );
		} else {
		return this.service.market.create({
			name,
			location: {
				city,
				state
			},
			bio,
			admins: this.user._id,
			paymentInfo: paymentEmail,
			map: eventId
		})
		.then( event => {
			this.event = event;

			this.service.map.getOne( this.event.map[ 0 ] ).then( response => {
				console.log( response, 'this is response' );
				this.state.go( 'dashboard', { event: response, map: this.stateParams.map } );
			} );
		} );
	}
	};

	saveTime( day, startTime, endTime ) {
		return this.service.market.editOne( id, {
			recurrence: {
				dayOfWeek: [{
					day,
					hours: []
				}]
			}
		} );
	}
	getCurrentUser() {

		return this.service.user.getCurrentOrCreate()
		.then( user => {
			this.timeout(() => {
				this.user = user;
			} );
		} );
	}

		toggleMap() {
			this.map = !this.map;
		}

}

CreateEventController.$inject = [ 'service', '$timeout', '$state', '$stateParams' ];
export { CreateEventController };
