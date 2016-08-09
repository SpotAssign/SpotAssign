import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import mongoose from 'mongoose';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import webpack from 'webpack';
import webpackDevConfig from '../webpack.config.dev';

const compiler = webpack( webpackDevConfig );

const app = express();
const port = process.env.PORT || 8080 || 8081;

app.use( require( 'webpack-hot-middleware' )( compiler, { log: console.log } ) );
app.use( require( 'webpack-dev-middleware' )( compiler, {
	noInfo: true,
	publicPath: webpackDevConfig.output.publicPath,
	stats: { colors: true }
} ) );

import config from './config/config'; // Master Config

import masterRoutes from './masterRoutes';

app.use( cookieParser() );
app.use( bodyParser.json() );
app.use( express.static( `${__dirname}/../dist` ) );
app.use( session( config.session ) );
app.use( passport.initialize() );
app.use( passport.session() );

mongoose.connect( config.mongoUri );
mongoose.connection.once( 'open', () => {
	console.log( `Connected with mongo db at ${config.mongoUri}` );
} );

masterRoutes( app );

app.listen( port, ( err ) => {
	if ( err ) {
		console.log( err );
	} else {
		console.log( `Express is running on ${port}` );
	}
} );
