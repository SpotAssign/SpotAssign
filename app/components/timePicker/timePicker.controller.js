class TimePickerController {

  constructor( service ) {
    this.service = service;
    this.greeting = 'TimePickerController!';
    this.hours = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
        18, 19, 20, 21, 22, 23, 24 ];
    this.minutes = [ '00', '15', '30', '45' ];
    this.chooseFreq = true;
    this.once = false;
    this.monthly = false;
    this.weekly = false;
    this.addHolidays = false;
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
			console.log(user);
            this.marketID = user.admin[0]._id;
            this.getUpdatedMarket( user.admin[0]._id );
      } );
  }
  getUpdatedMarket( ID ) {
      return this.service.market.getOne( ID )
      .then( market => {
          this.market = market;
          this.closedDates = market.closedDates;
          this.openOn = market.recurrence.dayOfWeek;
          if ( market.recurrence.frequency === "once" ) {
              this.chooseFreq = false;
              this.weeklySchedule = false;
              this.onceSchedule = true;
              this.openOn = {
                  date: market.startDate,
                  hours: market.recurrence.dayOfWeek
              }
          }
          else if ( market.recurrence.frequency === "monthly" ) {
            this.chooseFreq = false;
            this.weeklySchedule = false;
            this.monthlySchedule = true;
            this.onceSchedule = false;
          }
          else if (market.recurrence.frequency === "weekly" ) {
              this.chooseFreq= false;
          }
      } );
  }

  saveSchedule( days ) {
    for ( let i = 0; i < days.length; i++ ) {
        if ( days[i].value ) {
            this.openOn.push( days[i] );
        }
    }
    const editedObj = {
        recurrence: {
            frequency: "weekly",
            dayOfWeek: this.openOn
        }
    };

    return this.service.market.editOne( this.marketID, editedObj )
        .then( response => {
            this.getUpdatedMarket( this.marketID );
            this.weekly = false;
            this.addHolidays = true;
        } );
}

    // Gets Holidays from Current Year
    getHolidays() {
        this.service.holiday.year()
        .then( holidayData => {
            this.holidays = holidayData;
        } );
    }

    addObservedHoldiay( hol ) {
        for ( let i = 0; i < this.closedDates.length; i++ ) {
            if ( this.closedDates[i].name === hol.name ) {
                return;
            }
        }
        this.closedDates.push( hol );
        const editedObject = {
            closedDates: this.closedDates
        };
        return this.service.market.editOne( this.marketID, editedObject )
        .then( market => {
            this.getUpdatedMarket( this.marketID );
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
        return this.service.market.editOne( this.marketID, editedObject )
        .then( market => {
            this.getUpdatedMarket( this.marketID );
        } );
    }

    editSchedule( updatedDay ) {
        if ( this.onceSchedule ) {
            const openClose = [
                {
                    open: updatedDay.hours[0].open,
                    close: updatedDay.hours[0].close
                }
            ]
            const editedObject = {
                recurrence: {
                    daysOfWeek: openClose
                }
            };
            console.log(editedObject);
            return this.service.market.editOne( this.marketID, editedObject )
            .then( market => {
                this.getUpdatedMarket( this.marketID );
            } );
        };
        this.openOn.map( day => {
            const deleteIndex = this.openOn.indexOf( day );
            if ( day.name === updatedDay.name ) {
                this.openOn[deleteIndex] = updatedDay;
            }
        } );
        const editedObject = {
            recurrence: {
                dayOfWeek: this.openOn
            }
        };
        return this.service.market.editOne( this.marketID, editedObject )
        .then( market => {
            this.getUpdatedMarket( this.marketID );
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
        }; return this.service.market.editOne( this.marketID, onceEvent )
        .then( market => {
            this.getUpdatedMarket( this.marketID );
        } );
    }
}

TimePickerController.$inject = [ 'service' ];

export { TimePickerController };
