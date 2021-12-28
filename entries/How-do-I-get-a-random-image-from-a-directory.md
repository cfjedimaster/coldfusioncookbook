---
title: How do I get a random image from a directory?
published: July 10, 2008
author: John Whish
authorwebsite: http://www.aliaspooryorik.com/blog/
categories: Images
permalink: entries/How-do-I-get-a-random-image-from-a-directory.html
entryid: 145
---

<h3>How do I get a random image from a directory?</h3>

<p>
Use the RandRange function to pick a random image file form your directory. 
</p>

<pre><code class="language-markup">&lt;cfset imagepath = &quot;images/gallery/&quot; /&gt;
&lt;cfdirectory directory=&quot;#ExpandPath(imagepath)#&quot;
 filter=&quot;*.jpg|*.gif&quot;
 name=&quot;qryImages&quot;
 action=&quot;list&quot; /&gt;
&lt;img src=&quot;#imagepath##qryImages.name[RandRange(1, qryImages.RecordCount)]#&quot; /&gt;
</code></pre>



