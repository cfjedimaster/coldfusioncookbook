---
title: How do I determine if a number is even or odd?
published: February 3, 2006
author: Raymond Camden
authorwebsite: http://www.raymondcamden.com
categories: Numbers
permalink: How-do-I-determine-if-a-number-is-even-or-odd.html
entryid: 53
---

<h3>How do I determine if a number is even or odd?</h3>

<p>
An even number is any number that can be divided by 2 with no remainder. ColdFusion provides a function, mod, that returns the remainder of a division operation. To determine if a number is even, simply see if the value, modded by 2, returns 0:
</p>

<pre><code class="language-markup">&lt;cfset x = 5&gt;
&lt;cfif x mod 2 is 0&gt;
	The number is even.
&lt;cfelse&gt;
	The number is odd.
&lt;/cfif&gt;
</code></pre>

<p>
If the remainder is 1, then the number is odd.
</p>



