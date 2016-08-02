class CreateEventController {
	constructor( service, $timeout, $state ) {
		this.event = {};
		this.service = service;
		this.timeout = $timeout;
		this.state = $state;
		this.user= {};
		this.getCurrentUser();
	}



	createEvent ( name, bio, city, state, paymentEmail ) {

		return this.service.market.create({
			name,
			location: {
				city,
				state
			},
			bio,
			admins: this.user._id,
			paymentInfo: paymentEmail
		})
		.then( event => {
			this.event = event;
			this.state.go( 'dashboard', { event: this.event } )
		} );
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

CreateEventController.$inject = [ 'service', '$timeout', '$state' ];
export { CreateEventController };
