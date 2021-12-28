---
title: How do I display query results in an N-column table layout?
published: February 22, 2006
author: Erik Goodlad
authorwebsite: http://www.errorik.com/
categories: Display and Layout
permalink: How-do-I-display-query-results-in-an-Ncolumn-table-layout.html
entryid: 62
---

<h3>How do I display query results in an N-column table layout?</h3>

<p>
Displaying query information in a N-column table can be done with just a bit of logic. This first bit of code just creates a query object for the example, you don't need this if you have your own data to work with.
</p>

<pre><code class="language-markup">&lt;cfscript&gt;
stateList = &quot;Alabama,Alaska,Arizona,Arkansas,California,Colorado,Connecticut,Delaware,Florida,Georgia,Hawaii,Idaho,Illinois,Indiana,Iowa,Kansas,Kentucky,Louisiana,Maine,Maryland,Massachusetts,Michigan,Minnesota,Mississippi,Missouri,Montana,Nebraska,Nevada,New Hampshire,New Jersey,New Mexico,New York,North Carolina,North Dakota,Ohio,Oklahoma,Oregon,Pennsylvania,Rhode Island,South Carolina,South Dakota,Tennessee,Texas,Utah,Vermont,Virginia,Washington,West Virginia,Wisconsin,Wyoming&quot;;
myQuery = QueryNew(&quot;stateName&quot;);
for(i=1;i LTE ListLen(stateList);i = i + 1) {
	queryAddRow(myQuery);
	querySetCell(myQuery,&quot;stateName&quot;,ListGetAt(stateList,i));
}
&lt;/cfscript&gt;
</code></pre>

<p>
Here is where you set the number of columns you want your data to be outputted in, you can adjust it very easily:
</p>

<pre><code class="language-markup">&lt;!--- adjust the number of columns to your needs ---&gt;
&lt;cfset columnCount = 4&gt;
</code></pre>

<p>
Finally the table output:
</p>

<pre><code class="language-markup">&lt;table border=&quot;1&quot;&gt;
&lt;tr&gt;
&lt;cfoutput query=&quot;myQuery&quot;&gt;
	&lt;td&gt;#stateName#&lt;/td&gt;
	&lt;cfif currentRow MOD columnCount EQ false AND currentRow NEQ recordCount&gt;
		&lt;/tr&gt;
		&lt;tr&gt;
	&lt;cfelseif currentRow MOD columnCount EQ false AND currentRow EQ recordCount&gt;
		&lt;/tr&gt;
	&lt;cfelseif currentRow MOD columnCount AND currentRow EQ recordCount&gt;
		&lt;cfset columnsLeft = (Ceiling(currentRow/columnCount)*columnCount) - currentRow&gt;
		#RepeatString(&quot;&lt;td&gt;&amp;nbsp;&lt;/td&gt;&quot;,columnsLeft)#
		&lt;/tr&gt;
	&lt;/cfif&gt;
&lt;/cfoutput&gt;
&lt;/table&gt;
</code></pre>

<p>
Basically the main thing going on here is math, specifically, determining if we have completed a "row" based on our current query row and the number of columns we specified. Note at the end we "fill" the table with blank cells. This completes our table and will help it render properly.		
</p>



