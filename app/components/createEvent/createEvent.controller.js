class CreateEventController {
	constructor( service ) {
		this.event = {};
		this.service = service;
		this.user= {};
		this.getCurrentUser();
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
	getCurrentUser() {
		console.log("getting current user")
		return this.service.user.getCurrentOrCreate()
		.then( user => {  this.user = user } );
	}

}

CreateEventController.$inject = [ 'service' ];
export { CreateEventController };
