---
title: How can I clear a client-side or server-side cache that was created by the <cfcache> tag?
published: March 7, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Caching
permalink: How-can-I-clear-a-clientside-or-serverside-cache-that-was-created-by-the-ltcfcachegt-tag.html
entryid: 70
---

<h3>How can I clear a client-side or server-side cache that was created by the &lt;cfcache&gt; tag?</h3>

<p>
The &lt;cfcache&gt; tag provides an easy way to clear the contents of a &lt;cfcache&gt; cached page before the cached page would time out on its own.  By using the action="flush" attribute, you can flush the contents of the cached page so that it can be recached with current data.  The simplest way to do this is to run the following code:
</p>

<pre><code class="language-markup">&lt;cfcache action = &quot;flush&quot;&gt;
</code></pre>

<p>
The above line of code would clear all cached files in the same directory as the template you called it from.  If you need more control over flushing a &lt;cfcache&gt; cached page, you can use the following optional attributes: directory and expireURL.
</p>

<p>
The directory attribute lets you specify the directory that contains the cached files you wish to clear. 
</p>

<p>
  
</p>

<p>
The expireURL attribute is a URL reference that you can use to choose what specific cache files will be deleted.  You can use an * character as a wildcard.  Some sample URL's would be "foo.cfm?Key=1"  or "foo.cfm?*".  The first sample would only delete the cached copy of foo.cfm with the URL parameter key = to 1, where as the second sample would delete the cached copy of any foo.cfm page with any URL parameters.
</p>



