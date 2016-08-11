const mapService = $http => {
	const api = 'http://localhost:8080';
	const map = null;
	return {
		setState( m ) {
			this.map = m;
			console.log( 'SET MAP $$$$$$$$$$$$$$ ', this.map );
			return this.map;
		},
		getState() {
			console.log( 'GET MAP $$$$$$$$$$$$$$ ', this.map );
			return this.map;
		},
		getAll( query ) {
			return $http.get( `${api}/api/map` )
				.then( res => res.data );
		},
		getOne( id ) {
			return $http.get( `${api}/api/map/${id}` )
				.then( res => res.data );
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
					size: newMap.size,
					image: newMap.image,
					spots: newMap.spots
				}
			} ).then( res => {
				this.setState( res.data );
				return res.data;
			} );
		},
		editOne( id, editedBooth ) {
			return $http( {
				method: 'PUT',
				url: `${api}/api/map/${id}`,
				data: {
					nickname: editedBooth.nickname,
					availableDates: editedBooth.availableDates,
					location: editedBooth.location
				}
			} ).then( res => {
				this.setState( res.data );
			} );
		},
		deleteOne( id ) {
			return $http.delete( `${api}/map/${id}` )
				.then( res => {
					this.setState( res.data );
				} );
		}
	};
};

mapService.$inject = [ '$http' ];
export { mapService };
