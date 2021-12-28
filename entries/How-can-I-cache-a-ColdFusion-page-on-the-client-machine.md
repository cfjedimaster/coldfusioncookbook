---
title: How can I cache a ColdFusion page on the client machine?
published: February 22, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Caching
permalink: entries/How-can-I-cache-a-ColdFusion-page-on-the-client-machine.html
entryid: 63
---

<h3>How can I cache a ColdFusion page on the client machine?</h3>

<p>
Setting the action attribute of the &lt;cfcache&gt; tag equal to "clientCache" gives you programmatic control over whether a client browser should reload a ColdFusion page, or if it can use its local cached copy of the ColdFusion page. 
</p>

<p>
Because the page is being stored on the client side, you can cache user specific versions of a dynamic web page without fear of client data being shown to the wrong client.  This is a great technique to help speed up user specific pages that either have heavy access patterns, or take a while to display.  It is also nice because client-cached files do not take up resources on the ColdFusion server.
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
A code sample for using the &lt;cfcache&gt; tag to cache a ColdFusion page on the client machine would look as follows:
</p>

<pre><code class="language-markup">&lt;cfcache 
action = &quot;clientCache&quot;
directory = &quot;C:/temp/cache&quot;
timespan = &quot;#createTimeSpan(0,0,1,0)#&quot;&gt;
</code></pre>



