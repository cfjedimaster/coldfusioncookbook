---
title: How do you determine if an array position exists?
published: January 12, 2006
author: Raymond Camden
authorwebsite: http://www.raymondcamden.com
categories: Data Structures
permalink: entries/How-do-you-determine-if-an-array-position-exists.html
entryid: 27
---

<h3>How do you determine if an array position exists?</h3>

<p>
ColdFusion does not have any built in function to determine if an array position is defined. The simplest way is to use ColdFusion's built-in exception handling. The following code will check for the second position in an array:
</p>

<pre><code class="language-markup">&lt;cfset arr = arrayNew(1)&gt;
&lt;cfset arr[1] = &quot;Jacob&quot;&gt;
&lt;cfset arr[3] = &quot;Lynn&quot;&gt;
&lt;cfset arr[5] = &quot;Noah&quot;&gt;
&lt;cftry&gt;
	&lt;cfset foo = arr[2]&gt;
	&lt;cfoutput&gt;Something exists at position 2.&lt;/cfoutput&gt;
	&lt;cfcatch&gt;
		&lt;cfoutput&gt;Something does NOT exist at position 2.&lt;/cfoutput&gt;
	&lt;/cfcatch&gt;
&lt;/cftry&gt;
</code></pre>

<p>
Another option is to use the arrayToList() function. In an array with empty positions, this will return a list with empty values. However, ColdFusion's list functions will not correctly tell you if a position is empty. 
</p>

<p>
For a simpler version of the code above, the user-defined function, <a href="http://www.cflib.org/udf.cfm/arraydefinedat">arrayDefinedAt()</a>, may be used. 
</p>



