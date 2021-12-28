---
title: You have a date and time in Epoch seconds that you would like to convert to a date/time object.
published: January 6, 2006
author: Rob Brooks-Bilson
authorwebsite: http://www.brooks-bilson.com/blogs/rob/
categories: Dates/Times
permalink: entries/You-have-a-date-and-time-in-Epoch-seconds-that-you-would-like-to-convert-to-a-datetime-object.html
entryid: 14
---

<h3>You have a date and time in Epoch seconds that you would like to convert to a date/time object.</h3>

<p>
Use DateAdd() to add the Epoch seconds to the Epoch date.
</p>

<p>
ColdFusion does not natively deal with dates based on the Epoch.  However, as a developer, you may be faced with situations where you are provided with a date/time value stored in Epoch seconds.  If this is the case, you can easily convert the value to a ColdFusion date/time object using the DateAdd() function. 
</p>

<pre><code class="language-markup">&lt;cfset e=1041397199&gt;
&lt;cfoutput&gt;
#DateAdd(&quot;s&quot;,e,DateConvert(&quot;utc2Local&quot;, &quot;January 1 1970 00:00&quot;))#
&lt;/cfoutput&gt;
</code></pre>

<p>
In this example, the Epoch is first converted to local time using the DateConvert() function.  Next, the number of Epoch seconds we have are added to the converted Epoch time using DateAdd().  The output looks like this:
</p>

<pre><code class="language-markup">{ts '2002-12-31 23:59:59'}
</code></pre>

<p>
Using the DateConvert() function is only necessary if you want to convert Epoch seconds to local time.  You can leave it out if you simply want Epoch seconds converted to a date/time object in UTC.
</p>



