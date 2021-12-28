---
title: How do you dynamically set a variable and its value?
published: March 2, 2006
author: Martin Thorpe
authorwebsite: http://www.nonstoploop.co.uk
categories: Data Structures
permalink: How-do-you-dynamically-set-a-variable-and-its-value.html
entryid: 67
---

<h3>How do you dynamically set a variable and its value?</h3>

<p>
You need to set a value to a variable but the name of the variable is also to be set dynamically, for instance the variable name and variable value maybe stored in the database. This can be done in ColdFusion multiple ways. The first, and probably preferred way, is to use structure notation:
</p>

<pre><code class="language-markup">&lt;cfset varname = &quot;name&quot;&gt;
&lt;cfset value = &quot;Jacob&quot;&gt;
&lt;cfset variables[varname] = value&gt;
</code></pre>

<p>
This code simply treats the local variables scope as a structure. The next way lets ColdFusion evaluate the left hand side of an expression to determine the variable name:
</p>

<pre><code class="language-markup">&lt;cfset varname = &quot;name&quot;&gt;
&lt;cfset value = &quot;Jacob&quot;&gt;
&lt;cfset &quot;#varname#&quot; = value&gt;
</code></pre>

<p>
Lastly, you can use the setVariable() function to create a variable:
</p>

<pre><code class="language-markup">&lt;cfset varname = &quot;name&quot;&gt;
&lt;cfset value = &quot;Jacob&quot;&gt;
&lt;cfset setVariable(varname, value)&gt;
</code></pre>



