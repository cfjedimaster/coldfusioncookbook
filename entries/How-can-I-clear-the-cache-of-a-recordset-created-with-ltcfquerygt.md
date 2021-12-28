---
title: How can I clear the cache of a recordset created with <cfquery>?
published: March 9, 2006
author: Brian Moss
authorwebsite: 
categories: Caching
permalink: entries/How-can-I-clear-the-cache-of-a-recordset-created-with-ltcfquerygt.html
entryid: 72
---

<h3>How can I clear the cache of a recordset created with &lt;cfquery&gt;?</h3>

<p>
Following the post on "How can ColdFusion cache a database query?", it is often necessary to display the results of an updated record instantly after the update transaction completes.  If the cachedwithin attribute of &lt;cfquery&gt; is used in the SQL, the updates will not show until after the time span stipulated has expired.
</p>

<p>
In order to have the results show immediately, you can simply run another sql statement immediately after your update sql has completed.
</p>

<p>
Take your original query used to obtain your recordset.  It contains the cachedwithin attribute with a time set to cache the query for 3 hours:
</p>

<pre><code class="language-markup">&lt;cfquery name=&quot;myQry&quot; datasource=&quot;myDatasource&quot; cachedwithin=&quot;#createTimeSpan(0,3,0,0)#&quot;&gt;
select foo
from tblfoobar
order by bar desc
&lt;/cfquery&gt;
</code></pre>

<p>
Run your update SQL (the 'name' attribute is optional, but a good practice to include it anyway):
</p>

<pre><code class="language-markup">&lt;cfquery name=&quot;myInsertQry&quot; datasource=&quot;myDatasource&quot;&gt;
insert into foobar (foo)
values (thisfoo)
where id = &lt;cfqueryparam value=&quot;1&quot; cfsqltype=&quot;cf_sql_integer&quot;&gt;
&lt;/cfquery&gt;
</code></pre>

<p>
To clear the cache of the 'myQry' query that was generated previously, run another SQL statement immediately after the update and set the cachedwithin attribute to a past time:
</p>

<pre><code class="language-markup">&lt;cfquery name=&quot;myQry&quot; datasource=&quot;myDatasource&quot; cachedwithin=&quot;#CreateTimeSpan(0,0,0,-1)#&quot;&gt;
select foo
from tblfoobar
order by bar desc
&lt;/cfquery&gt;
</code></pre>

<p>
Here's the full update code that can be used:
</p>

<pre><code class="language-markup">&lt;cftransaction&gt;
&lt;cfquery name=&quot;myInsertQry&quot; datasource=&quot;myDatasource&quot;&gt;
insert into foobar (foo)
values (thisfoo)
where id = &lt;cfqueryparam value=&quot;1&quot; cfsqltype=&quot;cf_sql_integer&quot;&gt;
&lt;/cfquery&gt;
&lt;cfquery name=&quot;myQry&quot; datasource=&quot;myDatasource&quot; cachedwithin=&quot;#createTimeSpan(0,0,0,-1)#&quot;&gt;
select foo
from tblfoobar
order by bar desc
&lt;/cfquery&gt;
&lt;/cftransaction&gt;
</code></pre>

<p>
Remember, the 'clear' query must be the exact same syntax as the original query or it will not work.  It's also a good practice to wrap your SQL transactions in the &lt;cftransaction&gt; tag.  In case some sort of error occurs during the db write, the chance of chance of data corruption is reduced.
</p>



