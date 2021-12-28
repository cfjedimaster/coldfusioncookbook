---
title: How do you loop over the values of an array?
published: January 12, 2006
author: Raymond Camden
authorwebsite: http://www.raymondcamden.com
categories: Data Structures
permalink: entries/How-do-you-loop-over-the-values-of-an-array.html
entryid: 26
---

<h3>How do you loop over the values of an array?</h3>

<p>
An array is a collection of data indexed by numbers. So for an example, an array of values may have data at position 1, 2, and 3. In order to loop over the items in an array, the arrayLen() function should be used:
</p>

<pre><code class="language-markup">&lt;!--- Arr is an array of values. ---&gt;
&lt;cfloop index=&quot;x&quot; from=&quot;1&quot; to=&quot;#arrayLen(arr)#&quot;&gt;
    &lt;cfoutput&gt;#arr[x]#&lt;/cfoutput&gt;
&lt;/cfloop&gt;
</code></pre>

<p>
Generally this is safe code to write. However, it is possible that an array may have a missing position. Consider this array:
</p>

<pre><code class="language-markup">&lt;cfset arr = arrayNew(1)&gt;
&lt;cfset arr[1] = &quot;Jacob&quot;&gt;
&lt;cfset arr[3] = &quot;Lynn&quot;&gt;
&lt;cfset arr[5] = &quot;Noah&quot;&gt;
</code></pre>

<p>
Even though there is clearly only three items in the array, ColdFusion's arrayLen() function will return five. 
</p>



