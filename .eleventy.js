module.exports = function(eleventyConfig) {

	eleventyConfig.addPassthroughCopy('stylesheets/**');
	eleventyConfig.addPassthroughCopy('images/**');
	eleventyConfig.addPassthroughCopy('js/**');

	/*
	*/
	eleventyConfig.addFilter("catLink", (cat,categories) => {
		for(let c in categories) {
			if(categories[c].title === cat) return categories[c].slug+".html";			
		}
		console.error('Bad category', JSON.stringify(cat));
	})

	/*
	This is how I filter entries by a category. We are passed the URL safe category ("Dates-Times"), 
	but entries will have "Dates/Times", so we translate the URL safe one to the nice one, 
	then find entries where it's in the list
	*/
	eleventyConfig.addFilter("filterByCat", (entries,category,list) => {
		console.log('get entries for ',category);
		let nice = '';
		for(let c in list) {
			if(list[c].slug === category) nice = list[c].title
		}
		return entries.filter(e => {
			let entriesCats = e.data.categories.split(',');
			return entriesCats.includes(nice);
		});
	})

};