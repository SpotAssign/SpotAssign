class UserController {
	constructor() {
		const mark = document.createElement( 'img' );
		mark.src = require( '../../img/SpotAccessMark.png' );
		this.markPhoto = mark.src;
	}
}

UserController.$inject = [];
export { UserController };
