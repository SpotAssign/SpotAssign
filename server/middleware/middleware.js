export default function (req, res, next) {
	if ( req.isAuthenticated() ) {
		console.log( req.isAuthenticated(),"user is authenticated, please proceed");
		next();
	} else {
		// console.log( res.redirect, req.isAuthenticated(),"user is not authenticated, I should redirect");
		return res.redirect('http://localhost:8080');
	}
}
