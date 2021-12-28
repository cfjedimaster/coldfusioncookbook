---
title: You need to format a number as a US currency for output.
published: January 9, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Numbers
permalink: entries/You-need-to-format-a-number-as-a-US-currency-for-output.html
entryid: 17
---

<h3>You need to format a number as a US currency for output.</h3>

<p>
The dollarFormat() function takes a number as its single parameter, and returns a formatted String.  The following formatting is added to the string:  two decimal places, thousandths separator, and a dollar sign.  Furthermore, if the number is negative, it will be wrapped in parentheses.
</p>

<pre><code class="language-markup">&lt;cfset testNum = -537&gt;
&lt;cfoutput&gt;#dollarFormat(testNum)#&lt;/cfoutput&gt;
($537.00)
</code></pre>



