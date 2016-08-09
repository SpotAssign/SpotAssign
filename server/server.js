import express from 'express';
import config from './config/config'; // Master Config

const app = express();
const port = process.env.PORT || 8080 || 8081;

// WEBPACK
import webpack from 'webpack';
import webpackDevConfig from '../webpack.config.dev';
const compiler = webpack( webpackDevConfig );
app.use( require( 'webpack-hot-middleware' )( compiler, { log: console.log } ) );
app.use( require( 'webpack-dev-middleware' )( compiler, {
	noInfo: true,
	publicPath: webpackDevConfig.output.publicPath,
	stats: { colors: true }
} ) );

// COOKIE/PARSER
import bodyParser from 'body-parser';
import session from 'express-session';
import cookieParser from 'cookie-parser';
app.use( cookieParser() );
app.use( bodyParser.json() );
app.use( express.static( `${__dirname}/../dist` ) );
app.use( session( config.session ) );

// PASSPORT
import passport from 'passport';
import strategy from './setup-passport';
app.use( passport.initialize() );
app.use( passport.session() );
passport.use( strategy );
passport.serializeUser( ( user, done ) => done( null, user ) );
passport.deserializeUser( ( user, done ) => done( null, user ) );

// CONNECT MONGO
import mongoose from 'mongoose';
mongoose.connect( config.mongoUri );
mongoose.connection.once( 'open', () => {
	console.log( `Connected with mongo db at ${config.mongoUri}` );
} );

import masterRoutes from './masterRoutes';
masterRoutes( app );

app.listen( port, err => {
	if ( err ) console.log( err );
	else console.log( `Express is running on ${port}` );
} );
