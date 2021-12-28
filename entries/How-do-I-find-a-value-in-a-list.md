---
title: How do I find a value in a list?
published: January 18, 2006
author: Raymond Camden
authorwebsite: http://www.raymondcamden.com
categories: Data Structures
permalink: entries/How-do-I-find-a-value-in-a-list.html
entryid: 34
---

<h3>How do I find a value in a list?</h3>

<p>
ColdFusion provides four functions that can help you find a value in a list. The first two are related: listFind() and listFindNoCase(). Both functions will search a list for a value. The first is case sensitive while the second will ignore case.
</p>

<pre><code class="language-markup">&lt;cfset list = &quot;Raymond,Jacob,Lynn,Noah,Jeanne&quot;&gt;
&lt;cfif listFindNoCase(list, &quot;jacob&quot;)&gt;
	Jacob is in the list.
&lt;/cfif&gt;
</code></pre>

<p>
The above code snippet will find a match on the word "jacob" even though the case does not match.
</p>

<p>
The next two related functions are listContains() and listContainsNoCase(). These functions allow for partial matches. So for example:
</p>

<pre><code class="language-markup">&lt;cfset list = &quot;Raymond,Jacob,Lynn,Noah,Jeanne&quot;&gt;
&lt;cfif listContainsNoCase(list, &quot;Ray&quot;)&gt;
	There is a Ray in the list.
&lt;/cfif&gt;
</code></pre>

<p>
This code snippet will display a result since "Ray" partially matches "Raymond" in the list. In general you will probably never use listContains() since you almost always want to match an entire list item, not a partial one.
</p>



