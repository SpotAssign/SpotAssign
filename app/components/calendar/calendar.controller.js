class CalendarController {
	constructor( eventService, userService ) {
		this.userService = userService;
		this.eventService = eventService;
		this.event = {};
		const currentTime = new Date();
		this.currentTime = currentTime;
		this.month = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
		this.monthShort = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
		this.weekdaysFull = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
		this.weekdaysLetter = [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ];
		this.disable = [];
		this.today = 'Today';
		this.clear = 'Clear';
		this.close = 'Close';
		const days = 1000;
		this.minDate = ( new Date( this.currentTime.getTime() - ( 1000 * 60 * 60 * 24 * 0 ) ) ).toISOString();
		this.maxDate = ( new Date( this.currentTime.getTime() + ( 1000 * 60 * 60 * 24 * days ) ) ).toISOString();
		this.onStart = function() {};
		this.onRender = function() {};
		this.onOpen = function() {};
		this.onClose = function() {};
		this.onSet = function() {};
		this.onStop = function() {};
		this.getDisabledDates();
	}
	getDisabledDates() {
			this.event = this.eventService.getState();
			const possibleDisabled = [ 1, 2, 3, 4, 5, 6, 7 ];
			if ( this.event.recurrence.dayOfWeek) {
				for ( let i = 0; i < this.event.recurrence.dayOfWeek.length; i++ ) {
					if ( this.event.recurrence.dayOfWeek[i].name === 'Monday' ) {
						let index = possibleDisabled.indexOf( 2 );
						possibleDisabled.splice( index, 1 );
					}
					else if ( this.event.recurrence.dayOfWeek[i].name === 'Tuesday' ) {
						let index = possibleDisabled.indexOf( 3 );
						possibleDisabled.splice( index, 1 );
					}
					else if ( this.event.recurrence.dayOfWeek[i].name === 'Wednesday' ) {
						let index = possibleDisabled.indexOf( 4 );
						possibleDisabled.splice( index, 1 );
					}
					else if ( this.event.recurrence.dayOfWeek[i].name === 'Thursday' ) {
						let index = possibleDisabled.indexOf( 5 );
						possibleDisabled.splice( index, 1 );
					}
					else if ( this.event.recurrence.dayOfWeek[i].name === 'Friday' ) {
						let index = possibleDisabled.indexOf( 6 );
						possibleDisabled.splice( index, 1 );
					}
					else if ( this.event.recurrence.dayOfWeek[i].name === 'Saturday' ) {
						let index = possibleDisabled.indexOf( 7 );
						possibleDisabled.splice( index, 1 );
					}
					else if ( this.event.recurrence.dayOfWeek[i].name === 'Sunday' ) {
						let index = possibleDisabled.indexOf( 0 );
						possibleDisabled.splice( index, 1 );
					}
				}
				for ( var i = 0; i < possibleDisabled.length; i++ ) {
					this.disable.push( possibleDisabled[i] )
				}
			}
			if ( this.event.closedDates ) {
				for (let i = 0; i < this.event.closedDates.length; i++) {
					this.disable.push(this.event.closedDates[i].date);
				}
			}
		}
	}


CalendarController.$inject = [ 'eventService', 'userService' ];

export {
	CalendarController
};
