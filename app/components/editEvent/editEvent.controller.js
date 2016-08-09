class EditEventController {
	constructor( $stateParams, $state, eventService ) {
		this.state = $state;
		this.stateParams = $stateParams;

		this.sleep = {
			mapType: 'medium',
			mapImage: '',
			spots: [
				{
					price: '32',
					type: 'square',
					color: 'rgb(56, 56, 56)',
					num: 1,
					height: '60px',
					width: '60px',
					top: '0px',
					left: '235px'
				},
				{
					price: '32',
					type: 'square',
					color: 'rgb(56, 56, 56)',
					num: 2,
					height: '60px',
					width: '60px',
					top: '50px',
					left: '165px'
				},
				{
					price: '323',
					type: 'square',
					color: 'rgb(56, 56, 56)',
					num: 3,
					height: '60px',
					width: '60px',
					top: '',
					left: ''
				}
			]
		};
	}


	editEvent( title, bio, city, state, paymentInfo ) {

		city = city ? city : document.getElementById( 'city' ).value;
		state = state ? state : document.getElementById( 'state' ).value;

		this.eventService.editOne( this.event._id, {
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
				// Materialize.toast( 'Settings saved.', 1000 );
			}
		} );
	}

	deleteEvent() {
		this.eventService.deleteOne( this.event._id ).then( response => {
			if ( response ) {
				// Materialize.toast( 'Event Successfully deleted.', 1000 );
			}
		} );
	}

	toggleMap() {
		this.map = !this.map;
	}


}
EditEventController.$inject = [ '$stateParams', '$state', 'eventService' ];

export { EditEventController };
