export class NavbarController {
	constructor() {
		const img = document.createElement( 'img' );
		img.src = require( '../../img/SpotAssignLogo.png' );
		this.picture = img.src;

		$( document ).ready( function() {
			$( '.button-collapse' ).sideNav();
		} );
	}

}
