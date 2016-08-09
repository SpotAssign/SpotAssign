const stateService = ( $http, $location ) => {
	let event = null;
	let map = null;
	let currentUser = null;
	return {
		event: {
			getMap() {
				console.log( map, 'this is map' );
				return map;
			},
			setMap( currentMap ) {
				map = currentMap;
			},
			getEvent() {
				console.log( event, 'this is event' );
				return event;
			},
			setEvent( ev ) {
				event = ev;
			}
		},
		user: {
			getCurrentUser() {
				return currentUser;
			},
			setCurrentUser( user ) {
				currentUser = user;
			}
		}
	};
};

stateService.$inject = [ '$http', '$location' ];
export { stateService };
