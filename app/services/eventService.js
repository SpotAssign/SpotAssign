const eventService = $http => {
	const api = 'http://localhost:8080';
	const event = null;
	return {
		setState( evnt ) {
			this.event = evnt;
			return this.event;
		},
		getState() {
			return this.event;
		},
		getAll( query ) {
			return $http.get( `${api}/api/events` )
				.then( data => data );
		},
		getEventByName( name ) {
			return $http.get( `${api}/api/event/${name}` )
				.then( result => {
					this.setState( result.data );
					return result.data;
				} );
		},
		create( newMarket ) {
			return $http( {
				method: 'POST',
				url: `${api}/api/event`,
				data: newMarket
			} ).then( result => this.setState( result.data ) );
		},
		editOne( id, editedMarket ) {
			return $http( {
				method: 'PUT',
				url: `${api}/api/event/${id}`,
				data: editedMarket
			} ).then( result => this.setState( result.data ) );
		},
		deleteOne( id ) {
			return $http.delete( `${api}/api/event/${id}` )
				.then( data => this.setState( null ) );
		},
		holidayYear() {
			const currentYear = new Date().getFullYear();
			return $http.get( `https://holidayapi.com/v1/holidays?key=ac242d8c-df86-4568-a0cb-6a2540e62a86&country=US&year=${currentYear}` )
				.then( ( { data } ) => {
					return data.holidays;
				} );
		}
	};
};

eventService.$inject = [ '$http' ];
export { eventService };
