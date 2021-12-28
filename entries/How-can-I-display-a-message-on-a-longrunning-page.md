---
title: How can I display a message on a long-running page?
published: February 23, 2006
author: Raymond Camden
authorwebsite: http://www.raymondcamden.com
categories: Display and Layout
permalink: How-can-I-display-a-message-on-a-longrunning-page.html
entryid: 64
---

<h3>How can I display a message on a long-running page?</h3>

<p>
By default, ColdFusion will not return any HTML until the entire page has rendered. For a long-running page, this may make the user think nothing is happening, resulting in the user hitting reload multiple times. 
</p>

<p>
ColdFusion provides a tag that will flush out the current data to the screen: &lt;cfflush&gt;. For example:
</p>

<pre><code class="language-markup">&lt;p&gt;
This is a slow page, please stand by...
&lt;/p&gt;
&lt;cfflush&gt;
&lt;cfloop index=&quot;x&quot; from=&quot;1&quot; to=&quot;999999&quot;&gt;
	&lt;cfset doNothing = x*2/3&gt;
&lt;/cfloop&gt;
&lt;p&gt;
I'm finally done.
&lt;/p&gt;
</code></pre>

<p>
In this example, the user will see the "please stand by" warning immediately. After the page has processed they will then see the final message. A few warnings about &lt;cfflush&gt;. When used - the following tags and functions may no longer be used: &lt;cfcontent&gt;, &lt;cfcookie&gt;, &lt;cfform&gt;, &lt;cfheader&gt;, &lt;cfhtmlhead&gt;, &lt;cflocation&gt;, and SetLocale(). Also, some browsers, like the wonderful Internet Explorer, will ignore your text unless you have "enough" text. If you see nothing in Internet Explorer, you can simply pad your output by adding: repeatString(" ", 100). This fools the browser into thinking enough text has been sent to render.
</p>



