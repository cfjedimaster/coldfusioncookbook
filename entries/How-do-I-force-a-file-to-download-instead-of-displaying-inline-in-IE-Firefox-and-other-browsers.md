---
title: How do I force a file to download instead of displaying inline in IE, Firefox and other browsers?
published: January 24, 2006
author: Emmet McGovern
authorwebsite: 
categories: Display and Layout
permalink: entries/How-do-I-force-a-file-to-download-instead-of-displaying-inline-in-IE-Firefox-and-other-browsers.html
entryid: 39
---

<h3>How do I force a file to download instead of displaying inline in IE, Firefox and other browsers?</h3>

<p>
You can force a file to download by using a combination of the &lt;cfheader&gt; and &lt;cfcontent&gt; tags. We'll use a jpg for this example.  It will work for any file type however. 
</p>

<pre><code class="language-markup">&lt;cfheader name=&quot;content-disposition&quot; value=&quot;attachment;filename=example.jpg&quot;&gt;
&lt;cfcontent type=&quot;image/jpeg&quot; file=&quot;C:\files\example.jpg&quot;&gt;
</code></pre>

<p>
Note the use of filename in the &lt;cfheader&gt; tag. This allows you to give another name to the file being downloaded.
</p>



