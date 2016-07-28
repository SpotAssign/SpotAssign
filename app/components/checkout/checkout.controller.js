class CheckoutController {
    constructor( service ) {
        this.newMessage = 'hi there from controller';
        this.current = {};
        this.service = service;
        this.getCurrentUser();
    }
    getCurrentUser() {
        return this.service.user.getAll()
        .then( ( currentUser ) => {
            this.current = currentUser;
        } );
    }
}

CheckoutController.$inject= [ 'service' ];
export { CheckoutController };
