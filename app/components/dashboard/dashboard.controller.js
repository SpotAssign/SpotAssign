class DashboardController {
	constructor( service, $state ) {
		this.service = service;
		this.state = $state;
		this.test();
	}

	test() {
		console.log( this.state );
	}

}

DashboardController.$inject = [ 'service', '$state' ];
export { DashboardController };
