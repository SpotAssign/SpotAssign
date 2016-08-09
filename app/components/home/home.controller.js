class HomeController {
	constructor( eventService, mapService, userService ) {
		eventService.setState( null );
		mapService.setState( null );
		userService.setState( null );

		const booths = document.createElement( 'img' );
		booths.src = require( '../../img/booths.jpg' );
		this.boothPhoto = booths.src;

		const market = document.createElement( 'img' );
		market.src = require( '../../img/market.jpg' );
		this.marketPhoto = market.src;

		const stadium = document.createElement( 'img' );
		stadium.src = require( '../../img/stadium.jpg' );
		this.stadiumPhoto = stadium.src;

		const concert = document.createElement( 'img' );
		concert.src = require( '../../img/concert.jpg' );
		this.concertPhoto = concert.src;
	}
}

HomeController.$inject = [ 'eventService', 'mapService', 'userService' ];
export { HomeController };
