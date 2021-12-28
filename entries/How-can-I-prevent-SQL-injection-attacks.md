---
title: How can I prevent SQL injection attacks?
published: January 19, 2006
author: James Holmes
authorwebsite: http://jr-holmes.coldfusionjournal.com/
categories: Database / SQL
permalink: entries/How-can-I-prevent-SQL-injection-attacks.html
entryid: 36
---

<h3>How can I prevent SQL injection attacks?</h3>

<p>
SQL injection attacks occur when a client manipulates a web page to pass invalid data to a query. This can be down to force errors, bypass security, or even delete data. The &lt;cfqueryparam&gt; tag prevents SQL injection by binding values into the query; the bound values cannot be interpreted as SQL. It also results in faster queries.
</p>

<pre><code class="language-markup">&lt;cfquery name=&quot;QCheckUser&quot; datasource=&quot;blahblah&quot;&gt;
  SELECT *
    FROM USERS
   WHERE username = '#FORM.username#' 
     AND password = '#FORM.password#'
&lt;/cfquery&gt;
</code></pre>

<p>
becomes
</p>

<pre><code class="language-markup">&lt;cfquery name=&quot;QCheckUser&quot; datasource=&quot;blahblah&quot;&gt;
  SELECT *
    FROM USERS
   WHERE username = &lt;cfqueryparam cfsqltype=&quot;cf_sql_varchar&quot; value=&quot;#FORM.username#&quot;&gt; 
     AND password = &lt;cfqueryparam cfsqltype=&quot;cf_sql_varchar&quot; value=&quot;#FORM.password#&quot;&gt;
&lt;/cfquery&gt;
</code></pre>

<p>
In general, &lt;cfqueryparam&gt; should be used whenever a dynamic attribute is specified in a query.
</p>



