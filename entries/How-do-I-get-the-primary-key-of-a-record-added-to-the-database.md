---
title: How do I get the primary key of a record added to the database?
published: July 15, 2008
author: Raymond Camden
authorwebsite: http://www.raymondcamden.com
categories: Database / SQL
permalink: How-do-I-get-the-primary-key-of-a-record-added-to-the-database.html
entryid: 146
---

<h3>How do I get the primary key of a record added to the database?</h3>

<p>
Many people use database tables with autonumber primary keys. These are columns (typically named "id") that the database will provide a value for by simply adding one to the last highest value. So if the last record inserted had an ID value of 5, the next will be 6. (Note that this isn't always true. You can't assume the next value will be one over the last highest value.) If you need to find out what value was used for the primary key, ColdFusion provides a simple way to do that. 
</p>

<p>
To use this feature, you first must provide the result attribute to your cfquery tag. This tells ColdFusion to save information about the query to the variable named by the result attribute. 
</p>

<pre><code class="language-markup">&lt;cfquery datasource=&quot;foo&quot; result=&quot;result&quot;&gt;
insert into people(name,email)
values(&quot;Paris Hilton&quot;, &quot;trash@celebs.com&quot;)
&lt;/cfquery&gt;
</code></pre>

<p>
After running this query a structure named result will be created. Most of the keys of this structure are set, including the sql of the query, recordcount, and other values, however there is a special key that will store the value of the primary key assigned to the insertion. Unfortunately, this key value will vary depending on the database. For SQL Server, the value will be in the IDENTITYCOL key. For Oracle, the value will be in the ROWID key. For Sybase, the value will be in the SYB_IDENTITY key. For Informix, the value will be in the SERIAL_COL key. For MySQL, the value will be in the GENERATED_KEY key.
</p>

<p>
Using the above query as an example and assuming MySQL, you can display the primary key value like so:
</p>

<pre><code class="language-markup">&lt;cfoutput&gt;
The ID of the row I just inserted was #result.generated_key#.
&lt;/cfoutput&gt;
</code></pre>



