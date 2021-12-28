---
title: How can I pad a variable with spaces or other characters?
published: September 5, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Display and Layout,Strings
permalink: entries/How-can-I-pad-a-variable-with-spaces-or-other-characters.html
entryid: 108
---

<h3>How can I pad a variable with spaces or other characters?</h3>

<p>
If you need to pad a ColdFusion variable with spaces then you can use the build in rjustify() and ljustify() functions.  For example:
</p>

<pre><code class="language-markup">&lt;cfset newText = rjustify(&quot;foo&quot;, 35)&gt;
&lt;cfoutput&gt;#newText#&lt;/cfoutput&gt;
</code></pre>

<p>
If you ever find the need to pad a ColdFusion variable with non-space characters (i.e. Change 'name' to 'name-----'), then the repeatString() function is your friend.  For example:
</p>

<p>
<pre> 
</p>

<p>
&lt;cfset origText  = &quot;name&quot;&gt;
</p>

<p>
&lt;cfset paddingChar  = &quot;-&quot;&gt;
</p>

<p>
&lt;cfset paddingCount  = 5&gt;
</p>

<p>
&lt;cfset newText = origText &amp; repeatString(paddingChar, paddingCount)&gt;
</p>

<p>
&lt;cfoutput&gt;#newText#&lt;/cfoutput&gt;
</p>

</code></pre>

<p>
Now lets get a little more advanced.  Say you are trying to format an email and want to pad to a length minus the size of the string so that you can get rows of text to line up.  All you need to do is use the len() function to account for the length of the text you are trying to pad.
</p>

<p>
<pre> 
</p>

<p>
&lt;cfset origText  = &quot;name:&quot;&gt;
</p>

<p>
&lt;cfset paddingChar  = &quot;-&quot;&gt;
</p>

<p>
&lt;cfset paddingCount  = 10&gt;
</p>

<p>
&lt;cfset newText = origText &amp; repeatString(paddingChar, paddingCount - len(origText) ) &gt;
</p>

<p>
&lt;cfoutput&gt;#newText#&lt;/cfoutput&gt;Jeremy
</p>

</code></pre>

<p>
You can easily put this into a custom function:
</p>

<pre><code class="language-markup">&lt;cfscript&gt;
function printWithPad(str,pad) {
	var padchar = '-';
	if(arrayLen(arguments) gte 3) padchar = arguments[3];
	if(len(str) gte pad) return str;
	return str &amp; repeatString(padchar, pad - len(str));
}
&lt;/cfscript&gt; 
&lt;cfoutput&gt;#printWithPad(&quot;name:&quot;,10)#&lt;/cfoutput&gt;Jeremy&lt;br /&gt;
&lt;cfoutput&gt;#printWithPad(&quot;country:&quot;,10)#&lt;/cfoutput&gt;USA&lt;br /&gt;
</code></pre>



