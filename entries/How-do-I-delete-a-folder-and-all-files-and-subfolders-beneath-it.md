---
title: How do I delete a folder and all files and subfolders beneath it?
published: April 6, 2006
author: Raymond Camden
authorwebsite: http://www.raymondcamden.com
categories: File and Directory Access
permalink: How-do-I-delete-a-folder-and-all-files-and-subfolders-beneath-it.html
entryid: 81
---

<h3>How do I delete a folder and all files and subfolders beneath it?</h3>

<p>
The <cfdirectory> tag has a delete action, but this will throw an error if there is anything in the directory. To remove a directory and everything inside it, simply use the recurse attribute:
</p>

<pre><code class="language-markup">&lt;cfset dir = &quot;c:\temp&quot;&gt;
&lt;cfdirectory action=&quot;delete&quot; directory=&quot;#dir#&quot; recurse=&quot;true&quot;&gt;
</code></pre>



