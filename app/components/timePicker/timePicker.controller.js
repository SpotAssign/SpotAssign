class TimePickerController {
	constructor( userService ) {
		this.userService = userService
		this.hours = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
			18, 19, 20, 21, 22, 23, 24 ];
		this.minutes = [ '00', '15', '30', '45' ];
		this.user = {};
		this.marketID = [];
		this.getCurrentUser();
		this.holidays = [];
		this.closedDates = [];
		this.openOn = [];
		this.getHolidays();
		this.market = {};
	}

	getCurrentUser() {
		return this.service.user.getCurrentOrCreate()
			.then( user => {
				this.user = user;
				this.marketID = user.admin[ 0 ]._id;
				this.getMarketClosedDays( user.admin[ 0 ]._id );
				this.getUpdatedMarket( user.admin[ 0 ]._id );
			} );
	}

	getUpdatedMarket( ID ) {
		return this.service.market.getOne( ID )
			.then( market => {
				this.market = market;
				this.closedDates = market.closedDates;
				this.openOn = market.recurrence.dayOfWeek;
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
		return this.service.market.editOne( this.marketID, editedObj )
			.then( response => {
				this.getUpdatedMarket( this.marketID )
			} )
	}

	// Gets Holidays from Current Year
	getHolidays() {
		this.service.holiday.year()
			.then( holidayData => {
				this.holidays = holidayData;
			} )
	}

	getMarketClosedDays( marketID ) {
		return this.service.market.getOne( marketID )
			.then( market => {
				this.closedDates = market.closedDates;
			} );
	}

	addObservedHoldiay( hol ) {
		this.closedDates.push( hol );
		const editedObject = {
			closedDates: this.closedDates
		}
		return this.service.market.editOne( this.marketID, editedObject )
			.then( market => {
				console.log( market )
			} )
	}


}

TimePickerController.$inject = [ 'service' ];

export { TimePickerController };
