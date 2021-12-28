---
title: You need to determine whether a number is positive or negative, or you need to find the absolute value of a number.
published: January 9, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Numbers
permalink: You-need-to-determine-whether-a-number-is-positive-or-negative-or-you-need-to-find-the-absolute-value-of-a-number.html
entryid: 16
---

<h3>You need to determine whether a number is positive or negative, or you need to find the absolute value of a number.</h3>

<p>
The sgn() function takes a number as its single parameter.  The sgn() function  will return 1 if the number is positive, 0 if the number equals 0, and -1 if the number in negative:
</p>

<pre><code class="language-markup">&lt;cfset testVar = sgn(-127)&gt;
&lt;cfoutput&gt;#testVar#&lt;/cfoutput&gt;
-1
</code></pre>

<p>
The abs() function also takes a number as its single parameter.  The abs() function will return the absolute value (the value of the number without its sign)  of the number:
</p>

<pre><code class="language-markup">&lt;cfset testVar = abs(-127)&gt;
&lt;cfoutput&gt;#testVar#&lt;/cfoutput&gt;
127
</code></pre>



