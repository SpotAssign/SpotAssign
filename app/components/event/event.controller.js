class EventController {
	constructor( eventService, mapService, $stateParams, $timeout ) {
		// eventService.getEventByName( $stateParams.name ).then( response => {
		// 	$timeout(() => {
		// 		this.event = response;
		// 		console.log( this.event, 'THIS IS THIS.EVENT' );
		// 	} );
		this.event = eventService.getState();
		// } );

		$( '.carousel.carousel-slider' ).carousel( { full_width: true } );

		const img = document.createElement( 'img' );
		img.src = require( '../../img/SpotAssignLogo.png' );
		this.picture = img.src;
	}
}

EventController.$inject = [ 'eventService', 'mapService', '$stateParams', '$timeout' ];
export { EventController };
