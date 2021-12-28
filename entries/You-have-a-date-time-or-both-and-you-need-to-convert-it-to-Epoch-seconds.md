---
title: You have a date, time, or both and you need to convert it to Epoch seconds.
published: January 6, 2006
author: Rob Brooks-Bilson
authorwebsite: http://www.brooks-bilson.com/blogs/rob/
categories: Dates/Times
permalink: entries/You-have-a-date-time-or-both-and-you-need-to-convert-it-to-Epoch-seconds.html
entryid: 13
---

<h3>You have a date, time, or both and you need to convert it to Epoch seconds.</h3>

<p>
Use the DateDiff() function to do the conversion.  If you are converting from local time, you'll first need to convert your date/time to GMT(Greenwich Mean Time) using DateConvert(). 
</p>

<p>
If you have ever worked on a *nix system before, or with other development languages such as Perl, Java, or even JavaScript, you may already be familiar with the concept of Epoch time.  In the *nix world, the Epoch is defined as Jaunary 1, 1970 00:00 (midnight) GMT.  This date/time is used as the starting point for all date and time calculations.  By converting all dates following the Epoch to seconds, it makes it easy to do things like date comparisons, as well as adding to or subtracting from dates.  
</p>

<p>
ColdFusion does not natively use the Epoch for date/time calculations.  However, there may be various instances where you find you need to convert a date/time value to Epoch seconds for use in another environment.
</p>

<p>
To convert a ColdFusion date/time object to Epoch seconds, you can use the DateDiff() function to calculate the difference in seconds between the Epoch and the date/time you want to convert.  If the date you want to convert to Epoch seconds is not in GMT (also called UTC or Universal Coordinated Time), you'll need to convert the Epoch to local time, or convert your local time to GMT.  This is done using DateConvert().
</p>

<pre><code class="language-markup">&lt;cfset thedate = createdatetime(2002,12,31,19,0,0)&gt;
&lt;cfoutput&gt;
#TheDate# (local)&lt;br&gt;
Epoch seconds (convert Epoch to local time): #DateDiff(&quot;s&quot;,
  DateConvert(&quot;utc2Local&quot;, &quot;January 1 1970 00:00&quot;), TheDate)#&lt;br&gt;
Epoch seconds (convert local time to UTC): #DateDiff(&quot;s&quot;, &quot;January 1 1970
  00:00&quot;, DateConvert(&quot;Local2utc&quot;, TheDate))#
&lt;/cfoutput&gt;
</code></pre>

<p>
Running this code produces this output:
</p>

<pre><code class="language-markup">{ts '2002-12-31 19:00:00'} (local)
Epoch seconds (convert Epoch to local time): 1041379200
Epoch seconds (convert local time to UTC): 1041379200
</code></pre>



