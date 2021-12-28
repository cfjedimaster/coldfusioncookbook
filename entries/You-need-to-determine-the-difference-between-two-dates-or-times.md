---
title: You need to determine the difference between two dates or times.
published: January 6, 2006
author: Rob Brooks-Bilson
authorwebsite: http://www.brooks-bilson.com/blogs/rob/
categories: Dates/Times
permalink: You-need-to-determine-the-difference-between-two-dates-or-times.html
entryid: 9
---

<h3>You need to determine the difference between two dates or times.</h3>

<p>
Use DateDiff() to return the interval between two dates and/or times.  The DateDiff() function is used to return the interval between two dates or times.  The function takes three parameters, the interval for the comparison, and the two dates you want to compare.
</p>

<p>
The following code compares the difference between two dates in years, and the difference between two times in minutes:
</p>

<pre><code class="language-markup">&lt;cfoutput&gt;
#DateDiff(&quot;yyyy&quot;, &quot;12/31/1999&quot;, &quot;12/31/2002&quot;,)#&lt;br&gt;
#DateDiff(&quot;n&quot;, &quot;12:00:00&quot;, &quot;15:00:00&quot;)#
&lt;/cfoutput&gt;
</code></pre>

<p>
This interval can be expressed in a variety of formats:
</p>

<p>
<table>
</p>

<p>
<tr>
</p>

<p>
	<th>Datepart</th>
</p>

<p>
	<th>Interval</th>
</p>

<p>
</tr>
</p>

<p>
<tr>
</p>

<p>
	<td>s</td>
</p>

<p>
	<td>Second</td>
</p>

<p>
</tr>
</p>

<p>
<tr>
</p>

<p>
	<td>n</td>
</p>

<p>
	<td>Minute</td>
</p>

<p>
</tr>
</p>

<p>
<tr>
</p>

<p>
	<td>h</td>
</p>

<p>
	<td>Hour</td>
</p>

<p>
</tr>
</p>

<p>
<tr>
</p>

<p>
	<td>ww</td>
</p>

<p>
	<td>Week</td>
</p>

<p>
</tr>
</p>

<p>
<tr>
</p>

<p>
	<td>w</td>
</p>

<p>
	<td>Weekday</td>
</p>

<p>
</tr>
</p>

<p>
<tr>
</p>

<p>
	<td>d</td>
</p>

<p>
	<td>Day</td>
</p>

<p>
</tr>
</p>

<p>
<tr>
</p>

<p>
	<td>y</td>
</p>

<p>
	<td>Day of year</td>
</p>

<p>
</tr>
</p>

<p>
<tr>
</p>

<p>
	<td>m</td>
</p>

<p>
	<td>Month</td>
</p>

<p>
</tr>
</p>

<p>
<tr>
</p>

<p>
	<td>q</td>
</p>

<p>
	<td>Quarter</td>
</p>

<p>
</tr>
</p>

<p>
<tr>
</p>

<p>
	<td>yyyy</td>
</p>

<p>
	<td>Year</td>
</p>

<p>
</tr>
</p>

<p>
</table>
</p>

<p>
DateDiff() returns the interval in the unit you specify by which the second date/time is greater than the first.  If the first date is greater than the second, a negative number is returned.
</p>



