---
title: You need to create a date/time object.
published: January 6, 2006
author: Rob Brooks-Bilson
authorwebsite: http://www.brooks-bilson.com/blogs/rob/
categories: Dates/Times
permalink: entries/You-need-to-create-a-datetime-object.html
entryid: 3
---

<h3>You need to create a date/time object.</h3>

<p>
You can write the date/time value as a string, or use the CreateDate(), CreateTime(), CreateDateTime(), or CreateODBCDate() function depending on your specific needs.
</p>

<p>
Internally, ColdFusion stores dates and times as real numbers.  The date is stored as the integer part of the number, and the time is stored as the fractional part.  0 represents 12:00 am on 12/30/1899.  7:00 pm on 12/31/2002 would be 37621.79167.  The whole part of the number represents 37621 days since 12/30/1899 while .79167, or 7 pm is obtained by dividing the hour (19) by the total number of hours in a day (24).  Storing dates in this manner allows ColdFusion to quickly and efficiently store and manipulate dates and times.
</p>

<p>
From a human readability standpoint, this format isn't very friendly.  Because of this, ColdFusion allows you to refer to date/time objects as strings.  You can specify dates and times separately, or combined.  Dates must be in the range 100 AD to 9999 AD and can be written as:
</p>

<p>
<blockquote>
</p>

<p>
12/31/02
</p>

<p>
12/31/2002
</p>

<p>
12-31-2002
</p>

<p>
2002-12-31
</p>

<p>
December 31, 2002
</p>

<p>
Dec 31, 2002
</p>

<p>
{ts '2002-12-31 00:00:00'}
</p>

<p>
</blockquote>
</p>

<p>
ColdFusion handles two-digit years from 00 to 29 as twenty-first century dates and two digit years from 30 to 99 as twentieth-century dates. 
</p>

<p>
Times are accurate to the second and can be written as:
</p>

<p>
<blockquote>
</p>

<p>
7pm
</p>

<p>
7:00p
</p>

<p>
7:00pm
</p>

<p>
07:00pm
</p>

<p>
19:00:00
</p>

<p>
{ts '1899-12-30 19:00:00'}
</p>

<p>
</blockquote>
</p>

<p>
Combined date/time objects can be written as any combination of the above.  For example, a combined ODBC formatted date/time object looks like this:  
</p>

<pre><code class="language-markup">{ts '2002-04-01 21:51:50'}
</code></pre>

<p>
Date/Time values can be assigned to variables using <CFSET> and <CFPARAM>:
</p>

<pre><code class="language-markup">&lt;cfset x=&quot;12/31/2002&quot;&gt;
&lt;cfparam name=&quot;x&quot; default=&quot;12/31/2002&quot;&gt;
</code></pre>

<p>
They can also be coded directly in tag attributes and function parameters:
</p>

<pre><code class="language-markup">&lt;cfcookie name=&quot;ID&quot; value=&quot;12&quot; expires=&quot;12/31/2002&quot;&gt;
or
&lt;cfset x = dateFormat(&quot;12/31/2002&quot;)&gt;
</code></pre>

<p>
While this may seem like an easy way to create dates, it can be problematic if you ever need to represent your dates in a locale other than English (US).  The main problem has to do with the month and day portion of the date.  In the U.S., dates are usually written mm-dd--yyyy.  The month is first, followed by the day, then the year.  In many other locales, the month and day parts of the date are reversed.  Because of this, it is recommended you always use the CreateDate(), CreateTime(), or CreateDateTime() functions to create date/time objects.  These functions can be used in any locale and will ensure that the dates and times you create can be used with any locale.
</p>

<p>
To create a date object, use CreateDate():
</p>

<pre><code class="language-markup">&lt;cfset x = createDate(2002,12,31)&gt;
&lt;cfoutput&gt;#x#&lt;/cfoutput&gt;
</code></pre>

<p>
The function requires three parameters, the year, the month, and the day.  This removes any ambiguity regarding the position and value of the day and month portions of the date object. 
</p>

<p>
Likewise, you can create a time object using CreateTime():
</p>

<pre><code class="language-markup">&lt;cfset x=CreateTime(19,0,0)&gt;
&lt;cfoutput&gt;#x#&lt;/cfoutput&gt;
</code></pre>

<p>
CreateTime() requires you to pass the hour (using the 24-hour clock), minute, and second.
</p>

<p>
To create a combined date/time object, use CreateDateTime():
</p>

<pre><code class="language-markup">&lt;cfset x=CreateDateTime(2002,12,31,7,0,0)&gt;
&lt;cfoutput&gt;#x#&lt;/cfoutput&gt;
</code></pre>

<p>
This function requires you to specify the year, month, day, hour (24-hour clock), minute, and second for the date/time object you want to create.  
</p>



