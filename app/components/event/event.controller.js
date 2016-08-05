class EventController {
	constructor( $stateParams ) {
		$( '.carousel.carousel-slider' ).carousel( { full_width: true } );
		this.map = {
			mapType: 'medium',
			mapImage: 'http://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20140902050035',
			spots: []
		};
		this.stateParams = $stateParams;
	}

	getEvent() {
		this.service.market.getOne( this.stateParams.id ).then( response => {
			console.log( response, 'this is line 14 eventCtrl response' );
			this.event = response;
		} );
	}

}

EventController.$inject = [ '$stateParams' ];

export { EventController };
