---
title: What's the most effective way to clean text pasted from Microsoft Word?
published: March 21, 2006
author: Raymond Camden
authorwebsite: http://www.raymondcamden.com
categories: Strings
permalink: Whats-the-most-effective-way-to-clean-text-pasted-from-Microsoft-Word.html
entryid: 74
---

<h3>What's the most effective way to clean text pasted from Microsoft Word?</h3>

<p>
A common problem in forms arise when content is pasted from Microsoft Word. Characters sometimes become corrupted and do not store themselves well in the backend. One way to correct it is with a simple UDF (user-defined function) called  <a href="http://www.cflib.org/udf.cfm?id=725&enable=1">deMoronize</a>. This UDF will clean up the broken content and replace it with safer characters. 
</p>

<pre><code class="language-markup">&lt;!--- udf.cfm contains deMoronize, downloaded from cflib.org ---&gt;
&lt;cfinclude template=&quot;udf.cfm&quot;&gt;
&lt;cfset cleanText = deMoronize(form.text)&gt;
</code></pre>



