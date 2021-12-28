---
title: How do I get the SQL used to generate a query?
published: May 20, 2006
author: Raymond Camden
authorwebsite: http://www.raymondcamden.com
categories: Database / SQL
permalink: entries/How-do-I-get-the-SQL-used-to-generate-a-query.html
entryid: 90
---

<h3>How do I get the SQL used to generate a query?</h3>

<p>
Most queries written in ColdFusion will contain one or more dynamic portions. If you want to get the SQL that was actually passed to the database, use the result attribute of the &lt;cfquery&gt; tag:
</p>

<pre><code class="language-markup">&lt;cfset name = &quot;e&quot;&gt;
&lt;cfquery name=&quot;getIt&quot; datasource=&quot;cfartgallery&quot; result=&quot;result&quot;&gt;
select   artistid
from   artists
where   lastname like &lt;cfqueryparam cfsqltype=&quot;cf_sql_varchar&quot; value=&quot;%#name#%&quot; maxlength=&quot;255&quot;&gt;
&lt;/cfquery&gt;
&lt;cfdump var=&quot;#result#&quot;&gt;
</code></pre>

<p>
The result attribute returns a structure with keys that relate to the query. The keys that you would be concerned about our SQL and SQLParameters. The SQL key will contain the sql that was passed to the database. Each and every &lt;cfqueryparam&gt; tag that was used will be replaced with a question mark. The SQLParemeters key will contain an array of values that correspond to each question mark.
</p>



