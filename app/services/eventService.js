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
			return $http.get( `${api}/api/markets` )
				.then( data => data );
		},
		getOne( id ) { // TODO Change to search by name
			return $http.get( `${api}/api/markets/${id}` )
				.then( data => data );
		},
		create( newMarket ) {
			return $http( {
				method: 'POST',
				url: `${api}/api/markets`,
				data: newMarket
			} ).then( data => this.set( data ) );
		},
		editOne( id, editedMarket ) {
			return $http( {
				method: 'PUT',
				url: `${api}/api/markets/${id}`,
				data: editedMarket
			} ).then( data => this.set( data ) );
		},
		deleteOne( id ) {
			return $http.delete( `${api}/api/markets/${id}` )
				.then( data => this.set( null ) );
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
