---
title: How do I get the values from one column in a query?
published: March 23, 2006
author: Raymond Camden
authorwebsite: http://www.raymondcamden.com
categories: Queries
permalink: entries/How-do-I-get-the-values-from-one-column-in-a-query.html
entryid: 76
---

<h3>How do I get the values from one column in a query?</h3>

<p>
If you need to retrieve the values from one column in a query, ColdFusion provides the valueList() function. It will return every value from that column. Here is an example:
</p>

<pre><code class="language-markup">&lt;cfquery name=&quot;getPeople&quot; datasource=&quot;people&quot;&gt;
select name, age, rank
from people
&lt;/cfquery&gt;
&lt;cfset allNames = valueList(getPeople.name)&gt;
</code></pre>

<p>
Note that valueList does not take a string, but the actual query and column variable. 
</p>



