class CreateEventController {
	constructor( service, stateService, $location, $scope ) {
		this.service = service;
		this.stateService = stateService;
		this.location = $location;

		this.event = this.stateService.event.getEvent();
		this.currentMap = this.stateService.event.getMap();
		$( document ).ready( function () {
			$( '.imageUpload > button' )
				.addClass( 'awesomeButton btn waves-effect waves-light' )
				.removeClass( 'fp__btn' )
				.text( 'upload image' );
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
				cropRatio: [ 3 ],
				cropForce: true
			},
			Blob => {
				this.event.photo = Blob.url;
				this.scope.$apply();
			},
			FPError => console.log( 'ERROR', FPError.toString() )
		);
	}

	createEvent() {
		if ( !this.currentMap ) {
			Materialize.toast( 'You must design a map to create an event.', 2000 );
		} else if (
			this.event.title &&
			this.event.bio &&
			this.event.city &&
			this.event.state &&
			this.event.paymentEmail &&
			this.event.photo
		) {
			// CREATE MAP IN DB
			this.service.map.create( this.currentMap ).then( res => {
				this.stateService.event.setMap( res );
				// CREATE EVENT IN DB
				const event = {
					name: this.event.title,
					location: {
						city: this.event.city,
						state: this.event.state
					},
					bio: this.event.bio,
					paymentInfo: this.event.paymentEmail,
					photo: this.event.photo,
					map: this.stateService.event.getMap()
				};
				this.service.market.create( event ).then( response => {
					this.stateService.event.setEvent( response );
					this.location.path( `/event/${response.name}/` );
				} );
			} );
		} else {
			Materialize.toast( 'Please insert all the required Information.', 2000 );
		}
	}

	saveEventDetailsWhileDesigningMap() {
		this.stateService.event.setEvent( this.event );
		this.location.path( `/create-map/user` );
	}

}

CreateEventController.$inject = [
	'service',
	'stateService',
	'$location',
	'$scope'
];
export { CreateEventController };
