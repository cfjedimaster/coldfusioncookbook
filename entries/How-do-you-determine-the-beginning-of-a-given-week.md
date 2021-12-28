---
title: How do you determine the beginning of a given week?
published: June 13, 2006
author: Oliver Merk
authorwebsite: http://www.merkconsulting.com
categories: Dates/Times
permalink: entries/How-do-you-determine-the-beginning-of-a-given-week.html
entryid: 101
---

<h3>How do you determine the beginning of a given week?</h3>

<p>
When building online calendars it's often useful to know the first day  of the week for a given date. The following code returns the Sunday of the date provided. The code can easily be adjusted to return another day  if required (see code comment).
</p>

<pre><code class="language-markup">&lt;cfscript&gt;
	request.startDate = now();
	currentDayOfWeek = dayOfWeek(REQUEST.startDate);
	offset = 1 - currentDayOfWeek;//change number to get a different weekday
	variables.startDate = createODBCDate(dateAdd(&quot;d&quot;, offset, request.startDate));
&lt;/cfscript&gt;
</code></pre>



