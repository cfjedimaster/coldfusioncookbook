---
title: You need to determine whether a string or numeric value is a valid date object.
published: January 5, 2006
author: Rob Brooks-Bilson
authorwebsite: http://www.brooks-bilson.com/blogs/rob/
categories: Dates/Times
permalink: entries/You-need-to-determine-whether-a-string-or-numeric-value-is-a-valid-date-object.html
entryid: 4
---

<h3>You need to determine whether a string or numeric value is a valid date object.</h3>

<p>
Use IsDate() or LSIsDate() for strings, or IsNumericDate() for numeric values.  The IsDate() function returns True if the specified string can be converted to a valid date/time object.  Be sure to enclose literal dates in quotation marks.
</p>

<pre><code class="language-markup">&lt;cfoutput&gt;
&lt;cfset x=&quot;12-31-2002&quot;&gt;
#isDate(x)#&lt;BR&gt;
#isDate('12/31/2002')#&lt;BR&gt;
#isDate('Dec 31, 2002')#&lt;BR&gt;
#isDate('13/31/2002')#&lt;BR&gt;
#isDate('19:00')#&lt;BR&gt;
#isDate('7pm')#
&lt;/cfoutput&gt;
</code></pre>

<p>
You should be aware that the IsDate() function only works with dates formatted for the U.S. locale.  If you have a date formatted using a different locale, you should use the LSIsDate() function.  It returns True if the specified date can be converted to a date/time object in the current locale or False if not.
</p>

<p>
If you need to determine whether a numeric value (real number) is a valid date/time object, you can use the IsNumericDate() function.  Like IsDate(), it returns True if the value you pass to it can be converted to a date/time object.
</p>

<pre><code class="language-markup">&lt;cfoutput&gt;
#isNumericDate(37621.79167)#&lt;BR&gt;
#isNumericDate(-1)#
&lt;/cfoutput&gt;
</code></pre>

<p>
Because isNumericDate() operates on numeric values, it can be used in any locale.
</p>



