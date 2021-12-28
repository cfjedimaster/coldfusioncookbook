---
title: How do I sort a structure?
published: May 15, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Data Structures
permalink: How-do-I-sort-a-structure.html
entryid: 88
---

<h3>How do I sort a structure?</h3>

<p>
Use the built in ColdFusion structSort() function.
</p>

<pre><code class="language-markup">&lt;cfscript&gt;
foo = structNew();
StructInsert(foo, &quot;a&quot;, &quot;this&quot;);
StructInsert(foo, &quot;b&quot;, &quot;is&quot;);
StructInsert(foo, &quot;c&quot;, &quot;a&quot;);
StructInsert(foo, &quot;d&quot;, &quot;test&quot;); 
&lt;/cfscript&gt;
</code></pre>

<p>
StructSort() returns an array of top-level key names (strings).
</p>

<pre><code class="language-markup">&lt;cfoutput&gt;#arrayToList(structSort(foo))#&lt;/cfoutput&gt;
</code></pre>

<p>
You can also sort parent structures based on their child structures.  For example, the following example will sort all of the people in foo by their age:
</p>

<pre><code class="language-markup">&lt;cfset foo = structNew()&gt;
&lt;cfset foo.raymond = structNew()&gt;
&lt;cfset foo.raymond.age =9&gt;
&lt;cfset foo.raymond.lastname = &quot;Camden&quot;&gt;
&lt;cfset foo.jeremy = structNew()&gt;
&lt;cfset foo.jeremy.age =10&gt;
&lt;cfset foo.jeremy.lastname = &quot;Petersen&quot;&gt;
&lt;cfset foo.joe = structNew()&gt;
&lt;cfset foo.joe.age =12&gt;
&lt;cfset foo.joe.lastname = &quot;Test&quot;&gt;
&lt;cfoutput&gt;#arrayToList(structSort(foo, &quot;numeric&quot;, &quot;asc&quot;, &quot;age&quot;))#&lt;/cfoutput&gt;
</code></pre>



