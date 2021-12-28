/*
Another temp script - I rewrite the old categories data which looked like this:


{
	"Application-Management":{
		"title":"Application Management",
		"desc":"This covers anything related to applications, including session and client tracking."
	},
	"Caching":{
		"title":"Caching",
		"desc":"This category covers a full range of caching options and tricks that are available to ColdFusion."
	},
}

to a proper array of obs
*/

const FROM = "../coldfusioncookbook2/public/category/_data.json";
const TO = "./_data/categorylist.json";
const fs = require("fs");

let data = JSON.parse(fs.readFileSync(FROM,'utf8'));
let slugs = Object.keys(data);

let result = [];

slugs.forEach(s => {
	let newData = {
		slug:s,
		title:data[s].title,
		desc:data[s].desc
	};

	result.push(newData);
});

fs.writeFileSync(TO, JSON.stringify(result), 'utf8');
console.log(`Wrote to ${TO}`);