class FindEventController {
	constructor( eventService ) {
		this.eventService = eventService;
		this.events= [];
		this.getAllEvents();
		this.states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas',
		'California','Colorado','Connecticut','Delaware','District of Columbia',
		'Federated States of Micronesia','Florida','Georgia','Guam','Hawaii',
		'Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana',
		'Maine','Marshall Islands','Maryland','Massachusetts','Michigan',
		'Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada',
		'New Hampshire','New Jersey','New Mexico','New York','North Carolina',
		'North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon',
		'Pennsylvania','Puerto Rico','Rhode Island','South Carolina',
		'South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island',
		'Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

	}

	getAllEvents(){
		this.eventService.getAll()
		.then( events => {
			console.log(events);
			this.events = events;
		} )
	}
}

FindEventController.$inject = [ 'eventService' ];
export { FindEventController };
