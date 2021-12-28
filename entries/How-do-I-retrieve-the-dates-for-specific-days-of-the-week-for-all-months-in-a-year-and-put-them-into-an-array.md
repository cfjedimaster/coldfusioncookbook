---
title: How do I retrieve the dates for specific days of the week for all months in a year, and put them into an array?
published: September 29, 2006
author: Raymond Camden
authorwebsite: http://www.raymondcamden.com
categories: Dates/Times
permalink: entries/How-do-I-retrieve-the-dates-for-specific-days-of-the-week-for-all-months-in-a-year-and-put-them-into-an-array.html
entryid: 113
---

<h3>How do I retrieve the dates for specific days of the week for all months in a year, and put them into an array?</h3>

<p>
While there is no ColdFusion specific function to return this, it is possible to build such functionality using ColdFusion's various date functions. Here is a UDF (user-defined function) as well as an example:
</p>

<pre><code class="language-markup">&lt;cfscript&gt;
function getEveryDOW(dowlist) {
	var year = year(now());
	var day1 = &quot;&quot;;
	var x = &quot;&quot;;
	var thisDOW = &quot;&quot;;
	var result = arrayNew(1);
	var initialDOW = &quot;&quot;;
	var offset = &quot;&quot;;
	
	if(arrayLen(arguments) gte 2) year = arguments[2];
	day1 = createDate(year, 1,1);
	initialDOW = dayOfWeek(day1);
	
	while(year(day1) is year) {
		for(x=1; x lte listlen(dowlist); x=x+1) {
			thisDOW = listGetAt(dowlist, x);
			offset = thisDOW - initialDOW;
			dayToAdd = dateAdd(&quot;d&quot;, offset, day1 );
			arrayAppend(result, dayToAdd);
		}		
		day1 = dateAdd(&quot;ww&quot;, 1, day1);
	}
	return result;
}
&lt;/cfscript&gt;
&lt;cfset dowList = &quot;1,3&quot;&gt;
&lt;cfset dArr = getEveryDow(dowlist)&gt;
&lt;cfdump var=&quot;#dArr#&quot;&gt;
</code></pre>

<p>
The UDF is a little bit complicated so let me explain it. The basic theory behind it is to start with a date object corresponding to the beginning of the year. Figure out what day of the week that is. Then we loop until the end of the year. We do this using dateAdd which lets us jump week by week. Since we knew the original day of the week, we can figure out the desired days of the week by figuring out an offset.
</p>



