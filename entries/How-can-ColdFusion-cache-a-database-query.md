---
title: How can ColdFusion cache a database query?
published: March 8, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Caching
permalink: How-can-ColdFusion-cache-a-database-query.html
entryid: 71
---

<h3>How can ColdFusion cache a database query?</h3>

<p>
ColdFusion query caching is used to keep frequently accessed query results in memory rather then having to pull the results from the database again and again.
</p>

<p>
Cached queries work by using either the cachedAfter or the cachedWithin attributes of the &lt;cfquery&gt; tag.  In order to use either form of cached queries, query caching must be enables in the ColdFusion administrator.
</p>

<p>
The cachedAfter attribute is used to cache a query after a certain date has passed by passing in a specific date.
</p>

<pre><code class="language-markup">&lt;cfquery 
  name=&quot;qAfterTest&quot; 
  datasource=&quot;myDs&quot; 
  cachedAfter=&quot;10-10-2005&quot;&gt;
  select name
  from recipes
&lt;/cfquery&gt;
</code></pre>

<p>
The cachedWithin attribute is used to cache a query within a specified date/time range by passing in a valid data/time range.
</p>

<pre><code class="language-markup">&lt;cfquery 
  name=&quot;qWithinTest&quot; 
  datasource=&quot;myDs&quot; 
  cachedWithin=&quot;#createTimeSpan(0, 5, 0, 0)#&quot;&gt;
  select name
  from recipes
&lt;/cfquery&gt;
</code></pre>

<p>
It is important to note that cached queries are identified by the exact SQL code and &lt;cfquery&gt; tag attributes (datasource, name, etc.) used in the &lt;cfquery&gt; tag call that created them.  The only exceptions to this rule are the cachedAfter and the cachedWithin attributes themselves can be altered without effecting the identification of a cached query.
</p>



