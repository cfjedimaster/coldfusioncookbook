/*
I copy from my old site (currently at ../coldfusioncookbook2). I copy entries/*.ejs and write it here, 
but get front matter from entries/_data.json
*/

const FROM = "../coldfusioncookbook2/public/entries/";
const FROM_DATA = FROM + "_data.json"

const TO = "./entries/";


const fs = require("fs");

let fromData = JSON.parse(fs.readFileSync(FROM_DATA,'utf8'));

let entries = Object.keys(fromData);
for(let entry of entries) {
	let data = fromData[entry];
	let content = fs.readFileSync(FROM+entry+'.ejs','utf8');
	// remove partial
	content = content.replace('<%- partial("_footer") %>', '').trim();
	/*
	we also need to remove the last para as it has stuff we want to be dynamic now
	*/
	let endMarker = content.lastIndexOf("<p>\nThis question was written by");
	content = content.substring(0, endMarker);
	let frontMatter = getFrontMatter(data, entry);
	let newFileContent = frontMatter + content;
	let newFileName = TO + entry + ".md";
	fs.writeFileSync(newFileName, newFileContent, 'utf8');
}

console.log("Done writing a bunch of files, hope you didn't screw it up.");

function getFrontMatter(d,e) {
	return `---
title: ${d.title}
published: ${d.published}
author: ${d.author}
authorwebsite: ${d.authorwebsite}
categories: ${d.categories}
permalink: entries/${e}.html
entryid: ${d.id}
---

`
}