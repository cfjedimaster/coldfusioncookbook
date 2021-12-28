---
title: You need to get the current date/time from the server.
published: January 5, 2006
author: Rob Brooks-Bilson
authorwebsite: http://www.brooks-bilson.com/blogs/rob/
categories: Dates/Times
permalink: You-need-to-get-the-current-datetime-from-the-server.html
entryid: 2
---

<h3>You need to get the current date/time from the server.</h3>

<p>
The Now() function can be used to obtain the current date/time from the ColdFusion server:
</p>

<pre><code class="language-markup">&lt;cfoutput&gt;#Now()#&lt;/cfoutput&gt;
</code></pre>

<p>
The current date/time is returned as a date/time object, formatted as a timestamp:
</p>

<pre><code class="language-markup">{ts '2002-04-01 10:04:17'}
</code></pre>

<p>
The object is formatted as {ts 'yyyy-mm-dd HH:mm:ss'} where ts indicates a time stamp.  The date is formatted as a four-digit year followed by a two-digit month and a two-digit day.  The time portion of the object is formatted for a 24-hour clock.  Hours, minutes, and seconds are all formatted using two digits.  
</p>



