---
title: How do I find the file extension for a file?
published: July 21, 2008
author: Stefan le Roux
authorwebsite: http://www.coldfury.us
categories: File and Directory Access
permalink: How-do-I-find-the-file-extension-for-a-file.html
entryid: 151
---

<h3>How do I find the file extension for a file?</h3>

<p>
Use the listLast() function.
</p>

<pre><code class="language-markup">&lt;cfset myExt = &quot;myDocument.pdf&quot;&gt;
&lt;cfset myExt = listLast(myExt,&quot;.&quot;)&gt;
&lt;cfoutput&gt;#myExt#&lt;/cfoutput&gt;
</code></pre>



