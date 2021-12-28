---
title: How do I get information about a file?
published: July 18, 2008
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: File and Directory Access
permalink: How-do-I-get-information-about-a-file.html
entryid: 149
---

<h3>How do I get information about a file?</h3>

<p>
Use the getFileInfo() function.  
</p>

<p>
GetFileInfo returns a structure with the following information: filename, path, parent directory, type, size, when the file was most recently modified, whether the file has read permission, write permission, and is hidden.
</p>

<pre><code class="language-markup">&lt;cfdump var=&quot;#getFileInfo(&quot;/myFile.doc&quot;)#&quot;&gt;
</code></pre>



