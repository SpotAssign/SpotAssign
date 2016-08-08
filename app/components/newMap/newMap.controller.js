class NewMapController {
	constructor( service, $state, stateService, $scope ) {
		this.service = service;
		this.state = $state;
		this.stateService = stateService;
		this.scope = $scope;

		this.sizes = [
			{
				value: 'small',
				display: 'Small'
			},
			{
				value: 'medium',
				display: 'Medium'
			},
			{
				value: 'large',
				display: 'Large'
			}
		];

		this.shapes = [
			{
				value: 'square',
				display: 'Square'
			},
			{
				value: 'circle',
				display: 'Circle'
			}
		];

		this.mapImage = '';
		this.mapSize = 'small';
		this.currentStep = 1;
		this.spotTypes = [];
		this.draggable();
		console.log( stateService.event.getEvent(), 'EVENT' );
		console.log( stateService.user.getCurrentUser(), 'USER' );

		$( '.selectOne' ).ready( function () {
			$( '.imageUpload > button' )
				.addClass( 'awesomeButton btn waves-effect waves-light' )
				.removeClass( 'fp__btn' )
				.text( 'upload background' );
			// $( '.selectOne' ).material_select();
		} );
			$( '.previousBtn' ).hide();
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

	addPicture() {
		filepicker.setKey( 'AWWNzupn7QV1RRT2xGT0gz' );
		return filepicker.pick(
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
				this.scope.$apply();
			},
			FPError => console.log( 'ERROR', FPError.toString() )
		);
	}

	newType() {
		if ( !this.spotColor ) this.spotColor = '#000000';
		const type = {
			shape: this.spotShape,
			name: this.spotName,
			price: this.spotPrice,
			color: this.spotColor
		};
		if ( type.shape && type.name && type.price && type.color ) {
			this.spotTypes.push( type );
		} else {
			Materialize.toast( 'Add all required fields.', 2000 );
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
		this.saveMyMap( positions );
	}

	saveMyMap( spots ) {
		const map = {
			name: this.mapName,
			size: this.mapSize,
			image: this.mapImage,
			spots
		};
		this.stateService.event.setMap( map );
		this.currentMap = map;
	}

	step( stepNum ) {
		this.currentStep = stepNum;
		if ( this.currentStep === 1 ) {
			$( '.previousBtn' ).hide();
			$( '.nextBtn' ).show();
		} else if ( this.currentStep === 2 ) {
			if ( this.mapName && this.mapSize ) {
				$( '.previousBtn' ).show();
				$( '.nextBtn' ).show();
			} else {
				this.currentStep--;
				Materialize.toast( 'Please insert required information.', 2000 );
			}
		} else if ( this.currentStep === 3 ) {
			$( '.previousBtn' ).show();
			$( '.nextBtn' ).hide();
			this.getMapPositions();
		}
	}

	next() {
		this.step( ++this.currentStep );
	}

	previous() {
		this.step( --this.currentStep );
	}
}

NewMapController.$inject = [ 'service', '$state', 'stateService', '$scope' ];

export { NewMapController };
