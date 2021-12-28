---
title: How can ColdFusion generate an excel file?
published: July 28, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Miscellaneous
permalink: entries/How-can-ColdFusion-generate-an-excel-file.html
entryid: 107
---

<h3>How can ColdFusion generate an excel file?</h3>

<p>
Because recent Excel products support HTML table format, getting ColdFusion to generate and Excel file can be as simple as creating your HTML tables and then using the &lt;cfcontent&gt; tag to set the mime type of your newly generated Excel file.
</p>

<p>
The following code sample taken from the CF 7 documentation shows a sample of using &lt;cfheader&gt;  and &lt;cfcontent&gt;  to push a dynamic Excel file to the browser (prompt the user whether to save Excel the file or open it in a browser).
</p>

<pre><code class="language-markup">&lt;cfheader name=&quot;Content-Disposition&quot; value=&quot;inline; filename=acmesalesQ1.xls&quot;&gt;
&lt;cfcontent type=&quot;application/vnd.msexcel&quot;&gt;
&lt;table border=&quot;2&quot;&gt;
&lt;tr&gt;&lt;td&gt;Month&lt;/td&gt;&lt;td&gt;Quantity&lt;/td&gt;&lt;td&gt;$ Sales&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;January&lt;/td&gt;&lt;td&gt;80&lt;/td&gt;&lt;td &gt;$245&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;February&lt;/td&gt;&lt;td&gt;100&lt;/td&gt;&lt;td&gt;$699&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;March&lt;/td&gt;&lt;td&gt;230&lt;/td&gt;&lt;td &gt;$2036&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;Total&lt;/td&gt;&lt;td&gt;=Sum(B2..B4)&lt;/td&gt;&lt;td&gt;=Sum(C2..C4)&lt;/td&gt;&lt;/tr&gt;
&lt;/table&gt;
</code></pre>

<p>
	
</p>

<p>
Another option to consider is the Jakarta POI project: http://jakarta.apache.org/poi/.  As per the project home page: The POI project consists of APIs for manipulating various file formats based upon Microsoft's OLE 2 Compound Document format using pure Java. In short, you can read and write MS Excel files using Java.
</p>



