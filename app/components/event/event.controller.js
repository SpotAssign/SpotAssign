class EventController {
	constructor() {
		$( '.carousel.carousel-slider' ).carousel( { full_width: true } );
		this.map = {
			mapType: 'medium',
			mapImage: 'http://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20140902050035',
			spots: []
		};
	}
}

EventController.$inject = [];

export { EventController };
