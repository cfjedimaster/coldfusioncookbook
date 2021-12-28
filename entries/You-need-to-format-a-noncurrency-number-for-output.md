---
title: You need to format a non-currency number for output.
published: January 9, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Numbers
permalink: You-need-to-format-a-noncurrency-number-for-output.html
entryid: 18
---

<h3>You need to format a non-currency number for output.</h3>

<p>
The decimalFormat() function is similar to the dollarFormat() function.  You pass in a number, and it will return a formatted string. However, the string will only be formatted with two decimal places and a thousandths separator.
</p>

<pre><code class="language-markup">&lt;cfset testNum = -537&gt;
&lt;cfoutput&gt;#deciamalFormat(testNum)#&lt;/cfoutput&gt;
-537.00
</code></pre>

<p>
The numberFormat() function gives you much more control of your formatted output.  Along with passing it a number to format, you also pass in a formatting mask.  This mask can include information such as digit placeholders, commas, padding with 0?s, and many other options.  One common use for this extra formatting is to better organize display of different sized numbers.   
</p>

<p>
Take the following example without numberFormat():
</p>

<pre><code class="language-markup">&lt;cfset testNum = -537&gt;
&lt;cfset testNum2 = 5735&gt;
&lt;cfset testNumTotal = testNum + testNum2&gt;
&lt;cfoutput&gt;
#testNum#&lt;br&gt;
#testNum2#&lt;br&gt;
---------&lt;br&gt;
#testNumTotal#
&lt;/cfoutput&gt;
</code></pre>

<p>
Running this code produces this output:
</p>

<pre><code class="language-markup">-537
5735
---------
5198
</code></pre>

<p>
And with numberFormat():
</p>

<pre><code class="language-markup">&lt;cfset testNum = -537&gt;
&lt;cfset testNum2 = 5735&gt;
&lt;cfset testNumTotal = testNum + testNum2&gt;
&lt;cfoutput&gt;
#numberFormat(testNum,?-$_,____.__?)#&lt;br&gt;
#numberFormat(testNum2,?-$_,____.__?)#&lt;br&gt;
----------&lt;BR&gt;
#numberFormat(testNumTotal,?-$_,____.__?)#
&lt;/cfoutput&gt;
</code></pre>

<p>
Running this code produces this output:
</p>

<pre><code class="language-markup">-$  537.00
 $5,735.00
----------
 $5,198.00
</code></pre>

<p>
As you can see, the output from the numberFormat() block is much easier to read.
</p>



