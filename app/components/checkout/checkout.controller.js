class CheckoutController {
    constructor( service ) {
        this.newMessage = 'hi there from controller'
        this.current = {};
        this.service.userService = service.userService;
    }
    getCurrentUser() {
        this.service.userService.getUsers()
        .then( ( currentUser ) => {
            this.current = currentUser;
        } );
    }
}

CheckoutController.$inject= [ 'service' ];
export { CheckoutController };
