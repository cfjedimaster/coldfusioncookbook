---
title: How do I get a listing of just the files or child directories in a directory?
published: September 8, 2006
author: Jacob Munson
authorwebsite: http://www.techfeed.net/blog/
categories: File and Directory Access
permalink: entries/How-do-I-get-a-listing-of-just-the-files-or-child-directories-in-a-directory.html
entryid: 110
---

<h3>How do I get a listing of just the files or child directories in a directory?</h3>

<p>
You can use the cfdirectory tag with the list option, and then there are 
</p>

<p>
two ways to only display the directories.  The first option is to use 
</p>

<p>
&lt;cfif&gt; to filter on 'type':
</p>

<pre><code class="language-markup">&lt;cfdirectory directory=&quot;C:/Apache2/htdocs&quot; action=&quot;list&quot; name=&quot;dirResults&quot;&gt;
&lt;cfoutput query=&quot;dirResults&quot;&gt;
	&lt;cfif dirResults.type eq &quot;dir&quot;&gt;#dirResults.name#&lt;br /&gt;&lt;/cfif&gt;
&lt;/cfoutput&gt;
</code></pre>

<p>
The second option is to do a query of queries to filter the results:
</p>

<pre><code class="language-markup">&lt;cfdirectory directory=&quot;C:/Apache2/htdocs&quot; action=&quot;list&quot; name=&quot;dirResults&quot;&gt;
&lt;cfquery name=&quot;dirFilter&quot; dbtype=&quot;query&quot;&gt;
	select name from dirResults
	where lower(type) = 'dir'
&lt;/cfquery&gt;
&lt;cfoutput query=&quot;dirFilter&quot;&gt;
	#name#&lt;br /&gt;
&lt;/cfoutput&gt;
</code></pre>



