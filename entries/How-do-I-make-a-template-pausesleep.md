---
title: How do I make a template pause(sleep)?
published: February 22, 2006
author: Steve Gustafson
authorwebsite: http://blog.geopoly.com/
categories: Miscellaneous
permalink: entries/How-do-I-make-a-template-pausesleep.html
entryid: 61
---

<h3>How do I make a template pause(sleep)?</h3>

<p>
There is no native sleep or pause function in CFML. But with CFMX you can easily leverage Java and take advantage of Java's sleep function. The following code snippet will  sleep for 1,000 milliseconds (one second) between calls to getTickCount().
</p>

<pre><code class="language-markup">&lt;cfoutput&gt;
Before Sleep: #getTickCount()#&lt;br&gt;
&lt;cfscript&gt;
  go_to = createObject(&quot;java&quot;, &quot;java.lang.Thread&quot;);
  go_to.sleep(1000); //sleep time in milliseconds
&lt;/cfscript&gt;
After Sleep: #getTickCount()#
&lt;/cfoutput&gt;
</code></pre>



