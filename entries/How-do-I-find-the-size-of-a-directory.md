---
title: How do I find the size of a directory?
published: March 31, 2006
author: Jacob Munson
authorwebsite: http://www.techfeed.net/blog/
categories: File and Directory Access
permalink: How-do-I-find-the-size-of-a-directory.html
entryid: 79
---

<h3>How do I find the size of a directory?</h3>

<p>
Use the &lt;cfdirectory&gt; tag, and then do a query of queries on the results:
</p>

<pre><code class="language-markup">&lt;cfdirectory 
	directory=&quot;c:\cfusionmx&quot;
	action=&quot;list&quot;
	name=&quot;cfDir&quot;
	recurse=&quot;true&quot;&gt;
&lt;cfquery dbtype=&quot;query&quot; name=&quot;dirSize&quot;&gt;
	select sum(size) as size from cfDir
&lt;/cfquery&gt;
&lt;cfset sizeMb = dirSize.size/1000000&gt;
&lt;cfoutput&gt;#numberFormat(sizeMB,&quot;,.99&quot;)#&lt;/cfoutput&gt;
</code></pre>

<p>
In the example above, the result is modified to return a value in megabytes. Also note the use of recurse="true" in the &lt;cfdirectory&gt; tag. This will return all the files including those beneath the directory specified. If you only want the size of the files in the directory itself, change recurse to false.
</p>



