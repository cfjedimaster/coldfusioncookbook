---
title: How do I process CF code contained in a string (eg. text field in DB)?
published: May 31, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Caching,Miscellaneous
permalink: entries/How-do-I-process-CF-code-contained-in-a-string-eg-text-field-in-DB.html
entryid: 94
---

<h3>How do I process CF code contained in a string (eg. text field in DB)?</h3>

<p>
Unfortunately CFMX 7 does not have a built-in feature to accomplish this task.  You can how ever pull this off with a few manual steps: 1) save the code to a temp file 2) &lt;cfinclude&gt; the temp file 3) Delete the temp file.  
</p>

<p>
Be advised, this is not a recommend best practice!  Why add dynamic file read writes if you can avoid it- this is a bad move for performance.  Also consider the possible security hole of someone inserting malicious code into your processing engine. In other words, use this recipe at your own risk.   
</p>

<pre><code class="language-markup">&lt;!--- get cfml code string from DB ---&gt;
&lt;cfquery 
datasource=&quot;foo&quot; 
name=&quot;mQuery&quot;&gt;
SELECT code 
FROM myCode
WHERE id = 1
&lt;/cfquery&gt;
&lt;cfset tempFile = getTempFile(&quot;C:\CFusionMX7\wwwroot\test&quot;, &quot;code&quot;)&gt;
&lt;!--- write file out ---&gt;
&lt;cffile action=&quot;write&quot;
file= &quot;#tempFile#&quot;
output=&quot;#mQuery.code#&quot;&gt;
&lt;!--- include file ---&gt;
&lt;cfinclude template=&quot;#GetFileFromPath(tempFile)#&quot;&gt;
&lt;!--- delete file ---&gt;
&lt;cffile action=&quot;delete&quot;
file=&quot;#tempFile#&quot;&gt;  
&lt;p&gt;This is after&lt;/p&gt;
</code></pre>



