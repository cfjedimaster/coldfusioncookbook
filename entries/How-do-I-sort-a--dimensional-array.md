---
title: How do I sort a 2 dimensional array?
published: May 8, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Data Structures
permalink: How-do-I-sort-a--dimensional-array.html
entryid: 87
---

<h3>How do I sort a 2 dimensional array?</h3>

<p>
ColdFusion does not provide a built-in way to sort a multi-dimensional array.  However, there 2 ways to accomplish this task.
</p>

<p>
1) Turn the multi-dimensional array into a query and then use query of queries to sort it.
</p>

<pre><code class="language-markup">&lt;!--- sample array ---&gt;
&lt;cfset arr = arrayNew(2)&gt;
&lt;cfset arr[1][1] = &quot;beta&quot;&gt;
&lt;cfset arr[2][1]  = &quot;bar&quot;&gt;
&lt;cfset arr[3][1]  = &quot;foo&quot;&gt;
&lt;cfset arr[4][1]  = &quot;alpha&quot;&gt;
&lt;cfset arr[1][2]  = &quot;car&quot;&gt;
&lt;cfset arr[2][2] = &quot;boat&quot;&gt;
&lt;cfset arr[3][2] = &quot;bike&quot;&gt;
&lt;cfset arr[4][2] = &quot;car&quot;&gt;
&lt;!--- convert array to CF query ---&gt;
&lt;cfscript&gt;
myQuery = QueryNew(&quot;one,two&quot;);
for (i=1; i LTE ArrayLen(arr); i=i+1) {
	newRow = QueryAddRow(myQuery);
	QuerySetCell(myQuery, &quot;one&quot;, #arr[i][1]# );
	QuerySetCell(myQuery, &quot;two&quot;, #arr[i][2]# );
}
&lt;/cfscript&gt;
&lt;cfdump var= #myQuery#&gt;
&lt;!--- Sort ---&gt;
&lt;cfquery name=&quot;qSort&quot;
dbtype = &quot;query&quot;&gt;
SELECT *
FROM myQuery
ORDER BY one
&lt;/cfquery&gt;
&lt;cfdump var= #qSort#&gt;
</pre> 
2) You can sort single dimension arrays use the built in ColdFusion function arraySort().  So with this in mind, you can pull the array dimension you want to sort by into its own single dimension array and then use arraySort() on this single dimension array.  
<pre><code class="language-markup">var sortArray = ArrayNew(1);
for (i=1; i LTE ArrayLen(arrayToSort); i=i+1) {
	ArrayAppend(sortArray, arrayToSort[i][sortColumn]);
}
</code></pre>

<p>
It is then a simple matter of reordering the rest of your multi-dimensional array based on the new sort order of the single dimension array.
</p>

<pre><code class="language-markup">	theList = ArrayToList(sortArray);
	ArraySort(sortArray, type, order);
	for (i=1; i LTE ArrayLen(sortArray); i=i+1) {
		thePosition = ListFind(theList, sortArray[i]);
		theList = ListDeleteAt(theList, thePosition);
		for (j=1; j LTE ArrayLen(arrayToSort[thePosition]); j=j+1) {
			arrayToReturn[counter][j] = arrayToSort[thePosition][j];
		}
		ArrayDeleteAt(arrayToSort, thePosition);
		counter = counter + 1;
	}
</code></pre>

<p>
The above code was taken from Robert West's ArraySort2D() function  that can be found at: <a href="http://www.cflib.org/udf.cfm?ID=390">http://www.cflib.org/udf.cfm?ID=390</a> 
</p>



