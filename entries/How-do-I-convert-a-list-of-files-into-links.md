---
title: How do I convert a list of files into links?
published: January 21, 2007
author: Raymond Camden
authorwebsite: http://www.raymondcamden.com
categories: File and Directory Access
permalink: How-do-I-convert-a-list-of-files-into-links.html
entryid: 126
---

<h3>How do I convert a list of files into links?</h3>

<p>
ColdFusion makes it easy to dynamically list out the files in a folder. Converting this list of files into a list of hyperlinks is pretty simple. This will only work if the folder is under your web root (or available as a virtual folder on your web server). First decide on the folder you will list:
</p>

<pre><code class="language-markup">&lt;cfdirectory directory=&quot;c:\web\pdfs&quot; name=&quot;pdffiles&quot;&gt;
</code></pre>

<p>
Next you need to loop over the files and output them. The link will be based on the folder and how it relates to your web server's document root. In the example above the folder was c:\web\pdfs. The pdfs folder is directly under web root. The links then would simply link to the /pdfs folder with the name being dynamic:
</p>

<pre><code class="language-markup">&lt;cfoutput query=&quot;pdffiles&quot;&gt;
&lt;a href=&quot;/pdfs/#name#&quot;&gt;#name#&lt;/a&gt;&lt;br&gt;
&lt;/cfoutput&gt;
</code></pre>



