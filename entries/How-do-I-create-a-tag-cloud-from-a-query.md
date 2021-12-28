---
title: How do I create a tag cloud from a query?
published: November 21, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Display and Layout
permalink: entries/How-do-I-create-a-tag-cloud-from-a-query.html
entryid: 119
---

<h3>How do I create a tag cloud from a query?</h3>

<p>
A tag cloud is a list of tags where size and color reflects popularity- the more often a tag is used the larger and perhaps more colorfully it will be displayed in the cloud.
</p>

<p>
Say for example you want to create a dynamic tag cloud of links based on a list of categories that you have stored in a database. Once you have queried your data, the basic idea is to dynamically set the css font-size of your displayed tag text based on how many hits your query returned for that particular tag.
</p>

<p>
The following code sample shows how a tag cloud can be created based on a query of tags and their hit counts. Special thanks to Steven Erat http://www.talkingtree.com/blog/index.cfm/2005/11/15/TagCloudPod</a> for contributing the majority of this code.
</p>

<pre><code class="language-markup">&lt;!--- first we will statically populated a fake query with some test data.---&gt;
&lt;cfset tags = queryNew(&quot;tag,tagCount&quot;)&gt;
&lt;!--- Make 5 rows in the query---&gt;
&lt;cfset newRow = queryAddRow(tags, 5)&gt;
&lt;!--- Set the values of the cells in the query ---&gt;
&lt;cfset temp = querySetCell(tags, &quot;tag&quot;, &quot;ColdFusion&quot;, 1)&gt;
&lt;cfset temp = querySetCell(tags, &quot;tagCount&quot;, &quot;100&quot;, 1)&gt;
&lt;cfset temp = querySetCell(tags, &quot;tag&quot;, &quot;Flex&quot;, 2)&gt;
&lt;cfset temp = querySetCell(tags, &quot;tagCount&quot;, &quot;75&quot;, 2)&gt;
&lt;cfset temp = querySetCell(tags, &quot;tag&quot;, &quot;Apollo&quot;, 3)&gt;
&lt;cfset temp = querySetCell(tags, &quot;tagCount&quot;, &quot;50&quot;, 3)&gt;
&lt;cfset temp = querySetCell(tags, &quot;tag&quot;, &quot;Flash&quot;, 4)&gt;
&lt;cfset temp = querySetCell(tags, &quot;tagCount&quot;, &quot;25&quot;, 4)&gt;
&lt;cfset temp = querySetCell(tags, &quot;tag&quot;, &quot;Photoshop&quot;, 5)&gt;
&lt;cfset temp = querySetCell(tags, &quot;tagCount&quot;, &quot;5&quot;, 5)&gt;
&lt;!--- calculate our hit ranges etc. ---&gt;
&lt;cfset tagValueArray = ListToArray(ValueList(tags.tagCount))&gt;
	&lt;cfset max = ArrayMax(tagValueArray)&gt;
	&lt;cfset min = ArrayMin(tagValueArray)&gt;
	&lt;cfset diff = max - min&gt;
	&lt;!--- 
		scaleFactor will affect the degree of difference between the different font sizes.
		if you have one really large category and many smaller categories, then set higher.
		if your category count does not vary too much try a lower number.		 
	---&gt;	&lt;!--- 
		scaleFactor will affect the degree of difference between the different font sizes.
		if you have one really large category and many smaller categories, then set higher.
		if your category count does not vary too much try a lower number.		 
	---&gt;
	&lt;cfset scaleFactor = 25&gt;
	&lt;cfset distribution = diff / scaleFactor&gt;
	
	&lt;!--- optionally add a range of colors in the CSS color property for each class ---&gt;
	&lt;cfoutput&gt;
		&lt;style&gt;
			.smallestTag { font-size: 9px; }
			.smallTag { font-size: 11px; }
			.mediumTag { font-size: 13px; }
			.largeTag { font-size: 16px; }
			.largestTag { font-size: 20px; } 
		&lt;/style&gt;
		
		
		&lt;cfloop query=&quot;tags&quot;&gt;
			&lt;cfsilent&gt;
				&lt;cfif tags.tagCount EQ min&gt;
					&lt;cfset class=&quot;smallestTag&quot;&gt;
				&lt;cfelseif tags.tagCount EQ max&gt;
					&lt;cfset class=&quot;largestTag&quot;&gt;
				&lt;cfelseif tags.tagCount GT (min + (distribution*2))&gt;
					&lt;cfset class=&quot;largeTag&quot;&gt;
				&lt;cfelseif tags.tagCount GT (min + distribution)&gt;
					&lt;cfset class=&quot;mediumTag&quot;&gt;
				&lt;cfelse&gt;
					&lt;cfset class=&quot;smallTag&quot;&gt;
				&lt;/cfif&gt;
			&lt;/cfsilent&gt;
			&lt;a href=&quot;foo&quot;&gt;&lt;span class=&quot;#class#&quot;&gt;#lcase(tags.tag)#&lt;/span&gt;&lt;/a&gt;
		&lt;/cfloop&gt;
	&lt;/cfoutput&gt;
</code></pre>



