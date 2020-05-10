var unirest = require("unirest");

var req = unirest("POST", "https://yelpapiserg-osipchukv1.p.rapidapi.com/getAutocomplete");

req.headers({
	"x-rapidapi-host": "YelpAPIserg-osipchukV1.p.rapidapi.com",
	"x-rapidapi-key": "882bd2a086msh57a12fb40be1517p1bd1e1jsn7104e8a6ad6d",
	"content-type": "application/x-www-form-urlencoded"
});

req.form({});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});