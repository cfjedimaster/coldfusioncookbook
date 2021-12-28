---
title: How do you return the value of a dynamic structure key?
published: January 25, 2006
author: Ben Forta
authorwebsite: http://www.forta.com
categories: Data Structures
permalink: entries/How-do-you-return-the-value-of-a-dynamic-structure-key.html
entryid: 41
---

<h3>How do you return the value of a dynamic structure key?</h3>

<p>
If you need to return the value of a structure key where the key is dynamic, you must use bracket notation. Assume myStruct is a structure and you want to get the value of the key stored in a variable, keyname.
</p>

<pre><code class="language-markup">&lt;cfset keyname = &quot;foo&quot;&gt;
&lt;cfset value = myStruct[keyname]&gt;
</code></pre>

<p>
If the value of mystruct.foo was "Jacob", the variable value will be "Jacob."
</p>

<p>
Bracket notation should also be used when key names have a space or other invalid character. If myStruct have a key called "Raymond Camden", you would not be able to do this:
</p>

<pre><code class="language-markup">&lt;cfoutput&gt;
#myStruct.raymond camden#
&lt;/cfoutput&gt;
</code></pre>

<p>
Instead, bracket notation must be used:
</p>

<pre><code class="language-markup">&lt;cfoutput&gt;
#myStruct[&quot;raymond camden&quot;]#
&lt;/cfoutput&gt;
</code></pre>



