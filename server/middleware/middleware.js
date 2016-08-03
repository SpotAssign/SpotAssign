export default function ( req, res, next ) {
	// If you would like middleware to work please follow Step 1 and 2

	// Step 1
	// (Comment out the following block)
	// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	return next()
	// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

	// Step 2
	// ( Uncomment block below )
	// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	// const notLoggedIn = { userAuthenticated: false };
	// if ( req.isAuthenticated() ) {
	// 	return next();
	// } return res.json( notLoggedIn );
	// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
}
