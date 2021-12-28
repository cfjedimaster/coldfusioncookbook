---
title: How can I access/call functions in a C++ dll?
published: August 30, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Miscellaneous
permalink: entries/How-can-I-accesscall-functions-in-a-C-dll.html
entryid: 109
---

<h3>How can I access/call functions in a C++ dll?</h3>

<p>
As per the ColdFusion documentation, the &lt;cfobjec&gt; tag can be used to create and manipulate Component Object Model (COM) objects.
</p>

<pre><code class="language-markup">&lt;cfobject action = &quot;create&quot;
   type = &quot;COM&quot;
   class = &quot;foo.bar&quot;
   name = &quot;myObj&quot;&gt; 
&lt;!--- Call a method---&gt;
&lt;cfset myObj.Init()&gt;
</code></pre>



