---
title: You need to round a number to an integer value.
published: January 10, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Numbers
permalink: You-need-to-round-a-number-to-an-integer-value.html
entryid: 24
---

<h3>You need to round a number to an integer value.</h3>

<p>
ColdFusion comes with a number of built in functions to work with rounding whole numbers (integers):
</p>

<p>
The round() function rounds a number to the closest integer.  For example:
</p>

<pre><code class="language-markup">test1: &lt;cfoutput&gt;#round(99.5)#&lt;/cfoutput&gt;
&lt;br&gt;
test2: &lt;cfoutput&gt;#round(-99.5)#&lt;/cfoutput&gt;
test1: 100 
test2: -100
</code></pre>

<p>
The fix() function's output depends on if the number you pass in to it is positive or negative.  If the number you pass in is greater then or equal to 0, the function returns the closets integer less then the number passed in.  If the number you pass in is less then 0, the function returns the closest integer greater then the number in question:
</p>

<pre><code class="language-markup">test1: &lt;cfoutput&gt;#fix(99.5)#&lt;/cfoutput&gt;
&lt;br&gt;
test2: &lt;cfoutput&gt;#fix(-99.5)#&lt;/cfoutput&gt;
test1: 99 
test2: -99
</code></pre>

<p>
The int() function returns the closest integer that is smaller than the number you pass in:
</p>

<pre><code class="language-markup">test1: &lt;cfoutput&gt;#int(99.5)#&lt;/cfoutput&gt;
&lt;br&gt;
test2: &lt;cfoutput&gt;#int(-99.5)#&lt;/cfoutput&gt;
test1: 99 
test2: -100
</code></pre>

<p>
The ceiling() returns the closest integer greater than the number you pass in:
</p>

<pre><code class="language-markup">test1: &lt;cfoutput&gt;#ceiling(99.5)#&lt;/cfoutput&gt;
&lt;br&gt;
test2: &lt;cfoutput&gt;#ceiling(-99.5)#&lt;/cfoutput&gt;
test1: 100 
test2: -99
</code></pre>



