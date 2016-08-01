class MapController {
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

MapController.$inject = [];

export { MapController };
