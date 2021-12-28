---
title: How can I access/call functions in .Net classes?
published: December 19, 2007
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Miscellaneous
permalink: How-can-I-accesscall-functions-in-Net-classes.html
entryid: 138
---

<h3>How can I access/call functions in .Net classes?</h3>

<p>
As per the ColdFusion documentation, the &lt;cfobject&gt; tag can be used to access and use .Net classes inside of your CFML code.
</p>

<pre><code class="language-markup">&lt;cfobject
   type = &quot;.NET&quot;
   name = &quot;myInstance&quot;
   class = &quot;myDotNetClass&quot;
   assembly = &quot;C:/Net/Assemblies/dotNetClass.dll&quot;&gt; 
&lt;!--- Call a method---&gt;
&lt;cfset myVar = myInstance.myDotNetClass(5)&gt; 
</code></pre>



