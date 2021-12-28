module.exports = function(eleventyConfig) {

	eleventyConfig.addPassthroughCopy('stylesheets/**');
	eleventyConfig.addPassthroughCopy('images/**');
	eleventyConfig.addPassthroughCopy('js/**');

};