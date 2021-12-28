---
title: How can an Application.cfc's extend to other Application.cfc's?
published: October 19, 2006
author: Sean Corfield
authorwebsite: http://corfield.org/
categories: Application Management
permalink: How-can-an-Applicationcfcs-extend-to-other-Applicationcfcs.html
entryid: 116
---

<h3>How can an Application.cfc's extend to other Application.cfc's?</h3>

<p>
One of the cool things you can do with Application.cfc is to extend it in subdirectories to override behavior for parts of your application. This <a href = "http://www.adobe.com/cfusion/knowledgebase/index.cfm?id=9ce734f4" target="nWin"> Tech Note tells you how.</a> 
</p>

<p>
<hr>
</p>

<p>
Update: there is a way to extend the root Application.cfc without using a mapping. In your root directory, alongside your root Application.cfc, create ProxyApplication.cfc that contains just these two lines: 
</p>

<pre><code class="language-markup">&lt;cfcomponent extends=&quot;Application&quot;&gt;
&lt;/cfcomponent&gt;
</code></pre>

<p>
Now, in your subdirectory's Application.cfc you simply extend ProxyApplication (which CFMX will find in your root directory). It doesn't need mappings so it should help people on shared hosts, as well as keeping your server configuration leaner. 
</p>

<p>
Taken from blog post: <a href="http://corfield.org/entry/Extending_Applicationcfc" target="nWin">http://corfield.org/entry/Extending_Applicationcfc</a>
</p>



