
const img = document.createElement( 'img' );
img.src = require( '../../img/SpotAssignLogo.png' );

export class NavbarController {
	constructor() {
		this.picture = img.src;
}
