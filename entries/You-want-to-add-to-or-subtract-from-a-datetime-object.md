---
title: You want to add to or subtract from a date/time object.
published: January 6, 2006
author: Rob Brooks-Bilson
authorwebsite: http://www.brooks-bilson.com/blogs/rob/
categories: Dates/Times
permalink: You-want-to-add-to-or-subtract-from-a-datetime-object.html
entryid: 10
---

<h3>You want to add to or subtract from a date/time object.</h3>

<p>
The DateAdd() function can be used to add or subtract various units of time from a date/time object.  For example, you can use DateAdd() to add or subtract an arbitrary number of seconds/minutes/days/months, etc. to a specific date/time.  DateAdd() takes the form:
</p>

<pre><code class="language-markup">DateAdd(datepart, number, date)
</code></pre>

<p>
Valid entries for datepart are: s (second), n (minute), h (hour), ww (week), w (weekday), d (day), y (day of year), m (month), q (quarter), and yyyy (year).  Number specifies the number of datepart units to add to date.  To subtract from the specified date, make number negative.  Here are some examples:
</p>

<pre><code class="language-markup">&lt;cfset mydatetime=now()&gt;
&lt;cfoutput&gt;The original time and date is 
#TimeFormat(MyDateTime,'hh:mm:ss tt')#, #DateFormat(MyDateTime,'mmmm dd, yyyy')#
&lt;p&gt;&lt;b&gt;Add 30 Seconds:&lt;/b&gt; 
#TimeFormat(DateAdd('s', 30, MyDateTime),'hh:mm:ss tt')#
&lt;br&gt;&lt;b&gt;Subtract 10 minutes:&lt;/b&gt; 
#TimeFormat(DateAdd('n', -10, MyDateTime),'hh:mm:ss tt')#
&lt;br&gt;&lt;b&gt;Add 2 hours:&lt;/b&gt; 
#TimeFormat(DateAdd('h', 2, MyDateTime),'hh:mm:ss tt')#
&lt;br&gt;&lt;b&gt;Add 9 weeks:&lt;/b&gt; 
#DateFormat(DateAdd('ww', 9, MyDateTime),'mmmm dd, yyyy')#
&lt;br&gt;&lt;b&gt;Add 3 weekdays:&lt;/b&gt; 
#DateFormat(DateAdd('w', 3, MyDateTime),'mmmm dd, yyyy')#
&lt;br&gt;&lt;b&gt;Subtract 67 days:&lt;/b&gt; 
#DateFormat(DateAdd('d', -67, MyDateTime),'mmmm dd, yyyy')#
&lt;br&gt;&lt;b&gt;Add 45 days of the year:&lt;/b&gt; 
#DateFormat(DateAdd('y', 45, MyDateTime),'mmmm dd, yyyy')#
&lt;br&gt;&lt;b&gt;Subtract 7 months:&lt;/b&gt; 
#DateFormat(DateAdd('m', -7, MyDateTime),'mmmm dd, yyyy')#
&lt;br&gt;&lt;b&gt;Subtract 2 quarters:&lt;/b&gt; 
#DateFormat(DateAdd('q', -2, MyDateTime),'mmmm dd, yyyy')#
&lt;br&gt;&lt;b&gt;Subtract 5 years:&lt;/b&gt; 
#DateFormat(DateAdd('yyyy', -5, MyDateTime),'mmmm dd, yyyy')#
&lt;/cfoutput&gt;
</code></pre>



