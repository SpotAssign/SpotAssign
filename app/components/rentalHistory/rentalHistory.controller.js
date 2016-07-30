class RentalHistoryController {
  constructor(service) {
    this.service = service;
    this.greeting = 'RentalHistoryController!';
  }
}

RentalHistoryController.$inject = [ 'service' ];

export { RentalHistoryController };
