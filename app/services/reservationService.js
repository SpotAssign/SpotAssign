const reservationService = $http => {
	const api = 'http://localhost:8080';
	const reservation = null;
	return {
		setState( reserv ) {
			this.reservation = reserv;
			return this.reservation;
		},
		getState() {
			return this.reservation;
		},
		getAll( query ) {
			return $http.get( `${api.url}/api/reservations` )
				.then( data => data );
		},
		getOne( id ) {
			return $http.get( `${api.url}/api/reservations/${id}` )
				.then( data => data );
		},
		create( newRes ) {
			return $http( {
				method: 'POST',
				url: `${api.url}/api/reservations`,
				data: {
					dates: newRes.dates,
					user: newRes.userId,
					market: newRes.marketId,
					map: newRes.mapId,
					payment: newRes.paymentId
				}
			} ).then( data => data );
		},
		editOne( id, editedRes ) {
			return $http( {
				method: 'PUT',
				url: `${api.url}/api/reservations/${id}`,
				data: {
					dates: editedRes.dates,
					user: editedRes.userId,
					market: editedRes.marketId,
					booth: editedRes.boothId
				}
			} ).then( data => data );
		},
		deleteOne( id ) {
			return $http.delete( `${api.url}/reservations/${id}` )
				.then( data => data );
		}
	};
};

reservationService.$inject = [ '$http' ];
export { reservationService };
