---
title: You need to format a date/time object.
published: January 6, 2006
author: Rob Brooks-Bilson
authorwebsite: http://www.brooks-bilson.com/blogs/rob/
categories: Dates/Times
permalink: You-need-to-format-a-datetime-object.html
entryid: 7
---

<h3>You need to format a date/time object.</h3>

<p>
To format a date for the English (US) locale, use the DateFormat() function.  For times using the U.S. format, use TimeFormat().  To format a date using the conventions of a different locale, use the LSDateFormat() function.  Locale specific time formatting can be accomplished using LSTimeFormat().
</p>

<p>
Few situation calls for formatting your dates and times like this:
</p>

<pre><code class="language-markup">{ts '2002-04-01 21:51:50'}
</code></pre>

<p>
More often than not, you'll want or need to format a date/time object in a way different from how ColdFusion or your database stores the value internally.  This is easily handled using the DateFormat() function:
</p>

<pre><code class="language-markup">DateFormat(date [, mask])
</code></pre>

<p>
DateFormat() returns date formatted according to mask.  If no value is specified for mask, DateFormat() uses the default dd-mmm-yy.  Valid entries for mask are: 
</p>

<p>
<table>
</p>

<p>
	<tr>
</p>

<p>
		<td>d</td>
</p>

<p>
		<td>Day of the month as a number with no leading zero for single-digit days.</td>
</p>

<p>
	</tr>
</p>

<p>
	<tr>
</p>

<p>
		<td>dd</td>
</p>

<p>
		<td>Day of the month as a number with a leading zero for single-digit days.</td>
</p>

<p>
	</tr>
</p>

<p>
	<tr>
</p>

<p>
		<td>ddd</td>
</p>

<p>
		<td>Three-letter abbreviation for day of the week</td>
</p>

<p>
	</tr>
</p>

<p>
	<tr>
</p>

<p>
		<td>dddd</td>
</p>

<p>
		<td>Full name of the day of the week.</td>
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
		<td>Month as a number with no leading zero for single-digit months.</td>
</p>

<p>
	</tr>
</p>

<p>
	<tr>
</p>

<p>
		<td>mm</td>
</p>

<p>
		<td>Month as a number with a leading zero for single-digit months.</td>
</p>

<p>
	</tr>
</p>

<p>
	<tr>
</p>

<p>
		<td>mmm</td>
</p>

<p>
		<td>Three-letter abbreviation for the month.</td>
</p>

<p>
	</tr>
</p>

<p>
	<tr>
</p>

<p>
		<td>mmmm</td>
</p>

<p>
		<td>Full name of the month.</td>
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
		<td>Last two digits of year with no leading zero for years less than 10. </td>
</p>

<p>
	</tr>
</p>

<p>
	<tr>
</p>

<p>
		<td>yy</td>
</p>

<p>
		<td>Last two digits of year with a leading zero for years less than 10.</td>
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
		<td>Four digit year.</td>
</p>

<p>
	</tr>
</p>

<p>
	<tr>
</p>

<p>
		<td>gg</td>
</p>

<p>
		<td>Period/era</td>
</p>

<p>
	</tr>
</p>

<p>
	<tr>
</p>

<p>
		<td>short</td>
</p>

<p>
		<td>Java short date format</td>
</p>

<p>
	</tr>
</p>

<p>
	<tr>
</p>

<p>
		<td>medium</td>
</p>

<p>
		<td>Java medium date format</td>
</p>

<p>
	</tr>
</p>

<p>
	<tr>
</p>

<p>
		<td>long</td>
</p>

<p>
		<td>Java lomg date format</td>
</p>

<p>
	</tr>
</p>

<p>
	<tr>
</p>

<p>
		<td>full</td>
</p>

<p>
		<td>Java full date format</td>
</p>

<p>
	</tr>
</p>

<p>
</table>
</p>

<p>
		
</p>

<p>
There is a wide variety of ways you can format your dates using DateFormat().  Here are some examples:
</p>

<pre><code class="language-markup">&lt;cfset thedate = now()&gt;
&lt;cfoutput&gt;
TheDate = #DateFormat(TheDate)#
&lt;p&gt;
m/d/yy: #DateFormat(TheDate, 'm/d/yy')#&lt;br&gt;
mm/dd/yy: #DateFormat(TheDate, 'mm/dd/yy')#&lt;br&gt;
mm/dd/yyyy: #DateFormat(TheDate, 'mm/dd/yyyy')#&lt;br&gt;
dd/mm/yyyy: #DateFormat(TheDate, 'dd/mm/yyyy')#&lt;br&gt;
dd mmm yy: #DateFormat(TheDate, 'dd mmm yy')#&lt;br&gt;
dddd mmmm dd, yyyy: #DateFormat(TheDate, 'dddd mmmm dd, yyyy')#
&lt;/cfoutput&gt;
</code></pre>

<p>
Note that DateFormat() supports U.S. date formats only.  To use a locale specific date format, use the LSDateFormat() function.   LSDateFormat() returns a locale specific date format according to the mask you provide.  If no mask is specified, LSDateFormat() uses the locale specific default.  This can vary depending on the locale your server is set to.  Valid date masks are the same as for the DateFormat() function.  
</p>

<p>
Why ColdFusion doesn't have a combined function for formatting dates and times is beyond me.  If you need to format the time portion of a date/time object, you''ll need to use the TimeFormat() function:
</p>

<pre><code class="language-markup">TimeFormat(time [, mask])
</code></pre>

<p>
TimeFormat() returns time formatted according to the mask you provide.  If no value is specified for mask, TimeFormat() uses the default hh:mm tt.  Valid entries for mask are:
</p>

<p>
<table>
</p>

<p>
	<tr>
</p>

<p>
		<td>h</td>
</p>

<p>
		<td>Hours based on a 12-hour clock with no leading zeros for single-digit hours</td>
</p>

<p>
	</tr>
</p>

<p>
	<tr>
</p>

<p>
		<td>hh</td>
</p>

<p>
		<td>Hours based on a 12-hour clock with leading zeros for single-digit hours</td>
</p>

<p>
	</tr>
</p>

<p>
	<tr>
</p>

<p>
		<td>H</td>
</p>

<p>
		<td>Hours based on a 24-hour clock with no leading zeros for single-digit hours</td>
</p>

<p>
	</tr>
</p>

<p>
	<tr>
</p>

<p>
		<td>HH</td>
</p>

<p>
		<td>Hours based on a 24-hour clock with leading zeros for single-digit hours</td>
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
		<td>Minutes with no leading zero for single-digit minutes</td>
</p>

<p>
	</tr>
</p>

<p>
	<tr>
</p>

<p>
		<td>mm</td>
</p>

<p>
		<td>Minutes with a leading zero for single-digit minutes</td>
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
		<td>Seconds with no leading zero for single-digit seconds</td>
</p>

<p>
	</tr>
</p>

<p>
	<tr>
</p>

<p>
		<td>ss</td>
</p>

<p>
		<td>Seconds with a leading zero for single-digit seconds</td>
</p>

<p>
	</tr>
</p>

<p>
	<tr>
</p>

<p>
		<td>t</td>
</p>

<p>
		<td>Single character meridian, either A or P</td>
</p>

<p>
	</tr>
</p>

<p>
	<tr>
</p>

<p>
		<td>tt</td>
</p>

<p>
		<td>Multi character meridian, either AM or PM</td>
</p>

<p>
	</tr>
</p>

<p>
	<tr>
</p>

<p>
		<td>short</td>
</p>

<p>
		<td>Java short time format</td>
</p>

<p>
	</tr>
</p>

<p>
	<tr>
</p>

<p>
		<td>medium</td>
</p>

<p>
		<td>Java medium time format</td>
</p>

<p>
	</tr>
</p>

<p>
	<tr>
</p>

<p>
		<td>long</td>
</p>

<p>
		<td>Java lomg time format</td>
</p>

<p>
	</tr>
</p>

<p>
	<tr>
</p>

<p>
		<td>full</td>
</p>

<p>
		<td>Java full time format</td>
</p>

<p>
	</tr>
</p>

<p>
</table>
</p>

<p>
Examples:
</p>

<pre><code class="language-markup">&lt;cfset thetime = now()&gt;
&lt;cfoutput&gt;
TheTime = #TimeFormat(TheTime)#
&lt;p&gt;
TimeFormat(TheTime, 'h:m:s'): #TimeFormat(TheTime, 'h:m:s')#&lt;br&gt;
TimeFormat(TheTime, 'h:m:s t'): #TimeFormat(TheTime, 'h:m:s t')#&lt;br&gt;
TimeFormat(TheTime, 'hh:mm:ss'): #TimeFormat(TheTime, 'hh:mm:ss')#&lt;br&gt;
TimeFormat(TheTime, 'hh:mm:ss tt'): #TimeFormat(TheTime, 'hh:mm:ss tt')#&lt;br&gt;
TimeFormat(TheTime, 'H:M:ss'): #TimeFormat(TheTime, 'H:M:s')#&lt;br&gt;
TimeFormat(TheTime, 'HH:MM:ss'): #TimeFormat(TheTime, 'HH:MM:ss')#&lt;br&gt;
&lt;/cfoutput&gt;
</code></pre>

<p>
Locale specific times are formatted using LSTimeFormat().  This works identically to the TimeFormat() function, and uses the same masks.  If no mask is provided, the function reverts to the locale specific default.
</p>



