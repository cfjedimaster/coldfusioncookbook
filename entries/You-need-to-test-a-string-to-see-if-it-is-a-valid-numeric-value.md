---
title: You need to test a string to see if it is a valid numeric value.
published: January 12, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Numbers
permalink: entries/You-need-to-test-a-string-to-see-if-it-is-a-valid-numeric-value.html
entryid: 15
---

<h3>You need to test a string to see if it is a valid numeric value.</h3>

<p>
The isNumeric() function is used to directly test a variable to see if it is numeric.
</p>

<p>
 
</p>

<p>
<pre> 
</p>

<p>
&lt;cfset testVar = &quot;foo&quot;&gt;
</p>

<p>
&lt;cfoutput&gt;#isNumeric(testVar)#&lt;/cfoutput&gt;
</p>

<p>
NO
</p>

</code></pre>

<p>
A Boolean response (True or False) is returned.
</p>

<p>
The val() function on the other hand, will go beyond an all or nothing check.  It will attempt to parse out a number from the beginning of a string, and return this number if it exists:
</p>

<pre><code class="language-markup">&lt;cfset testVar = &quot;100foo&quot;&gt;
&lt;cfoutput&gt;#val(testVar)#&lt;/cfoutput&gt;
100
</code></pre>

<p>
If the beginning of the string contains a number, that number is returned.  If not, a 0 is returned.
</p>



