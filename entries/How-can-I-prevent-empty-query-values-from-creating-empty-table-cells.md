---
title: How can I prevent empty query values from creating empty table cells?
published: May 23, 2006
author: Raymond Camden
authorwebsite: http://www.raymondcamden.com
categories: Strings
permalink: entries/How-can-I-prevent-empty-query-values-from-creating-empty-table-cells.html
entryid: 93
---

<h3>How can I prevent empty query values from creating empty table cells?</h3>

<p>
If you place the contents of a ColdFusion query in an HTML table, any blank query value may show up as an empty cell with no borders in the table. This is not a bug in ColdFusion, but rather a result of how the browser renders the a cell that looks like this:
</p>

<pre><code class="language-markup">&lt;td&gt;&lt;/td&gt;
</code></pre>

<p>
To prevent this, you can check for an empty value and display a non-breaking space instead:
</p>

<pre><code class="language-markup">&lt;td&gt;
&lt;cfif theValue is &quot;&quot;&gt;&amp;nbsp;&lt;cfelse&gt;#theValue#&lt;/cfif&gt;
&lt;/td&gt;
</code></pre>



