class UserHomeController {
  constructor( service ) {
    this.service = service;
    this.greeting = 'UserHomeController!';
  }

}

UserHomeController.$inject = [ 'service' ];
export { UserHomeController };
