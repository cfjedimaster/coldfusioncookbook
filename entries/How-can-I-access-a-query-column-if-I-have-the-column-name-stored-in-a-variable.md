---
title: How can I access a query column if I have the column name stored in a variable?
published: March 23, 2006
author: Christoph Schmitz
authorwebsite: 
categories: Queries
permalink: How-can-I-access-a-query-column-if-I-have-the-column-name-stored-in-a-variable.html
entryid: 33
---

<h3>How can I access a query column if I have the column name stored in a variable?</h3>

<p>
Use structure notation to access the recordset:
</p>

<pre><code class="language-markup">&lt;cfset colName=&quot;lastname&quot;&gt;
&lt;cfoutput&gt;
   #myQuery[colName][1]#
&lt;/cfoutput&gt;
</code></pre>

<p>
Keep in mind that with this notation you need to provide a row index as well, even within a query loop:
</p>

<pre><code class="language-markup">&lt;cfset colName=&quot;lastname&quot;&gt;
&lt;cfoutput query=&quot;myQuery&quot;&gt;
   #myQuery[colName][myQuery.currentrow]#&lt;br /&gt;
&lt;/cfoutput&gt;
</code></pre>



