---
title: How do I alternate row colors in a table?
published: January 9, 2006
author: Cory Toth
authorwebsite: 
categories: Display and Layout
permalink: How-do-I-alternate-row-colors-in-a-table.html
entryid: 20
---

<h3>How do I alternate row colors in a table?</h3>

<p>
Two functions are used in one expression which allow for a clean implementation of alternating row colors.  IIf() takes three parameters (condition,expression1,expression2) and evaluates either the first expression or the second expression depending if the current row is even or odd. DE() takes on parameter which is an expression and delays the evaluation of the expressions.
</p>

<p>
The following example uses CSS to style the alternating rows of content:
</p>

<pre><code class="language-markup">&lt;cfquery name=&quot;myTest&quot; datasource=&quot;testDatasource&quot;&gt;
	SELECT *
	FROM table
&lt;/cfquery&gt;
&lt;style type=&quot;text/css&quot;&gt;
   tr.lightrow td {
      background-color: #FFFFFF;
   }
   tr.darkrow td {
      background-color: #EFEFEF;
   }
&lt;/style&gt;
&lt;table&gt;
&lt;cfoutput query=&quot;myTest&quot;&gt;
	&lt;tr class=&quot;#iif(currentrow MOD 2,DE('lightrow'),DE('darkrow'))#&quot;&gt;
		&lt;td&gt;1&lt;/td&gt;
		&lt;td&gt;myField&lt;/td&gt;
	&lt;/tr&gt;
&lt;/cfoutput&gt;
&lt;/table&gt;
</code></pre>



