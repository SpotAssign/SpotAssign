angular.module('SpotAssign')
.factory('serverTestingFactory', function($http, ref) {
    return {
        // **********************************************************************************
        //                                 Users
        // **********************************************************************************
        getUsers () { // Gets all users
            return $http.get(`${ref.url}/api/users`)
        },
        getThisUser ( userId ) { // Gets one, or current user
            return $http.get(`${ref.url}/api/users/${userId}`)
        },
        addUser ( newUser ) { // Post a New User
            return $http.post(`${ref.url}/api/users`, newUser)
        },
        editUser ( updatedUser, userId ) { // Edit the user, pass in the new parameters and the userId
            return $http.put(`${ref.url}/api/users/${userId}`, updatedUser)
        },
        deleteUser ( userId ) {
            return $http.delete(`${ref.url}/api/users/${userId}`)
        },


        // **********************************************************************************
        //                                 Markets
        // **********************************************************************************
        getMarkets () { // Gets all Markets
            return $http.get(`${ref.url}/api/markets`)
        },
        getThisMarket ( marketId ) { // Gets one market
            return $http.get(`${ref.url}/api/markets/${marketId}`)
        },
        addMarket ( newMarket ) { // Post a New Market
            return $http.post(`${ref.url}/api/markets`, newMarket)
        },
        addMarket ( updatedMarket, marketId ) { // Edit the market, pass in the new parameters and the marketId
            return $http.put(`${ref.url}/api/markets/${marketId}`, updatedMarket)
        },
        deleteMarket ( marketId ) {
            return $http.delete(`${ref.url}/api/markets/${marketId}`)
        },


        // **********************************************************************************
        //                                 Booths
        // **********************************************************************************
        getBooths () { // Gets all Booths
            return $http.get(`${ref.url}/api/booths`)
        },
        getThisBooth ( boothId ) { // Gets one booth
            return $http.get(`${ref.url}/api/booths/${boothId}`)
        },
        addBooth ( newBooth ) { // Post a New Booth
            return $http.post(`${ref.url}/api/booths`, newBooth)
        },
        addBooth ( updatedBooth, boothId ) { // Edit the booth, pass in the new parameters and the boothId
            return $http.put(`${ref.url}/api/booths/${boothId}`, updatedBooth)
        },
        deleteBooth ( boothId ) {
            return $http.delete(`${ref.url}/api/booths/${boothId}`)
        },

        // **********************************************************************************
        //                                 Reservation
        // **********************************************************************************
        getReservations () { // Gets all Reservations
            return $http.get(`${ref.url}/api/reservations`)
        },
        getThisReservation ( reservationId ) { // Gets one booth
            return $http.get(`${ref.url}/api/reservations/${reservationId}`)
        },
        addReservation ( newReservation ) { // Post a New Reservation
            return $http.post(`${ref.url}/api/reservations`, newReservation)
        },
        addReservation ( updatedReservation, reservationId ) { // Edit the reservation, pass in the new parameters and the reservationId
            return $http.put(`${ref.url}/api/reservations/${reservationId}`, updatedReservation)
        },
        deleteReservation ( reservationId ) {
            return $http.delete(`${ref.url}/api/reservations/${reservationId}`)
        },


        // **********************************************************************************
        //                                 Payment
        // **********************************************************************************
        getPayments () { // Gets all Payments
            return $http.get(`${ref.url}/api/payments`)
        },
        getThisPayment ( paymentId ) { // Gets one payment
            return $http.get(`${ref.url}/api/booths/${paymentId}`)
        },
        addPayment ( newPayment ) { // Post a New Payment
            return $http.post(`${ref.url}/api/booths`, newPayment)
        },
        addPayment ( updatedPayment, paymentId ) { // Edit the payment, pass in the new parameters and the paymentId
            return $http.put(`${ref.url}/api/booths/${paymentId}`, updatedPayment)
        },
        deletePayment ( paymentId ) {
            return $http.delete(`${ref.url}/api/booths/${paymentId}`)
        },



    }
})
