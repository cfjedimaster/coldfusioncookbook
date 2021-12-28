---
title: How do I remove HTML from a string?
published: May 7, 2006
author: Raymond Camden
authorwebsite: http://www.raymondcamden.com
categories: Strings
permalink: How-do-I-remove-HTML-from-a-string.html
entryid: 85
---

<h3>How do I remove HTML from a string?</h3>

<p>
There are many applications that allow visitors to enter content that will then get displayed on screen. This can potentially lead to issues if the user enters HTML. The HTML may break the layout of your site, or even serve as a way for someone to steal information from other users on your site. In general, you almost always want to remove HTML from user input. ColdFusion provides a few ways to do that.
</p>

<p>
The simplest method is to use either htmlCodeFormat() or htmlEditFormat(). These two functions will find any HTML in a string and escape it. So if the user entered &lt;b&gt;TEXT&lt;/b&gt;, the &lt; and &gt; characters will be escaped. Normally htmlEditFormat() is used as htmlCodeFormat() automatically inserts &lt;pre&gt; tags around the string.
</p>

<p>
While this method will escape the HTML, you may prefer to remove it all together. Luckily this is also rather easy using ColdFusion's regular expression support. The following UDF (user-defined function) from CFLib will do just that:
</p>

<pre><code class="language-markup">&lt;cfscript&gt;
function stripHTML(str) {
	return REReplaceNoCase(str,&quot;&lt;[^&gt;]*&gt;&quot;,&quot;&quot;,&quot;ALL&quot;);
}
&lt;/cfscript&gt;
</code></pre>

<p>
So to remove the HTML from a form value, you could do this:
</p>

<pre><code class="language-markup">&lt;cfset cleanStr = stripHTML(form.input)&gt;
</code></pre>



