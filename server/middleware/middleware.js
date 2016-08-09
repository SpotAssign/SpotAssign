export default function ( req, res, next ) { // TODO REMOVE COMMENTS
	// If you would like middleware to work please follow Step 1 and 2

	// Step 1
	// (Comment out the following block)
	// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	// return next();
	// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

	// Step 2
	// ( Uncomment block below )
	// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	if ( req.isAuthenticated() ) {
		return next();
	} else {
		const notLoggedIn = { userAuthenticated: false };
		return res.json( notLoggedIn );
	}
	// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
}
