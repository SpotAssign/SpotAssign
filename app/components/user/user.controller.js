class UserController {
	constructor() {

		const create = document.createElement( 'img' );
		create.src = require( '../../img/icons/createEventIcon.png' );
		this.createEvent = create.src;

		const find = document.createElement( 'img' );
		find.src = require( '../../img/icons/findEventIcon.png' );
		this.findEvent = find.src;

		const share = document.createElement( 'img' );
		share.src = require( '../../img/icons/shareWithFriendsIcon.png' );
		this.inviteFriends = share.src;

		const mark = document.createElement( 'img' );
		mark.src = require( '../../img/SpotAccessMarkCorner.png' );
		this.markPhoto = mark.src;
	}
}

UserController.$inject = [];
export { UserController };
