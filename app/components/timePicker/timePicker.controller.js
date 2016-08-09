class TimePickerController {
	constructor( userService, eventService ) {
		this.userService = userService;
		this.eventService = eventService;
		this.getCurrentUser();
		this.current = userService.getState();
		this.event = eventService.getState();
		this.hours = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
			18, 19, 20, 21, 22, 23, 24 ];
		this.minutes = [ '00', '15', '30', '45' ];
		this.user = {};
		this.holidays = [];
		this.closedDates = [];
		this.openOn = [];
		this.getHolidays();
		this.market = {};
	}

	getCurrentUser() {
		return this.userService.getCurrentUser()
			.then( user => {
				this.userService.setState( user )
				this.eventService.setState( user.event );
				this.getMarketClosedDays();
				this.getUpdatedMarket();
			} );
	}

	getUpdatedMarket() {
		return this.userService.getEventByName( this.event.title )
			.then( event => {
				this.userEvent.setState( event );
				this.closedDates = event.closedDates;
				this.openOn = event.recurrence.dayOfWeek;
			} );
	}

	saveSchedule( days ) {
		for ( let i = 0; i < days.length; i++ ) {
			for ( let x = 0; x < this.openOn.length; x++ ) {
				if ( days[ i ].value ) {
					if ( days[ i ].name === this.openOn[ x ].name ) {
						this.openOn[ x ] = days[ i ];
					}
					this.openOn.push( days[ i ] );
				}
			}
		}
		const editedObj = {
			recurrence: {
				dayOfWeek: this.openOn
			}
		}
		return this.service.market.editOne( this.event._id, editedObj )
			.then( response => {
				this.getUpdatedMarket()
			} )
	}

	// Gets Holidays from Current Year
	getHolidays() {
		this.eventService.holidayYear()
			.then( holidayData => {
				this.holidays = holidayData;
			} )
	}

	getMarketClosedDays() {
		return this.eventService.market.getOne( this.event.title )
			.then( event => {
				this.eventService.setState( event );
				this.closedDates = event.closedDates;
			} );
	}

	addObservedHoldiay( hol ) {
		this.closedDates.push( hol );
		const editedObject = {
			closedDates: this.closedDates
		}
		return this.userService.editOne( this.event._id, editedObject )
			.then( event => {
				this.eventService.setState( event );
				this.closedDates = event.closedDates;
			} )
	}


}

TimePickerController.$inject = [ 'userService', 'eventService' ];

export { TimePickerController };
