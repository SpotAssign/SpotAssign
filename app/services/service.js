// Checkout the checkout.js for how to use on the module
// Checkout the CheckoutController for how to use in the controller
import { stateService } from './stateService';

const service = ( $http, $location, stateService ) => {
    const api = {
        url: 'http://localhost:8080'
    };
    return {
        //  <<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>>
        //                          MARKETS SERVICE
        // <<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>>
        market: {
            getAll( query ) {
                return $http.get( `${api.url}/api/markets` )
                .then( data => data );
            },
            getOne( id ) {
                return $http.get( `${api.url}/api/markets/${id}` )
                .then( data => data );
            },
            create( newMarket ) {
                return $http( {
                    method: 'POST',
                    url: `${api.url}/api/markets`,
                    data: {
                        name: newMarket.name,
                        location: newMarket.location,
                        bio: newMarket.bio,
                        paymentInfo: newMarket.paymentInfo,
                        photo: newMarket.photo,
                        startDate: newMarket.startDate,
                        recurrence: newMarket.recurrence,
                        endDate: newMarket.endDate,
                        admins: newMarket.admins,
												map: newMarket.map
                    }
                } ).then( data => data );
            },
            editOne( id, editedMarket ) {
                return $http( {
                    method: 'PUT',
                    url: `${api.url}/api/markets/${id}`,
                    data: {
                        name: editedMarket.name,
                        location: editedMarket.location,
                        bio: editedMarket.bio,
                        paymentInfo: editedMarket.paymentInfo,
                        photo: editedMarket.photo,
                        startDate: editedMarket.startDate,
                        recurrence: editedMarket.recurrence,
                        endDate: editedMarket.endDate,
                        admins: editedMarket.admins,
                        closedDates: editedMarket.closedDates
                    }
                } ).then( data => data );
            },
            deleteOne( id ) {
                return $http.delete( `${api.url}/api/markets/${id}` )
                .then( data => data );
            }
        },
        //  <<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>>
        //                           RESERVATION SERVICE
        // <<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>>
        reservation: {
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
        },
        //  <<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>>
        //                           BOOTHS SERVICE
        // <<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>>
        map: {
            getAll( query ) {
                return $http.get( `${api.url}/api/map` )
                .then( data => data );
            },
            getOne( id ) {
                return $http.get( `${api.url}/api/map/${id}` )
                .then( data => data );
            },
            create( newMap ) {
                return $http( {
                    method: 'POST',
                    url: `${api.url}/api/map`,
                    data: {
                        nickname: newMap.nickname,
                        availableDates: newMap.availableDates,
                        market: newMap.marketId,
                        location: newMap.location,
												mapType: newMap.mapType,
												mapImage: newMap.mapImage,
												spots: newMap.spots
                    }
                } ).then( data => data );
            },
            editOne( id, editedBooth ) {
                return $http( {
                    method: 'PUT',
                    url: `${api.url}/api/booths/${id}`,
                    data: {
                        nickname: editedBooth.nickname,
                        availableDates: editedBooth.availableDates,
                        location: editedBooth.location
                    }
                } ).then( data => data );
            },
            deleteOne( id ) {
                return $http.delete( `${api.url}/booths/${id}` )
                .then( data => data );
            }
        },

        holiday: {
            year() {
                const currentYear = new Date().getFullYear();
                return $http.get( `https://holidayapi.com/v1/holidays?key=ac242d8c-df86-4568-a0cb-6a2540e62a86&country=US&year=${currentYear}`)
                .then( ( { data } ) => { return data.holidays; } );
            }
        }
    };
};

service.$inject = [ '$http', '$location', 'stateService' ];
export { service };
