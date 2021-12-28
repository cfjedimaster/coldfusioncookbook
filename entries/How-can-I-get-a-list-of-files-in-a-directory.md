---
title: How can I get a list of files in a directory?
published: February 28, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: File and Directory Access
permalink: entries/How-can-I-get-a-list-of-files-in-a-directory.html
entryid: 66
---

<h3>How can I get a list of files in a directory?</h3>

<p>
Use the &lt;cfdirectory&gt; tag.   Don't forget to use the recurse="true" attribute if you want the list to include the contents of subdirectories.
</p>

<pre><code class="language-markup">&lt;cfdirectory action=&quot;list&quot; 
directory=&quot;#getDirectoryFromPath(getTemplatePath())#&quot; 
name=&quot;currentDir&quot;&gt;
&lt;cfoutput query=&quot;currentDir&quot;&gt;
 #name#&lt;br&gt;
&lt;/cfoutput&gt;
</code></pre>



