---
title: How do I work with logarithms?
published: January 23, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Numbers
permalink: How-do-I-work-with-logarithms.html
entryid: 38
---

<h3>How do I work with logarithms?</h3>

<p>
The log() function returns the natural logarithm of its single numeric parameter:
</p>

<pre><code class="language-markup">&lt;cfset testVar = log(100)&gt;
&lt;cfoutput&gt;#testVar#&lt;/cfoutput&gt;
4.60517018599
</code></pre>

<p>
The exp() function is the inverse of the log() function:
</p>

<pre><code class="language-markup">&lt;cfset testVar = exp(4.60517018599 )&gt;
&lt;cfoutput&gt;#testVar#&lt;/cfoutput&gt;
100
</code></pre>

<p>
The log10() function returns the logarithm of its single numeric parameter to base 10:
</p>

<pre><code class="language-markup">&lt;cfset testVar = log10(100)&gt;
&lt;cfoutput&gt;#testVar#&lt;/cfoutput&gt;
2
</code></pre>



