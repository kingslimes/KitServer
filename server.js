const { client } = require('./lib/router');

client.get("/", ( req, res ) => {
	res.render("index")
})

client.all("*", ( req, res ) => {
	res.render("error/404");
})

client.listen( process.env.PORT || 5555 )