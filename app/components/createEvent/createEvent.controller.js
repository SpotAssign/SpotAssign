class CreateEventController {
	constructor( eventService, mapService, $location, $scope, userService ) {
		this.eventService = eventService;
		this.mapService = mapService;
		this.location = $location;
		this.scope = $scope;
		this.userService = userService;

		this.event = this.eventService.getState();
		this.currentMap = this.mapService.getState();

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
			this.mapService.create( this.currentMap ).then( res => {
				// CREATE EVENT IN DB
				const event = {
					name: this.event.title,
					website: this.event.website,
					location: {
						city: this.event.city,
						state: this.event.state
					},
					admins: [ this.userService.getState()._id ],
					bio: this.event.bio,
					paymentInfo: this.event.paymentEmail,
					photo: this.event.photo,
					maps: res,
					currentMap: res
				};
				this.eventService.create( event ).then( response => {
					this.location.path( `/event/${response.name}` );
				} );
			} );
		} else {
			Materialize.toast( 'Please insert all the required Information.', 2000 );
		}
	}

	saveEventDetailsWhileDesigningMap() {
		this.eventService.setState( this.event );
		this.location.path( `/create-map/user` );
	}
}

CreateEventController.$inject = [
	'eventService',
	'mapService',
	'$location',
	'$scope',
	'userService'
];
export { CreateEventController };
