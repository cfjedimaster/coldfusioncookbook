---
title: How do I output a query result set grouped by a specific field?
published: June 13, 2006
author: Ben Wakeman
authorwebsite: http://www.d-p.com
categories: Display and Layout
permalink: How-do-I-output-a-query-result-set-grouped-by-a-specific-field.html
entryid: 100
---

<h3>How do I output a query result set grouped by a specific field?</h3>

<p>
To generate this type of display, there are two key things to note in  the code sample below. First, the field you wish to group by must appear  in the ORDER BY clause of your query and this same field must be used as  the "group" attribute for the first &lt;cfoutput&gt; tag in addition to the  "query" attribute which tells the tag to loop.
</p>

<p>
Sample Code:
</p>

<pre><code class="language-markup">&lt;cfquery datasource=&quot;bluedragon&quot; name=&quot;q_getemployees&quot;&gt;
SELECT  employee.employeefirstname, employee.employeelastname,  department.departmentname
FROM employee INNER JOIN department ON employee.departmentid = 
department.departmentid
ORDER BY department.departmentname
&lt;/cfquery&gt;
&lt;cfoutput query=&quot;q_getemployees&quot; group=&quot;departmentname&quot;&gt;
 &lt;h1&gt;#q_getemployees.departmentname#&lt;/h1&gt;
  &lt;cfoutput&gt;
  #q_getemployees.employeefirstname# #q_getemployees.employeelastname#&lt;br /&gt;
  &lt;/cfoutput&gt;
&lt;/cfoutput&gt;
</code></pre>

<p>
Output:
</p>

<pre><code class="language-markup">&lt;h1&gt;SAMPLE RESULT:&lt;/h1&gt;
&lt;h2&gt;Development&lt;/h2&gt;
	Darin Kohles&lt;br /&gt;
	Eric Jones&lt;br /&gt;
	Colleen Cox&lt;br /&gt;
	
&lt;h2&gt;Management&lt;/h2&gt;
	Steve Nation&lt;br /&gt;
	Ben Wakeman&lt;br /&gt;
&lt;h2&gt;Sales&lt;/h2&gt;
	David Taylor-Klaus&lt;br /&gt;
	Beth Cooper&lt;br /&gt;
</code></pre>



