---
title: How do I avoid forgetting to declare local variables?
published: November 13, 2006
author: Dale Fraser
authorwebsite: http://dale.fraser.id.au/
categories: Components
permalink: How-do-I-avoid-forgetting-to-declare-local-variables.html
entryid: 118
---

<h3>How do I avoid forgetting to declare local variables?</h3>

<p>
It is critical when writing component methods and UDFs that every variable defined in the code is properly var scoped. If you forget this step - the variable will exist outside of the method and could potentially lead to some very hard to debug problems. One way to get around accidentally forgetting to var scope is to create a structure for all the variables. Consider this code block:
</p>

<pre><code class="language-markup">&lt;cfset var local = structNew() /&gt;
&lt;cfset local.name = &quot;Mickey Mouse&quot; /&gt;
&lt;cfloop index=&quot;local.i&quot; from=&quot;1&quot; to=&quot;10&quot;&gt;
&lt;cfoutput&gt;#local.i#: #local.name#&lt;br&gt;&lt;/cfoutput&gt;
&lt;/cfloop&gt;
</code></pre>

<p>
In this example, the structure local was created to store all local variables. Notice that the rest of the code uses this structure for any variables created.
</p>



