class EditEventController {
  constructor( service, $timeout ) {
		this.service = service;
		this.timeout = $timeout;
		this.event = {};
		this.fillFields();
  }


fillFields() {
	const user = JSON.parse( localStorage.getItem( 'currentUser' ) );
		if ( user ) {
			const event = user.markets[user.markets.length - 1];
			this.event = event;

			this.timeout( () => {
				document.getElementById( 'eventTitle' ).value = this.event.name;
				document.getElementById( 'bio' ).value = this.event.bio;
				document.getElementById( 'city' ).value = this.event.location.city;
				document.getElementById( 'state' ).value = this.event.location.state;
				document.getElementById( 'email' ).value = this.event.paymentInfo[0];
			} );
		}
	}

	editEvent( title, bio, city, state, paymentInfo ) {
		this.service.market.editOne( this.event._id, {
			name: title,
			location: {
				city,
				state
			},
			bio,
			paymentInfo
		} ).then( response => {
			console.log( response, 'this is line 28 editeventcontroller work' );
		} );
	}


}
EditEventController.$inject = [ 'service', '$timeout' ];

export { EditEventController };
