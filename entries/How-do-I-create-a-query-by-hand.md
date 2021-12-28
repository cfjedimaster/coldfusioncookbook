---
title: How do I create a query by hand?
published: August 14, 2008
author: Stefan le Roux
authorwebsite: http://www.coldfury.us
categories: Database / SQL
permalink: How-do-I-create-a-query-by-hand.html
entryid: 153
---

<h3>How do I create a query by hand?</h3>

<p>
Most (but not all) ColdFusion queries come straight from the database, but there are times when you need to work with a query without using a database. Whether for debugging or other purposes, it is sometimes useful to be able to create a query manually. To create a query, you use the queryNew() function. This takes two arguments. The first argument is required and is a list of column names. The second argument is option and is a corresponding list of data types for the columns. If you use this second argument, it helps ColdFusion work with the query better. If you do not specify the "Column Type", ColdFusion needs to figure what datatype it is, and that might impede it's performance.
</p>

<p>
Here is a simple of a query with four columns:
</p>

<pre><code class="language-markup">&lt;cfset newQuery = queryNew(&quot;Column_1, Column_2, Column_3, Column_4&quot;,&quot;Integer, VarChar, Decimal, Date&quot;)&gt;
&lt;cfloop index=&quot;i&quot; from=&quot;1&quot; to=&quot;10&quot;&gt;
	&lt;cfset queryAddRow(newQuery)&gt;
	&lt;cfset querySetCell(newQuery, &quot;Column_1&quot;, i)&gt;
    &lt;cfset querySetCell(newQuery, &quot;Column_2&quot;, &quot;Value_#i#&quot;)&gt;
    &lt;cfset querySetCell(newQuery, &quot;Column_3&quot;, #i#*10000.05555555)&gt;
    &lt;cfset querySetCell(newQuery, &quot;Column_4&quot;, &quot;#dateadd(&quot;d&quot;, i, now())#&quot;)&gt;   
&lt;/cfloop&gt;
&lt;cfdump var=&quot;#newQuery#&quot;&gt;
</code></pre>



