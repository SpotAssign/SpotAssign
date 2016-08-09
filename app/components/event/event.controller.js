class EventController {
	constructor( eventService ) {
		this.event = eventService.getState();

		$( '.carousel.carousel-slider' ).carousel( { full_width: true } );

		const img = document.createElement( 'img' );
		img.src = require( '../../img/SpotAssignLogo.png' );
		this.picture = img.src;
	}
}

EventController.$inject = [ 'eventService' ];

export { EventController };
