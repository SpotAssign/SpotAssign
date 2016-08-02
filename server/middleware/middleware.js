export default function (req, res, next) {
	if ( req.isAuthenticated() ) {
		console.log("user is authenticated, please proceed");
		next();
	} else {
		console.log("user is not authenticated, redirect");
		return res.redirect( '/#/' );
	}
}
