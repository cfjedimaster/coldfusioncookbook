---
title: How can I convert ColdFusion variables into JavaScript variables?
published: March 23, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: JavaScript
permalink: entries/How-can-I-convert-ColdFusion-variables-into-JavaScript-variables.html
entryid: 77
---

<h3>How can I convert ColdFusion variables into JavaScript variables?</h3>

<p>
Use the toScript() function to create JavaScript variables from a ColdFusion variable. This function can convert ColdFusion strings, numbers, arrays, structures, and queries to JavaScript syntax that defines equivalent variables and values.
</p>

<pre><code class="language-markup">&lt;cfset thisString=&quot;hello world&quot;&gt;
&lt;script type=&quot;text/javascript&quot; language=&quot;JavaScript&quot;&gt;
   &lt;cfoutput&gt;
      var #toScript(thisString, &quot;jsVar&quot;)#;
   &lt;/cfoutput&gt;
&lt;/script&gt;
When ColdFusion runs this code, it sends the following to the client:
&lt;script type=&quot;text/javascript&quot; language=&quot;JavaScript&quot;&gt;
   var jsVar = &quot;hello world&quot;;
&lt;/script&gt;
</code></pre>



