const mapService = $http => {
	const api = 'http://localhost:8080';
	const map = null;
	return {
		setState( m ) {
			this.map = m;
			return this.map;
		},
		getState() {
			return this.map;
		},
		getAll( query ) {
			return $http.get( `${api}/api/map` )
				.then( data => data );
		},
		getOne( id ) {
			return $http.get( `${api}/api/map/${id}` )
				.then( data => data );
		},
		create( newMap ) {
			return $http( {
				method: 'POST',
				url: `${api}/api/map`,
				data: {
					name: newMap.name,
					availableDates: newMap.availableDates,
					market: newMap.marketId,
					location: newMap.location,
					mapType: newMap.mapType,
					mapImage: newMap.mapImage,
					spots: newMap.spots
				}
			} ).then( res => res.data );
		},
		editOne( id, editedBooth ) {
			return $http( {
				method: 'PUT',
				url: `${api}/api/booths/${id}`,
				data: {
					nickname: editedBooth.nickname,
					availableDates: editedBooth.availableDates,
					location: editedBooth.location
				}
			} ).then( data => data );
		},
		deleteOne( id ) {
			return $http.delete( `${api}/booths/${id}` )
				.then( data => data );
		}
	};
};

mapService.$inject = [ '$http' ];
export { mapService };
