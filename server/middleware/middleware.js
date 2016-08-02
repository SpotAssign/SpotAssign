export default function (req, res, next) {
	if ( req.isAuthenticated() ) {
		console.log( req.isAuthenticated(),"user is authenticated, please proceed");
		next();
	} else {
		console.log(req.isAuthenticated(),"user is not authenticated, I should redirect");
		req.session.redirectTo = '/#/';
		res.redirect( '/' );
	}
}
