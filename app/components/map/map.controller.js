class MapController {
	constructor( service, $state ) {
		this.clickSpot = false;
		this.service = service;
		this.state = $state;
		this.showButton = true;
		this.payment = false;

		if ( this.state.current.name !== 'event' ) {
			this.showButton = false;
		}
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
		// this.service.reservation.create( reservation )
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

MapController.$inject = [ 'service', '$state' ];

export { MapController };
