---
title: How can I cache a ColdFusion page on both the client machine and the ColdFusion server?
published: March 2, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Caching
permalink: How-can-I-cache-a-ColdFusion-page-on-both-the-client-machine-and-the-ColdFusion-server.html
entryid: 69
---

<h3>How can I cache a ColdFusion page on both the client machine and the ColdFusion server?</h3>

<p>
Use the &lt;cfcache&gt; tag with the action attribute set to either cache or optimal. Using the &lt;cfcache&gt; tag for combination caching uses a combination of both client-side and server-side caching.  In this model, first the client browser will be checked for a cached copy of the page, if this check fails, then the server will try to get the data from its own cache.  Combination caching optimizes ColdFusion server performance and is recomended over server-side only caching.
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
3) Combination caching should not be used for caching client specific pages.
</p>

<pre><code class="language-markup">&lt;cfcache 
action = &quot;cache&quot;
directory = &quot;C:/temp/cache&quot;
timespan = &quot;#createTimeSpan(0,1,0,0)#&quot;&gt;
</code></pre>



