---
title: How to serve pictures from a database
published: May 29, 2007
author: Philippe Randour
authorwebsite: http://www.randour.net
categories: Display and Layout
permalink: How-to-serve-pictures-from-a-database.html
entryid: 130
---

<h3>How to serve pictures from a database</h3>

<p>
You are building a web application for a Human Resources department. One part of this application is the display of an employee profile, including a photograph. All this information is stored in a database. 
</p>

<p>
How do you extract the picture of an employee for display on a web page?
</p>

<p>
Listing 1 presents the script to create the employee table on a Sybase SQL Anywhere database.
</p>

<pre><code class="language-markup">CREATE TABLE employee (
   id          NUMERIC(12,0)  NOT NULL,
   first_name  VARCHAR(50)    NULL,
   last_name   VARCHAR(50)    NULL,
   picture     LONGVARBINARY  NULL
)
</code></pre>

<p>
Listing 2 shows how to use the img tag at our advantage to call a dynamic web page as the source of the picture. Remember that the src attribute is not limited to static files. In fact, it can accept anything as long as it returns a valid picture.
</p>

<pre><code class="language-markup">&lt;img src=&quot;picture.cfm?id=100&quot; /&gt;
</code></pre>

<p>
Listing 3 shows how to use the &lt;cfcontent&gt; tag to send a different content type back to the browser than the default &lt;text/html&gt;. In this example, the response will be a bitmap image extracted from a BLOB field in a database.
</p>

<pre><code class="language-markup">&lt;cfquery name=&quot;MyPicture&quot; datasource=&quot;MyDataSource&quot;&gt;
   select picture
   from person
   where id = #URL.id#
&lt;/cfquery&gt;
&lt;cfcontent type=&quot;image/x-ms-bmp&quot; variable=&quot;#MyPicture.picture#&quot;&gt; 
</code></pre>

