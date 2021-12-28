---
title: How do I create an array with more than three dimensions?
published: May 15, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Data Structures
permalink: How-do-I-create-an-array-with-more-than-three-dimensions.html
entryid: 89
---

<h3>How do I create an array with more than three dimensions?</h3>

<p>
ColdFusion lets you directly create arrays with up to three dimensions using the arrayNew() function. If you want to create a larger array, you can use multiple arrayNew() statements.
</p>

<pre><code class="language-markup">&lt;cfset foo = arrayNew(3)&gt;
&lt;cfset foo[1][1][1] = arrayNew(3)&gt;
&lt;cfset foo[1][1][1][1][1][1] = &quot;this is a test&quot;&gt;
&lt;cfoutput&gt;#foo[1][1][1][1][1][1]#&lt;/cfoutput&gt;
</code></pre>



