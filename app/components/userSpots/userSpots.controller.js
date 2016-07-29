class UserSpotsController {
  constructor( service ) {
    this.service = service;
    this.greeting = 'UserSpotsController!';
  }
}

UserSpotsController.$inject = [ 'service' ];

export { UserSpotsController };
