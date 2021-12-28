---
title: How do I sort a single dimension array?
published: May 8, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Data Structures
permalink: How-do-I-sort-a-single-dimension-array.html
entryid: 86
---

<h3>How do I sort a single dimension array?</h3>

<p>
Use the built in ColdFusion arraySort() function.
</p>

<pre><code class="language-markup">&lt;cfset arr = arrayNew(1)&gt;
&lt;cfset arr[1] = &quot;beta&quot;&gt;
&lt;cfset arr[2] = &quot;bar&quot;&gt;
&lt;cfset arr[3] = &quot;foo&quot;&gt;
&lt;cfset arr[4] = &quot;alpha&quot;&gt;
&lt;!--- sort array ascending alphabetically ---&gt;
&lt;cfset isSuccessful  = ArraySort(arr, &quot;textnocase&quot;, &quot;asc&quot;)&gt;
&lt;cfdump var=&quot;#arr#&quot;&gt;
</code></pre>



