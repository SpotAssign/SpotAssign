class EditEventController {
  constructor( service, $timeout, $stateParams, $state ) {
		this.service = service;
		this.timeout = $timeout;
		this.state = $state;
		this.stateParams = $stateParams;
		this.myMap = JSON.parse( localStorage.getItem( 'map' ) );
		this.event = {};
		this.fillFields();
  }


fillFields() {
	const user = JSON.parse( localStorage.getItem( 'currentUser' ) );
		if ( user ) {
			const event = user.admin[user.admin.length - 1];
			this.event = event;
			// console.log( this.event, 'this is this.event');
			this.timeout( () => {
				document.getElementById( 'eventTitle' ).value = this.event.name ? this.event.name : '';
				document.getElementById( 'bio' ).value = this.event.bio ? this.event.bio : '';
				document.getElementById( 'city' ).value = this.event.location.city ? this.event.location.city : '';
				document.getElementById( 'state' ).value = this.event.location.state ? this.event.location.state : '';
				document.getElementById( 'email' ).value = this.event.paymentInfo ? this.event.paymentInfo : '';
			} );
		}
	}

	editEvent( title, bio, city, state, paymentInfo ) {
		
		city = city ? city : document.getElementById( 'city' ).value;
		state = state ? state : document.getElementById( 'state' ).value;

		this.service.market.editOne( this.event._id, {
			name: title,
			location: {
				city,
				state
			},
			bio,
			paymentInfo
		} ).then( response => {
			this.user = response;
			if ( response ) {
				Materialize.toast( 'Settings saved.', 1000 );
			}
		} );
	}

	deleteEvent() {
		this.service.market.deleteOne( this.event._id ).then( response => {
			if ( response ) {
				Materialize.toast( 'Event Successfully deleted.', 1000 );
			}
		} );
	}

	toggleMap() {
		this.map = !this.map;
	}


}
EditEventController.$inject = [ 'service', '$timeout', '$stateParams', '$state' ];

export { EditEventController };
