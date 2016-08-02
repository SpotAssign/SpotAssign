class NewMapController {
	constructor( service, $state ) {
		this.service = service;
		this.mapImage = '';
		this.currentStep = 1;
		this.spotTypes = [];
		this.state = $state;

		$( document ).ready( function () {
			$( 'select' ).material_select();
			$( '.imageUpload > button' )
				.addClass( 'awesomeButton btn waves-effect waves-light' )
				.removeClass( 'fp__btn' )
				.text( 'upload background' );
		} );
		$( '.previousBtn' ).hide();
		this.draggable();
	}

	step( stepNum ) {
		this.currentStep = stepNum;
		if ( this.currentStep > 1 && this.currentStep < 3 ) {
			$( '.previousBtn' ).show();
		} else {
			$( '.previousBtn' ).hide();
		}
		if ( this.currentStep === 3 ) {
			$( '.nextBtn' ).hide();
			$( '.previousBtn' ).show();
			this.getMapPositions();
		}
		if ( this.currentStep === 1 || this.currentStep === 2 ) {
			$( '.nextBtn' ).show();
		}
	}
	next() {
		if ( this.currentStep < 2 ) {
			this.currentStep++;

			if ( this.currentStep === 3 ) {
				$( '.nextBtn' ).hide();
			}
		} else {
			this.currentStep++;
			if ( this.currentStep === 3 ) {
				$( '.nextBtn' ).hide();
			}
			this.getMapPositions();
		}
		if ( this.currentStep > 0 ) {
			$( '.previousBtn' ).show();
		}
	}
	previous() {
		if ( this.currentStep > 1 ) {
			this.currentStep--;

			if ( this.currentStep === 1 ) {
				$( '.previousBtn' ).hide();
				$( '.nextBtn' ).show();
			} else if ( this.currentStep === 2 ) {
				$( '.nextBtn' ).show();
			} else {
			}
		} else {
			$( '.previousBtn' ).hide();
		}
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
	eraseAll() {
		$( '#map' ).empty();
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

	createMap(  ) {
		this.service.map.create( this.finalMap ).then( response => {
			console.log( response, 'line 150 newMapCtrl this is our map' );
			this.map = response;
		} );
	}

	saveMap( spots ) {
		this.finalMap = {
			mapType: this.mapSize,
			mapImage: this.mapImage,
			spots
		};
	}

}


NewMapController.$inject = [ 'service', '$state' ];

export { NewMapController };
