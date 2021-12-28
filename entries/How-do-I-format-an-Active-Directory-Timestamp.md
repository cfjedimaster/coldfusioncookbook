---
title: How do I format an Active Directory Timestamp?
published: July 12, 2006
author: Tariq Ahmed
authorwebsite: http://www.cflex.net/
categories: Dates/Times
permalink: How-do-I-format-an-Active-Directory-Timestamp.html
entryid: 105
---

<h3>How do I format an Active Directory Timestamp?</h3>

<p>
Time in Active Directory is stored in a 64 bit integer that keeps track  of the number of 100-Nanosecond intervals which have passed since  January 1, 1601 (not to be confused with EPOCH, or with Active  Directory's Generalized Time String). The 64 bit value uses 2 32bit parts to store the time.
</p>

<p>
This number, e.g 127944393687163952 can be converted to a local  timestamp such as:
</p>

<pre><code class="language-markup">   adTime = &quot;127944393687163952&quot;;
   cfTime = DateConvert(&quot;utc2Local&quot;,DateAdd('n',adTime / (60*10000000),'1/1/1601')  );
</code></pre>



