class EventController {
	constructor( $stateParams ) {
		$( '.carousel.carousel-slider' ).carousel( { full_width: true } );
		this.map = {
			mapType: 'medium',
			mapImage: 'http://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20140902050035',
			spots: []
		};
		this.stateParams = $stateParams;

		const img = document.createElement( 'img' );
		img.src = require( '../../img/SpotAssignLogo.png' );
		this.picture = img.src;

		this.sleep = {
		'mapType': 'medium',
		'mapImage': '',
		'spots': [
				{
						'price': '32',
						'type': 'square',
						'color': 'rgb(56, 56, 56)',
						'num': 1,
						'height': '60px',
						'width': '60px',
						'top': '0px',
						'left': '235px'
				},
				{
						'price': '32',
						'type': 'square',
						'color': 'rgb(56, 56, 56)',
						'num': 2,
						'height': '60px',
						'width': '60px',
						'top': '50px',
						'left': '165px'
				},
				{
						'price': '323',
						'type': 'square',
						'color': 'rgb(56, 56, 56)',
						'num': 3,
						'height': '60px',
						'width': '60px',
						'top': '',
						'left': ''
				}
		]
	}

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
