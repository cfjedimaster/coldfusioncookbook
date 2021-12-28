---
title: How do I remove repeated values from a list?
published: December 12, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Lists
permalink: How-do-I-remove-repeated-values-from-a-list.html
entryid: 121
---

<h3>How do I remove repeated values from a list?</h3>

<p>
The ListDeleteDuplicates(list) UDF found on  <a href= "http://www.cflib.org">cflib</a> is a great example of how to accomplish this task.
</p>

<p>
The UDF works by creating a copy of the list. Before it adds an item to the new list, it checks to see if it doesn't already exist.
</p>

<pre><code class="language-markup">&lt;cfscript&gt;
/**
 * Case-sensitive function for removing duplicate entries in a list.
 * Based on dedupe by Raymond Camden
 * 
 * @param list The list to be modified. 
 * @return Returns a list. 
 * @author Jeff Howden (jeff@members.evolt.org) 
 * @version 1, March 21, 2002 
 */
function ListDeleteDuplicates(list) {
  var i = 1;
  var delimiter = ',';
  var returnValue = '';
  if(ArrayLen(arguments) GTE 2)
    delimiter = arguments[2];
  list = ListToArray(list, delimiter);
  for(i = 1; i LTE ArrayLen(list); i = i + 1)
    if(NOT ListFind(returnValue, list[i], delimiter))
      returnValue = ListAppend(returnValue, list[i], delimiter);
  return returnValue;
}
&lt;/cfscript&gt;
</code></pre>

<p>
Example of calling this UDF
</p>

<pre><code class="language-markup">&lt;cfset myList = &quot;apples,oranges,apples,bananas,ORANGES&quot;&gt;
&lt;cfoutput&gt;
List before removing dupes: #myList#&lt;br&gt;
List after removing dupes: #ListDeleteDuplicates(myList)#
&lt;/cfoutput&gt; 
</code></pre>



