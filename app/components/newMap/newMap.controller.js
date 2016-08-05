class NewMapController {
	constructor( service, $state, $timeout, mapValue ) {
		this.timeout = $timeout;
		this.service = service;
		this.mapImage = '';
		this.mapSize = 'small';
		this.currentStep = 1;
		this.spotTypes = [];
		this.state = $state;
		this.map = false;
		this.getMap();
		this.draggable();
		$( document ).ready( function () {
			$( '.imageUpload > button' )
				.addClass( 'awesomeButton btn waves-effect waves-light' )
				.removeClass( 'fp__btn' )
				.text( 'upload background' );
			$( 'select' ).material_select();
			$( '.previousBtn' ).hide();
		} );

		this.mapValue = mapValue;
	}

	checkMapSize() {
		this.mapSize = $( '#map-options' ).val();
	}

	addPicture() {
		filepicker.setKey( 'AWWNzupn7QV1RRT2xGT0gz' );
		filepicker.pick(
			{
				services: [ 'COMPUTER', 'CONVERT' ],
				conversions: [ 'crop', 'rotate', 'filter' ],
				mimetype: 'image/*',
				container: 'modal',
				cropRatio: [ 1 ],
				cropForce: true
			},
			Blob => {
				this.mapImage = Blob.url;
			},
			FPError => {
				console.log( 'ERROR', FPError.toString() );
			}
		);
	}

	step( stepNum ) {
		this.currentStep = stepNum;
		if ( this.currentStep === 1 ) {
			$( '.previousBtn' ).hide();
			$( '.nextBtn' ).show();
		} else if ( this.currentStep === 2 ) {
			$( '.previousBtn' ).show();
			$( '.nextBtn' ).show();
		} else if ( this.currentStep === 3 ) {
			$( '.previousBtn' ).show();
			$( '.nextBtn' ).hide();
		}
	}

	next() {
		this.step( ++this.currentStep );
	}
	previous() {
		this.step( --this.currentStep );
	}
	newType() {
		if ( !this.spotShape ) {
			this.spotShape = 'square';
		} else {
			this.spotTypes.push( {
				shape: this.spotShape,
				name: this.spotName,
				price: this.spotPrice,
				color: this.spotColor,
				size: this.spotSize
			} );
		}
	}
	newBox( color, shape, price ) {
		if ( !color ) color = '#383838';
		$( '#map' ).append(
			`<div class="box ${shape}" style="background-color:${color}">
				<p class="spotNumber">$${price}</p>
			</div>`
		);
		this.draggable();
	}

	draggable() {
		$( '.box' )
			.draggable( {
				containment: '#map',
				cursor: 'move',
				grid: [ 5, 5 ],
				snap: '#map',
				zIndex: 100
			} )
			.resizable( {
				containment: '#map',
				maxHeight: 250,
				maxWidth: 250,
				minHeight: 60,
				minWidth: 60,
				aspectRatio: true
			} );
	}

	getMapPositions() {
		const allSpots = $( '#map > .box' );
		const positions = [];
		allSpots.map( ( num, box ) => {
			let type = '';
			const classes = box.attributes.class.nodeValue.split( ' ' );
			classes.map( className => {
				if ( className === 'circle' ) {
					type = 'circle';
				}
				if ( className === 'square' ) {
					type = 'square';
				}
			} );
			const price = [];
			box.innerText
				.split( '' )
				.map( char => {
					if ( !isNaN( parseInt( char, 10 ) ) ) {
						price.push( parseInt( char, 10 ) );
					}
				} );
			return positions.push(
				{
					left: box.style.left,
					top: box.style.top,
					width: box.style.width ? box.style.width : '60px',
					height: box.style.height ? box.style.height : '60px',
					num: ++num,
					color: box.style.backgroundColor,
					type,
					price: price.join( '' )
				}
			);
		} );
		this.saveMap( positions );
	}

	createMap() {
		this.service.map.create( this.finalMap ).then( response => {
			console.log( response, 'line 146 newMapCtrl this is our map' );
			const savedData = JSON.parse( localStorage.getItem( 'event' ) );
			this.state.go( 'createEvent', { map: response, event: savedData } );
		} );
	}

	getMap() {
		this.myMap = JSON.parse( localStorage.getItem( 'map' ) );
	}

	saveMap( spots ) {
		this.finalMap = {
			mapType: this.mapSize,
			mapImage: this.mapImage,
			spots
		};
		this.mapValue = this.finalMap;
	}

}


NewMapController.$inject = [ 'service', '$state', '$timeout', 'mapValue' ];

export { NewMapController };
