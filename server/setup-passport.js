import Auth0Strategy from 'passport-auth0';
import config from './config/config';

const strategy = new Auth0Strategy(
	{
		domain: 'devmountainfarmers.auth0.com',
		clientID: config.auth0.clientID,
		clientSecret: config.auth0.clientSecret,
		callbackURL: '/callback'
	},
	( accessToken, refreshToken, extraParams, profile, done ) => {
        // accessToken is the token to call Auth0 API (not needed in the most cases)
        // extraParams.id_token has the JSON Web Token
        // profile has all the information from the user
		return done( null, profile );
	}
);

export default strategy;
