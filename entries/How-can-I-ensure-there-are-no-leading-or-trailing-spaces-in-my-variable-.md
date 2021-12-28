---
title: How can I ensure there are no leading or trailing spaces in my variable? 
published: January 27, 2006
author: Charlie Griefer
authorwebsite: http://charlie.griefer.com/
categories: Display and Layout
permalink: How-can-I-ensure-there-are-no-leading-or-trailing-spaces-in-my-variable-.html
entryid: 44
---

<h3>How can I ensure there are no leading or trailing spaces in my variable? </h3>

<p>
When working with data that you have no control over, you sometimes need to do a bit of cleanup on strings. For example, a web form that accepts user input may send data with extra spaces at the beginning or end of the value.
</p>

<p>
ColdFusion provides three functions to address the issue of leading or trailing spaces in ColdFusion: trim(), rTrim(), and lTrim(). The functions rTrim() and lTrim() will strip spaces from the end or beginning of a string. Normally you want to strip white space from both the beginning and end of a string. For that you would use the trim() function.
</p>

<pre><code class="language-markup">&lt;cfset str = &quot;  Jacob turned six years old on Wednesday          &quot;&gt;
&lt;cfset str = trim(str)&gt;
&lt;cfoutput&gt;#str#&lt;/cfoutput&gt;
</code></pre>



