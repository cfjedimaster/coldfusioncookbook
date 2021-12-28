---
title: How do I restart an application in ColdFusion?
published: September 15, 2006
author: Raymond Camden
authorwebsite: http://www.raymondcamden.com
categories: Application Management
permalink: How-do-I-restart-an-application-in-ColdFusion.html
entryid: 111
---

<h3>How do I restart an application in ColdFusion?</h3>

<p>
There are a few answers to this question. ColdFusion will automatically run the onApplicationStart method the first time your application is accessed. You can run the method manually by inserting some code. The following code could be added to your onRequestStart method to allow for a URL variable to re-init the application.
</p>

<pre><code class="language-markup">&lt;cfif structKeyExists(url, &quot;reinit&quot;)&gt;
    &lt;cfset onApplicationStart()&gt;
&lt;/cfif&gt;
</code></pre>

<p>
It is important to note though that this will <b>not</b> call the method in a single threaded manner. If that doesn't matter, then this provides a simple solution. 
</p>

<p>
Another way to do this would be to set an application timeout of 0 seconds:
</p>

<pre><code class="language-markup">&lt;cfset this.applicationtimeout = createTimeSpan(0,0,0,0)&gt;
</code></pre>

<p>
Hit your application one more time and it will restart. You would then want to reset the timeout back to a good value.
</p>

<p>
However - in both cases, the active sessions will not be reset. 
</p>



