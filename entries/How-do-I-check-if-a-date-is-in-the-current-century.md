---
title: How do I check if a date is in the current century?
published: May 29, 2008
author: Raymond Camden
authorwebsite: http://www.raymondcamden.com
categories: Dates/Times
permalink: entries/How-do-I-check-if-a-date-is-in-the-current-century.html
entryid: 139
---

<h3>How do I check if a date is in the current century?</h3>

<p>
Date comparisons are fairly easy in ColdFusion. One common task is to compare a date value to the current date and check if there is a match on the day, week, month, etc. For this entry we will consider comparing a date's century to the current century. This is a bit more complex. While ColdFusion has functions to retrieve parts of a date (seconds, minutes, day, month, etc) it does not have a function to return the century value. You can get this using a bit of math though. 
</p>

<p>
Consider the following date:
</p>

<pre><code class="language-markup">&lt;cfset d1 = createDate(2009, 1, 1)&gt;
</code></pre>

<p>
To get the century, you can first get the year, and then divide the value by 100, using the \ operator to round the result.
</p>

<pre><code class="language-markup">&lt;cfoutput&gt;
#year(d1) \ 100#
&lt;/cfoutput&gt;
</code></pre>

<p>
This results in 20 (technically we would call 2009 the 21st century, but we just need a unique value). You could then simply compare this value to the year(now()) to see if d1 is in the same century.
</p>



