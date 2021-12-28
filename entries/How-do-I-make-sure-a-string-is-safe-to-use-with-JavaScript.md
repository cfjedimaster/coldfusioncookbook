---
title: How do I make sure a string is safe to use with JavaScript?
published: March 29, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: JavaScript
permalink: How-do-I-make-sure-a-string-is-safe-to-use-with-JavaScript.html
entryid: 78
---

<h3>How do I make sure a string is safe to use with JavaScript?</h3>

<p>
If you are dynamically populating a JavaScript variable, you may find that your code breaks with "unterminated string constant" or similar error messages.  This is probably a case of your JavaScript variables containing characters that are considers to be "special" characters by JavaScript.  You will need to "escape" these special characters so that JavaScript can process them.
</p>

<p>
Some common characters you need to be wary of include: newlines, carriage returns, and quotes.  In order for JavaScript to handle these special characters, they must be escaped, or converted to JavaScript safe alternatives.  JavaScript makes use of the \ characters to escape most special characters.
</p>

<p>
The following code sample from the CF Docs shows how to use the ColdFusion jSStringFormat() function to make a string JavaScript safe:
</p>

<pre><code class="language-markup">&lt;cfset stringValue = &quot;An example string value with a tab chr(9), a newline (chr10) and some &quot;&quot;quoted&quot;&quot; 'text'&quot;&gt;
&lt;p&gt;This is the string we have created:&lt;br&gt;
&lt;cfoutput&gt;#stringValue#&lt;/cfoutput&gt;
&lt;/p&gt;
&lt;cfset jsStringValue = jSStringFormat(#stringValue#)&gt;
&lt;!----- Generate an alert from the JavaScript string jsStringValue. ----&gt;
&lt;script&gt;
s = &quot;&lt;cfoutput&gt;#jsStringValue#&lt;/cfoutput&gt;&quot;;
alert(s); 
&lt;/script&gt; 
</code></pre>



