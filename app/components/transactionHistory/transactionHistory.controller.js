class TransactionHistoryController {
  constructor( service ) {
    this.service = service;
    this.greeting = 'TransactionHistoryController!';
  }
}

TransactionHistoryController.$inject = [ 'service' ];

export { TransactionHistoryController };
