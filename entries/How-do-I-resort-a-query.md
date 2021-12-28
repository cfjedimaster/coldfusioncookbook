---
title: How do I re-sort a query?
published: March 23, 2006
author: Raymond Camden
authorwebsite: http://www.raymondcamden.com
categories: Queries
permalink: How-do-I-resort-a-query.html
entryid: 75
---

<h3>How do I re-sort a query?</h3>

<p>
If you have a database query that is not sorted, or is sorted by the wrong column, you may have a need to re-sort the query by a new column. ColdFusion's query of query functionality makes this simple. The following code sample shows an example:
</p>

<pre><code class="language-markup">&lt;cfquery name=&quot;original&quot; datasource=&quot;foo&quot;&gt;
select name, age, rank
from people
order by age asc
&lt;/cfquery&gt;
&lt;!--- Resort by name ---&gt;
&lt;cfquery name=&quot;newQuery&quot; dbtype=&quot;query&quot;&gt;
select name, age, rank
from original
order by name asc
&lt;/cfquery&gt;
</code></pre>

<p>
When using query of queries, notice that we do not provide a datasource, but rather we tell ColdFusion that the dbtype is query. Also note how the from portion of the sql refers to the variable (original) that has the original query.
</p>



