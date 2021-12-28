---
title: How can I cache a ColdFusion page on the ColdFusion server?
published: March 2, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Caching
permalink: entries/How-can-I-cache-a-ColdFusion-page-on-the-ColdFusion-server.html
entryid: 65
---

<h3>How can I cache a ColdFusion page on the ColdFusion server?</h3>

<p>
The &lt;cfcache&gt; tag also gives you the ability to cache pages on the ColdFusion server by setting the action attribute equal to "serverCache".  This type of caching is perfect for non-personalized pages that have high usage.
</p>

<p>
Note: 
</p>

<p>
1) The &lt;cfcache&gt; tag should be placed at the top your ColdFusion template. 
</p>

<p>
2) The &lt;cfcache&gt; tag treats each distinct URL combination as its own page.  So the output of foo.cfm?key=1 and foo.cfm?key=10 would be cached as separate files.
</p>

<p>
3) ServerCache caching should not be used for caching client specific pages.
</p>

<p>
A code sample would look as follows:
</p>

<pre><code class="language-markup">&lt;cfcache 
action = &quot;serverCache&quot;
directory = &quot;C:/temp/cache&quot;
timespan = &quot;#createTimeSpan(0,1,0,0)#&quot;&gt;
</code></pre>



