class UserSpotsController {
	constructor( service ) {
		this.service = service;
		$( document ).ready( function () {
			$( '.collapsible' ).collapsible();
		} );
	}
}

UserSpotsController.$inject = [ 'service' ];

export { UserSpotsController };
