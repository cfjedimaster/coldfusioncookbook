---
title: How can I read a simple text file, processing each line of the file?
published: July 1, 2008
author: Hal Helms
authorwebsite: http://halhelms.com/
categories: File and Directory Access
permalink: How-can-I-read-a-simple-text-file-processing-each-line-of-the-file.html
entryid: 60
---

<h3>How can I read a simple text file, processing each line of the file?</h3>

<p>
ColdFusion makes it easy to read a file using the &lt;cfloop&gt; tag. By using the file attribute, you can tell &lt;cfloop&gt; to iterate over each line of a file. This sample reads in a text file and displays each line:
</p>

<pre><code class="language-markup">&lt;cfset myfile = expandPath(&quot;./dump.txt&quot;)&gt;
&lt;cfloop index=&quot;line&quot; file=&quot;#myfile#&quot;&gt;
	&lt;cfoutput&gt;
	The current line is #line# &lt;br /&gt;
	&lt;/cfoutput&gt;
&lt;/cfloop&gt;
</code></pre>



