---
title: How can I automate cached queries to update at an exact time each day?
published: March 15, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Caching
permalink: How-can-I-automate-cached-queries-to-update-at-an-exact-time-each-day.html
entryid: 73
---

<h3>How can I automate cached queries to update at an exact time each day?</h3>

<p>
While ColdFusion gives you the ability to choose how long query data is cached, and even couple of options to clear a cached query by hand, you may still find a situation that requires more precise control over your cached query updates.
</p>

<p>
For example, say you have a query that generates a list of the newest recipes submitted to your recipe site.  Because this query is used so often, you choose to cache it.  However, you would like to update the cached query at exactly noon each day to reflect a daily cutoff for new recipe entries.  How could you do this?
</p>

<p>
The solution lies in using the scheduling engine of your choice (ColdFusion server has one built in) to run a ColdFusion template that will refresh your cached query.  
</p>

<p>
If you were using the following cached query in your pages:
</p>

<pre><code class="language-markup">&lt;cfquery 
  name=&quot;qWithinTest&quot; 
  datasource=&quot;myDs&quot; 
  cachedWithin=&quot;#createTimeSpan(1, 0, 0, 0)#&quot;&gt;
  select name
  from recipes
&lt;/cfquery&gt;
</code></pre>

<p>
You could create a template that flushes the query cache using the following code:
</p>

<pre><code class="language-markup">&lt;cfquery 
  name=&quot;qWithinTest&quot; 
  datasource=&quot;myDs&quot; 
  cachedwithin=&quot;#createTimeSpan(0, 0, 0, -1)#&quot;&gt;
  select name
  from recipes
&lt;/cfquery&gt;
</code></pre>

<p>
It is then a simple matter of using your scheduling engine to run this query flush template at noon each day.
</p>



