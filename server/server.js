import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import mongoose from 'mongoose';
import passport from 'passport';
import Auth0Strategy from 'passport-auth0';
import RedisStore from 'connect-redis';
import cookieParser from 'cookie-parser';

// import stategy from './setup-passport';

const app = express();
const port = 8080;

import config from './config/config'; // Master Config
RedisStore( session );

import masterRoutes from './masterRoutes';

app.use( cookieParser() );
app.use( bodyParser.json() );
app.use( express.static( `${__dirname}/../app` ) );
app.use( session( config.session ) );
app.use( passport.initialize() );
app.use( passport.session() );

mongoose.connect( config.mongoUri );
mongoose.connection.once( 'open', () => console.log( `Connected with mongo db at ${config.mongoUri}` ) );

// Auth0 callback handler
app.get( 'http://localhost:8080/callback',
  passport.authenticate( 'auth0', { failureRedirect: '/' } ),
  function( req, res ) {
    if ( !req.user ) {
      throw new Error( 'user null' );
    }
    res.redirect( '/user' );
  });

// Everything goes below app.use
masterRoutes( app );

app.listen( port, ( err ) => {
	if ( err ) {
		console.log( err );
	} else {
		console.log( `Express is running on ${port}` );
	}
} );
