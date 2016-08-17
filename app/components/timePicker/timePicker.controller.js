class TimePickerController {
	constructor( userService, eventService ) {
		this.userService = userService;
		this.eventService = eventService;
		this.event = eventService.getState();
		this.hours = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
			18, 19, 20, 21, 22, 23, 24 ];
		this.minutes = [ '00', '15', '30', '45' ];
		this.chooseFreq = true;
		this.once = false;
		this.weeklySetSchedule = false;
		this.monthly = false;
		this.weekly = false;
		this.addHolidays = false;
		this.user = {};
		this.holidays = [];
		this.closedDates = [];
		this.openOn = [];
		this.getHolidays();
		this.getEventClosedDays();
		this.getUpdatedEvent();
	}

	getUpdatedEvent() {
		return this.eventService.getEventByName( this.event.name )
			.then( event => {
				this.eventService.setState( event );
				this.closedDates = event.closedDates;
				this.openOn = event.recurrence.dayOfWeek;
				if ( event.recurrence.frequency === 'once' ) {
					this.chooseFreq = false;
					this.weeklySchedule = false;
					this.onceSchedule = true;
					this.openOn = {
						date: event.startDate,
						hours: event.recurrence.dayOfWeek
					};
				}
				else if ( event.recurrence.frequency === 'monthly' ) {
					this.chooseFreq = false;
					this.weeklySchedule = false;
					this.monthlySchedule = true;
					this.onceSchedule = false;
				}
				else if ( event.recurrence.frequency === 'weekly' ) {
					this.chooseFreq = false;
					this.weeklySetSchedule = true;
				}
			} );
	}

	saveSchedule( days ) {
		for ( let i = 0; i < days.length; i++ ) {
			// for ( let x = 0; x < this.openOn.length; x++ ) {
			if ( days[ i ].value ) {
				// 		if ( days[ i ].name === this.openOn[ x ].name ) {
				// 			this.openOn[ x ] = days[ i ];
				// 		}
				this.openOn.push( days[ i ] );
			}
			// }
		}
		console.log( this.openOn );
		const editedObj = {
			recurrence: {
				frequency: 'weekly',
				dayOfWeek: this.openOn
			}
		};
		return this.eventService.editOne( this.event._id, editedObj )
			.then( response => {
				this.getUpdatedEvent();
			} );
	}

	// Gets Holidays from Current Year
	getHolidays() {
		this.eventService.holidayYear()
			.then( holidayData => {
				this.holidays = holidayData;
			} );
	}

	getEventClosedDays() {
		return this.eventService.getEventByName( this.event.title )
			.then( event => {
				this.eventService.setState( event );
				this.closedDates = event.closedDates;
			} );
	}

	addObservedHoldiay( hol ) {
		this.closedDates.push( hol );
		const editedObject = {
			closedDates: this.closedDates
		};
		return this.eventService.editOne( this.event._id, editedObject )
			.then( event => {
				this.eventService.setState( event );
				this.closedDates = event.closedDates;
			} );
	}

	eventOccurFreq( freq ) {
		if ( freq === 'once' ) {
			this.once = true;
			this.chooseFreq = false;
		} else if ( freq === 'monthly' ) {
			this.monthly = true;
			this.chooseFreq = false;
		} else if ( freq === 'weekly' ) {
			this.weekly = true;
			this.chooseFreq = false;
		}
	}

	saveOnceEvent( event ) {
		const onceEvent = {
			startDate: event.date,
			endDate: event.date,
			recurrence: {
				frequency: 'Yearly',
				dayOfWeek: {
					open: event.open,
					close: event.close
				}
			}
		};
		return this.eventService.editOne( this.event._id, onceEvent )
			.then( event => {
				this.getUpdatedEvent();
			} );
	}

	editSchedule( updatedDay ) {
		if ( this.onceSchedule ) {
			const openClose = [
				{
					open: updatedDay.hours[ 0 ].open,
					close: updatedDay.hours[ 0 ].close
				}
			];
			const editedObject = {
				recurrence: {
					frequency: 'once',
					daysOfWeek: openClose
				}
			};
			return this.eventService.editOne( this.event._id, editedObject )
				.then( response => {
					this.getUpdatedEvent();
				} );
		}
		this.openOn.map( day => {
			const deleteIndex = this.openOn.indexOf( day );
			if ( day.name === updatedDay.name ) {
				this.openOn[ deleteIndex ] = updatedDay;
			}
		} );
		const editedObject = {
			recurrence: {
				frequency: 'weekly',
				dayOfWeek: this.openOn
			}
		};
		return this.eventService.editOne( this.event._id, editedObject )
			.then( event => {
				this.getUpdatedEvent();
			} );
	}

	deleteHoliday( holiday ) {
		this.closedDates.map( hol => {
			const deleteIndex = this.closedDates.indexOf( hol );
			if ( hol.name === holiday.name ) {
				this.closedDates.splice( deleteIndex, 1 );
			}
		} );
		// } );
		const editedObject = {
			closedDates: this.closedDates
		};
		return this.eventService.editOne( this.event._id, editedObject )
			.then( event => {
				this.getUpdatedEvent();
			} );
	}

}

TimePickerController.$inject = [ 'userService', 'eventService' ];

export { TimePickerController };
