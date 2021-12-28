---
title: How do I access one row in a query?
published: March 23, 2006
author: Christoph Schmitz
authorwebsite: 
categories: Queries
permalink: How-do-I-access-one-row-in-a-query.html
entryid: 32
---

<h3>How do I access one row in a query?</h3>

<p>
You can access elements of a query result set with array notation:
</p>

<pre><code class="language-markup">&lt;cfoutput&gt;
  #myQuery.columnName[5]#
&lt;/cfoutput&gt;
</code></pre>

<p>
This will give you the value of "columnName" in the 5th row of the record set. If you leave off the array notation, and are not within a query-based loop, than the result will be from the first row. 
</p>



