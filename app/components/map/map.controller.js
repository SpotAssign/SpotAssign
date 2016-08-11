class MapController { // TODO Show btn
	constructor( $state, reservationService, userService ) {
		this.state = $state;
		this.reservationService = reservationService;

		this.clickSpot = false;
		this.showButton = true;
		this.payment = false;
		this.user = userService.getState();
		// Close Checkout on page navigation:
		$( document ).ready( function() {
			$( window ).on( 'popstate', function() {
				handler.close();
			});
		} );
}


	payNow( amount ) {

		console.log( amount, 'AMOUNT' );
		let description = `1 spot for ${ amount }`;

		let handler = StripeCheckout.configure({
		key: 'pk_test_UGZfnTwt3mfQdpkvRPnWEqEP',
		image: require( '../../img/SpotAccessMark.png' ),
		locale: 'auto',
		token: function( token ) {
			console.log( token.id );
		}
	});

		handler.open({
			name: 'Spot Assign',
			description,
			zipCode: true,
			currency: "usd",
			amount
		});
	}



	clickTheSpot() {
		this.clickedSpot = spot;
	}

	payForSpot() {

	}

	buySpot( spot, id ) {
		console.log( spot, id, 'this is spot & id' );
		this.clickedSpot = false;
		this.spot = spot;
	}

	recreateMap( positions ) {
		positions.map( position => {
			$( '#currentMap' ).append(
`<div style="position:absolute;background-color:${position.color};left:${position.left};top:${position.top};width:${position.width.toString()}px;height:${position.height.toString()}px" class="${position.type}">
	<p class="spotPrice">${position.price}</p>
</div>`
			);
		} );
	}
}

MapController.$inject = [ '$state', 'reservationService', 'userService' ];

export { MapController };
