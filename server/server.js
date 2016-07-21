const express = require('express');
const bodyParser = require('body-parser');
const session = require ('express-session');
const mongoose = require('mongoose');
const passport = require('passport');


const sessionConfig = require('./config/sessionConfig');
const masterRoutes = require('./masterRoutes');

const app = express();
const port = 8080;

app.use( bodyParser.json() );
app.use( express.static(`${__dirname}/public`));
app.use( session (sessionConfig) );
app.use( passport.initialize());
app.use( passport.session());


const mongoUri = require("./config/mlabs").mongoUri;
mongoose.connect(mongoUri);
mongoose.connection.once('open', ()=> {console.log(`Connected with mongo db at ${mongoUri}`)})

//Everything goes below app.use
masterRoutes(app);

app.listen(port, ()=> {
console.log(`Express is running on ${port}`);
});
