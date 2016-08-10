class MapController { // TODO Show btn
	constructor( $state, reservationService ) {
		this.state = $state;
		this.reservationService = reservationService;

		this.clickSpot = false;
		this.showButton = true;
		this.payment = false;
	}

	clickTheSpot( spot, id ) {
		console.log( spot );
		this.clickedSpot = spot;
	}

	buySpot() {
		//
		// reservation = {
		// 	dates: newRes.dates,
		// 	user: newRes.userId,
		// 	market: newRes.marketId,
		// 	map: newRes.mapId,
		// 	payment: newRes.paymentId
		// }
		// this.reservationService.create( reservation )
		this.clickedSpot = false;
		this.payment = true;
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

MapController.$inject = [ '$state', 'reservationService' ];

export { MapController };
