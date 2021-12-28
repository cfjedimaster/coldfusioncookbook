---
title: You have two dates/times you want to compare.
published: January 6, 2006
author: Rob Brooks-Bilson
authorwebsite: http://www.brooks-bilson.com/blogs/rob/
categories: Dates/Times
permalink: entries/You-have-two-datestimes-you-want-to-compare.html
entryid: 11
---

<h3>You have two dates/times you want to compare.</h3>

<p>
You have two dates/times you want to compare.
</p>

<p>
Use one of ColdFusion's comparison operators in an expression, or use the DateCompare() function.
</p>

<p>
There are two ways you can compare dates and times in ColdFusion.  The first way is to use the <cfif> tag with a comparison operator such as IS, EQ, NEQ, GT, GTE, LT, LTE, etc:
</p>

<pre><code class="language-markup">&lt;cfset date1 = &quot;12/31/1999&quot;&gt;
&lt;cfset date2 = &quot;12/31/2002&quot;&gt;
&lt;cfif date1 gte date2&gt;
  &lt;cfoutput&gt;#Date1# is greater than or equal to #Date2#&lt;/cfoutput&gt;
&lt;cfelse&gt;
  &lt;cfoutput&gt;#Date1# is less than #Date2#&lt;/cfoutput&gt;
&lt;/cfif&gt;
</code></pre>

<p>
This technique allows you to perform a basic comparison between the two dates/times. 
</p>

<p>
You can perform a more flexible comparison between two dates using the DateCompare() function.  This function takes three parameters:
</p>

<pre><code class="language-markup">DateCompare(date1, date2, [,datepart])
</code></pre>

<p>
The function returns -1 if date1 is less than date2, 0 if both date1 and date2 are equal, or 1 if date1 is greater than date2.  
</p>

<p>
What makes this a more flexible method for comparing dates is that the precision of the comparison can be specified using the optional datepart parameter.  Valid attributes for datepart are: s (second), n (minute), h (hour), d (day), m (month), and yyyy (year).  This means you can compare two dates/times and make the comparison precise to the second, hour, month, year, etc:
</p>

<pre><code class="language-markup">&lt;cfset date1 = &quot;12/31/2002 19:00:00&quot;&gt;
&lt;cfset date2 = &quot;12/31/2002 21:30:00&quot;&gt;
&lt;cfif datecompare(date1, date2, &quot;d&quot;) eq 0&gt;
  &lt;cfoutput&gt;#Date1# and #Date2# fall on the same day.&lt;/cfoutput&gt;
&lt;cfelse&gt;
  &lt;cfoutput&gt;#Date1# and #Date2# don't fall on the same day.&lt;/cfoutput&gt;
&lt;/cfif&gt;
</code></pre>

<p>
This example compares two date/time objects, with the precision set to "day".   Even though the date/time objects are not exactly equal because of the different time stamps, the example still evaluates True because the comparison's precision is set to "day", making the time stamp insignificant.
</p>



