class CheckoutController {
    constructor( userService ) {
        this.newMessage = 'hi there from controller'
        this.current = {};
        this.userService = userService;
    }
    getCurrentUser() {
        this.userService.getCurrentUser()
        .then( ( currentUser ) => {
            this.current = currentUser;
        } );
    }
}

CheckoutController.$inject= [ 'userService' ];
export { CheckoutController };
