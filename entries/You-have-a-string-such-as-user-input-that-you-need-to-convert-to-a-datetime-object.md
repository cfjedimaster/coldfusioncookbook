---
title: You have a string, such as user input, that you need to convert to a date/time object.
published: January 6, 2006
author: Rob Brooks-Bilson
authorwebsite: http://www.brooks-bilson.com/blogs/rob/
categories: Dates/Times
permalink: entries/You-have-a-string-such-as-user-input-that-you-need-to-convert-to-a-datetime-object.html
entryid: 8
---

<h3>You have a string, such as user input, that you need to convert to a date/time object.</h3>

<p>
The ParseDateTime() function, and its locale specific sibling LSParseDateTime() can be used to convert an arbitrary date/time string into a date/time object.  Additionally, ParseDateTime() (but not LSParseDateTime()) can be used to convert the supplied date/time from local time to GMT (Greenwich Mean Time).  
</p>

<p>
As developers, we don't always get to choose the format that dates and times make their way into our applications.  This is especially true for web applications that involve user input.  If you have a form that allows a user to freely input a date/time, chances are not all of those dates are going to come in the same form (unless perhaps you use JavaScript to validate the input or design your form to accept the date time values as individual form fields for each date/time part).  In any case, there will be situations where it's desirable to convert an arbitrarily formatted date/time value into a date/time object.  When this need arises, you can accomplish this using the ParseDateTime() function:
</p>

<pre><code class="language-markup">&lt;cfoutput&gt;
#ParseDateTime(&quot;12/31/2002&quot;)#&lt;br&gt;
#ParseDateTime(&quot;12/31/2002 23:59:59&quot;, &quot;Standard&quot;)#
&lt;/cfoutput&gt;
</code></pre>

<p>
Results in:
</p>

<pre><code class="language-markup">{ts '2002-12-31 00:00:00'}
{ts '2002-12-31 23:59:59'}
</code></pre>

<p>
The ParseDateTime() function accepts an optional parameter that allows you to specify whether the date you supplied is in "Standard" (the default) or "POP" format.  POP format is for use with date/time values associated with SMTP generated email messages.  If POP is specified, the date/time string is automatically converted to GMT time using the English (US) locale.  No conversion is performed if the conversion type is Standard:
</p>

<pre><code class="language-markup">&lt;cfoutput&gt;
#ParseDateTime(&quot;Tue, 31 Dec 2002 23:59:29 +0400 (EDT)&quot;, &quot;POP&quot;)#&lt;br&gt;
#ParseDateTime(&quot;Tue, 31 Dec 2002 23:59:29 -0400&quot;, &quot;POP&quot;)#
&lt;/cfoutput&gt;
</code></pre>

<p>
Results in:
</p>

<pre><code class="language-markup">{ts '2002-12-31 19:59:29'}
{ts '2003-01-01 03:59:29'}
</code></pre>

<p>
LSParseDateTime() can be used to parse locale specific date strings and works in the same way as ParseDateTime() function except there is no optional parameter for handling POP dates.
</p>



