import { api } from './api';

const userService = {
        getUsers( query ) {
            console.log("hi from get users");
            return $http.get( `${api.url}/api/users` )
            .then( ( { data } ) => { return data; } );
        },

    // This function will either get the current user,
    // or create a new user if no email is known to exsist in the DB
        getCurrentUser() {
            return $http.get( `${api.url}/user` )
            .then( ( { data } ) => { return data; } );
        },
        getOneUser( id ) {
            return $http.get( `${api.url}/api/users/${id}` )
            .then( ( { data } ) => { return data; } );
        }
};

userService.$inject = [ '$http', 'api' ];

export { userService };
