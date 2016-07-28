class CreateEventController {
	constructor( service ) {
		this.event = {};
		this.service = service;
	}

	createEvent ( name, bio, city, state ) {
		return this.service.market.create({
			name,
			location: {
				city,
				state
			},
			bio
		})
		.then( event => {
			console.log( event );
			this.event = event;
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

}

CreateEventController.$inject = [ 'service' ];
export { CreateEventController };
