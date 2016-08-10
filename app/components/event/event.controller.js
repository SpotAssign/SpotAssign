class EventController {
	constructor( eventService, mapService, $stateParams, $timeout ) {
		this.event = eventService.getState();
		this.weekly = false;
		this.holidays= false;
		this.once = false;
		this.monthly = false;
		this.openOn = [];
		this.getScheduleType();
		$( '.carousel.carousel-slider' ).carousel( { full_width: true } );

		const img = document.createElement( 'img' );
		img.src = require( '../../img/SpotAssignLogo.png' );
		this.picture = img.src;

	}

	getScheduleType() {
		if ( this.event.recurrence.frequency==='weekly' ) {
			this.weekly = true;
			this.holidays = true;
			this.getSchedule();
		}
		else if  ( this.event.recurrence.frequency==='monthly' ) {
			this.monthly = true;
			this.holidays = true;
			this.getSchedule();
		}
		else if ( this.event.recurrence.frequency==='once' ) {
			this.once = true;
		}
	}
	getSchedule() {
		this.openOn = this.event.recurrence.dayOfWeek;
	}
}

EventController.$inject = [ 'eventService', 'mapService', '$stateParams', '$timeout' ];
export { EventController };
