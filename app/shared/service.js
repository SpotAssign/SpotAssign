// Checkout the checkout.js for how to use on the module
// Checkout the CheckoutController for how to use in the controller

const service = ( $http ) => {
    const api = {
        url: 'http://localhost:8080'
    };
    return {
        //  <<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>>
        //                          USERS SERVICE
        // <<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>>
        user: {
            getAll( query ) {
                return $http.get( `${ api.url }/api/users` )
                .then( ( { data } ) => { return data; } );
            },
            // This function will either get the current user,
            // or create a new user if no email is known to exsist in the DB
            getCurrentOrCreate() {
                return $http.get( `${ api.url }/user` )
                .then( ( { data } ) => { return data; } );
            },
            getOne( id ) {
                return $http.get( `${ api.url }/api/users/${id}` )
                .then( ( { data } ) => { return data; } );
            },
            editOne( id, editedUser ) {
                return $http( {
                    method: 'PUT',
                    url: `${ api.url }/api/users/${id}`,
                    data: {
                        phoneNumber: editedUser.phoneNumber,
                        boothCompName: editedUser.boothCompName,
                        paymentInfo: editedUser.paymentInfo
                    }
                } ).then( ( { data } ) => { return data; } );
            }
        },
        //  <<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>>
        //                          MARKETS SERVICE
        // <<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>>
        market: {
            getAll( query ) {
                return $http.get( `${ api.url }/api/markets` )
                .then( ( { data } ) => { return data; } );
            },
            getOne( id ) {
                return $http.get( `${ api.url }/api/markets/${ id }` )
                .then( ( { data } ) => { return data; } );
            },
            create( newMarket ) {
                return $http( {
                    method: 'POST',
                    url: `${ api.url }/api/markets`,
                    data: {
                        name: newMarket.name,
                        location: newMarket.location,
                        bio: newMarket.bio,
                        paymentInfo: newMarket.paymentInfo,
                        photo: newMarket.photo,
                        startDate: newMarket.startDate,
                        recurrence: newMarket.recurrence,
                        endDate: newMarket.endDate,
                        admins: newMarket.userId
                    }
                } ).then( ( { data } ) => { return data; } );
            },
            editOne( id, editedMarket ) {
                return $http( {
                    method: 'PUT',
                    url: `${ api.url }/api/markets/${ id }`,
                    data: {
                        name: editedMarket.name,
                        location: editedMarket.location,
                        bio: editedMarket.bio,
                        paymentInfo: editedMarket.paymentInfo,
                        photo: editedMarket.photo,
                        startDate: editedMarket.startDate,
                        recurrence: editedMarket.recurrence,
                        endDate: editedMarket.endDate,
                        admins: editedMarket.userId
                    }
                } ).then( ( { data } ) => { return data; } );
            },
            deleteOne( id ) {
                return $http.delete( `${ api.url }/markets/${id}` )
                .then( ( { data } ) => { return data; } );
            }
        },
        //  <<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>>
        //                           RESERVATION SERVICE
        // <<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>>
        reservation: {
            getAll( query ) {
                return $http.get( `${api.url}/api/reservations` )
                .then( ( { data } ) => { return data; } );
            },
            getOne( id ) {
                return $http.get( `${api.url}/api/reservations/${id}` )
                .then( ( { data } ) => { return data; } );
            },
            create( newRes ) {
                return $http( {
                    method: 'POST',
                    url: `${api.url}/api/reservations`,
                    data: {
                        dates: newRes.dates,
                        user: newRes.userId,
                        market: newRes.marketId,
                        booth: newRes.boothId,
                        payment: newRes.paymentId
                    }
                } ).then( ( { data } ) => { return data; } );
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
                } ).then( ( { data } ) => { return data; } );
            },
            deleteOne( id ) {
                return $http.delete( `${api.url}/reservations/${id}` )
                .then( ( { data } ) => { return data; } );
            }
        },
        //  <<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>>
        //                           BOOTHS SERVICE
        // <<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>>
        booth: {
            getAll( query ) {
                return $http.get( `${api.url}/api/booths` )
                .then( ( { data } ) => { return data; } );
            },
            getOne( id ) {
                return $http.get( `${api.url}/api/booths/${id}` )
                .then( ( { data } ) => { return data; } );
            },
            create( newBooth ) {
                return $http( {
                    method: 'POST',
                    url: `${api.url}/api/booths`,
                    data: {
                        nickname: newBooth.nickname,
                        availableDates: newBooth.availableDates,
                        market: newBooth.marketId,
                        location: newBooth.location
                    }
                } ).then( ( { data } ) => { return data; } );
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
                } ).then( ( { data } ) => { return data; } );
            },
            deleteOne( id ) {
                return $http.delete( `${api.url}/booths/${id}` )
                .then( ( { data } ) => { return data; } );
            }
        }
    };
};

service.$inject = [ '$http' ];
export { service };
