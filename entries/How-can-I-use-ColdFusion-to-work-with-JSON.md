---
title: How can I use ColdFusion to work with JSON?
published: July 1, 2008
author: Raymond Camden
authorwebsite: http://www.raymondcamden.com
categories: Strings,JavaScript
permalink: entries/How-can-I-use-ColdFusion-to-work-with-JSON.html
entryid: 140
---

<h3>How can I use ColdFusion to work with JSON?</h3>

<p>
JSON stands for JavaScript Object Notation. You can think of it as a way to represent data (and type of data) in a string. This makes the data easy to pass between the client side and the server side and is a favorite format for use with AJAX based applications.
</p>

<p>
ColdFusion adds three functions that work with JSON: serializeJSON(), deserializeJSON(), and isJSON(). Let's look first at serializeJSON. You can take any arbitrary ColdFusion data and translate it into JSON using the function:
</p>

<pre><code class="language-markup">&lt;cfset foo = arrayNew(1)&gt;
&lt;cfset foo[1] = &quot;Ray&quot;&gt;
&lt;cfset foo[2] = &quot;Camden&quot;&gt;
&lt;cfset s = structNew()&gt;
&lt;cfset s.age = 35&gt;
&lt;cfset s.arr = foo&gt;
&lt;cfset js = serializeJSON(s)&gt;
</code></pre>

<p>
This creates a JSON string that looks like so:
</p>

<p>
{"AGE":35.0,"ARR":["Ray","Camden"]} 
</p>

<p>
This could be passed to the client via AJAX. On the flip side, you can use deserializeJSON to translate a JSON string back into native ColdFusion data:
</p>

<pre><code class="language-markup">&lt;cfset orig = deserializeJSON(js)&gt;
</code></pre>

<p>
And to be extra careful, you can first check to see if the string is valid JSON:
</p>

<pre><code class="language-markup">&lt;cfif isJSON(js)&gt;
  &lt;cfset orig = deserializeJSON(js)&gt;
&lt;/cfif&gt;
</code></pre>



