const path = require('path');
const express = require('express');
const flash = require('express-flash');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const client = express();
client.use( express.static( path.join(__dirname,"../assets") ) );
client.use( session({
	resave: !0,
	secret: "kingslimes",
	saveUninitialized: !0,
	cookie: { maxAge:144e4 },
	store: new session.MemoryStore
}));
client.use( express.urlencoded({
	extended: !0,
	limit: "50gb"
}));
client.use( flash() );
client.use( cookieParser() );
client.enable( "trust proxy" );
client.set( "view engine", "ejs" );
client.use( express.json({ limit:"50gb" }) );
client.set( "views", path.join(__dirname,"../routers") );

module.exports = { client }