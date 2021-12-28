---
title: You need to extract the day/month/year/hour/minute/second (DMYHMS), day of the week/year, week number, or quarter from a date/time object.
published: January 6, 2006
author: Rob Brooks-Bilson
authorwebsite: http://www.brooks-bilson.com/blogs/rob/
categories: Dates/Times
permalink: entries/You-need-to-extract-the-daymonthyearhourminutesecond-DMYHMS-day-of-the-weekyear-week-number-or-quarter-from-a-datetime-object.html
entryid: 12
---

<h3>You need to extract the day/month/year/hour/minute/second (DMYHMS), day of the week/year, week number, or quarter from a date/time object.</h3>

<p>
DatePart() accepts two parameters, the datepart you want to extract, and the date you want to extract the date part from:
</p>

<pre><code class="language-markup">&lt;cfset thedate = createdatetime(2002, 12, 31, 23, 59, 59)&gt;
&lt;cfoutput&gt;
#DateFormat(TheDate, 'dddd mmmm dd, yyyy')# #TimeFormat(TheDate, 'hh:mm:ss tt')#
&lt;p&gt;
&lt;b&gt;Second:&lt;/b&gt; #DatePart('s', TheDate)#&lt;br&gt;
&lt;b&gt;Minute:&lt;/b&gt; #DatePart('n', TheDate)#&lt;br&gt;
&lt;b&gt;Hour:&lt;/b&gt; #DatePart('h', TheDate)#&lt;br&gt;
&lt;b&gt;Week:&lt;/b&gt; #DatePart('ww', TheDate)#&lt;br&gt;
&lt;b&gt;Day:&lt;/b&gt; #DatePart('d', TheDate)#&lt;br&gt;
&lt;b&gt;Day of week:&lt;/b&gt; #DatePart('w', TheDate)#&lt;br&gt;
&lt;b&gt;Day of year:&lt;/b&gt; #DatePart('y', TheDate)#&lt;br&gt;
&lt;b&gt;Month:&lt;/b&gt; #DatePart('m', TheDate)#&lt;br&gt;
&lt;b&gt;Quarter:&lt;/b&gt; #DatePart('q', TheDate)#&lt;br&gt;
&lt;b&gt;Year:&lt;/b&gt; #DatePart('yyyy', TheDate)#
&lt;/cfoutput&gt;
</code></pre>

<p>
Running the code produces this output:
</p>

<pre><code class="language-markup">Tuesday December 31, 2002 11:59:59 PM 
Second: 59
Minute: 59
Hour: 23
Week: 53
Day: 31
Day of week: 3
Day of year: 365
Month: 12
Quarter: 4
Year: 2002
</code></pre>

<p>
ColdFusion also has a separate function that corresponds to each date part available in the DatePart() function.  These functions are often used in lieu of DatePart() as they offer "shorthand" syntax for extracting a date part.  
</p>

<pre><code class="language-markup">&lt;cfset thedate = createdatetime(2002, 12, 31, 23, 59, 59)&gt;
&lt;cfoutput&gt;
#DateFormat(TheDate, 'dddd mmmm dd, yyyy')# #TimeFormat(TheDate, 'hh:mm:ss tt')#
&lt;p&gt;
Second: #Second(TheDate)#&lt;br&gt;
Minute: #Minute(TheDate)#&lt;br&gt;
Hour: #Hour(TheDate)#&lt;br&gt;
Day: #Day(TheDate)#&lt;br&gt;
Day of week: #DayOfWeek(TheDate)#&lt;br&gt;
Day of year: #DayOfYear(TheDate)#&lt;br&gt;
Week: #Week(TheDate)#&lt;br&gt;
Month: #Month(TheDate)#&lt;br&gt;
Quarter: #Quarter(TheDate)#&lt;br&gt;
Year: #Year(TheDate)#&lt;br&gt;
&lt;/cfoutput&gt;
</code></pre>

<p>
Running this code produces the exact same output as the DatePart() example.
</p>

<p>
You can get the string representation for the day of week, and month parts of a date object by using the DayOfWeekAsString() and MonthAsString() respectively.
</p>

<pre><code class="language-markup">&lt;cfset thedate = createdatetime(2002, 12, 31, 19, 30, 55)&gt;
&lt;cfoutput&gt;
#DayOfWeekAsString(DayOfWeek(TheDate))#&lt;br&gt;
#MonthAsString(Month(TheDate))#
&lt;/cfoutput&gt;
</code></pre>

<p>
This returns:
</p>

<pre><code class="language-markup">Tuesday
December
</code></pre>



