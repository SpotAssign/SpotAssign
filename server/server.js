import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import mongoose from 'mongoose';
import passport from 'passport';

const app = express();
const port = 8080;

import sessionConfig from './config/sessionConfig';
import masterRoutes from './masterRoutes';

app.use( bodyParser.json() );
app.use( express.static( `${__dirname}/../app` ) );
app.use( session( sessionConfig ) );
app.use( passport.initialize() );
app.use( passport.session() );

import mongoUri from './config/mlabs';
mongoose.connect( mongoUri );
mongoose.connection.once( 'open', () => console.log( `Connected with mongo db at ${mongoUri}` ) );

// Everything goes below app.use
masterRoutes( app );

app.listen( port, ( err ) => {
	if ( err ) {
		console.log( err );
	} else {
		console.log( `Express is running on ${port}` );
	}
} );
