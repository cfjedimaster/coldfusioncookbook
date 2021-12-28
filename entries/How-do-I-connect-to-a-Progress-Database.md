---
title: How do I connect to a Progress Database
published: January 8, 2007
author: Joe Hammond
authorwebsite: 
categories: Database / SQL
permalink: How-do-I-connect-to-a-Progress-Database.html
entryid: 125
---

<h3>How do I connect to a Progress Database</h3>

<p>
To connect to a Progress 9.1 Database you first need to licensed copy of the Progress Client.
</p>

<p>
Once the client is installed add the Progress classes file path into the
</p>

<p>
MX7 Jrun instance.  If using a developer CFMX make this change to the settings under cfusion. Add a New Classpath
</p>

<p>
example:
</p>

<pre><code class="language-markup">C:\Program Files\PROGRESS\java;
</code></pre>

<p>
Restart CF instance. Search the System Information page to locate the following files in CF Admin
</p>

<pre><code class="language-markup">C:\Program Files\PROGRESS\java\jdbc.jar; C:\Program Files\PROGRESS\java\messages.jar; C:\Program Files\PROGRESS\java\progress.jar; C:\Program Files\PROGRESS\java\prosp.jar; C:\Program Files\PROGRESS\java\prowin.jar;
</code></pre>

<p>
Progress Client requires license key. Once Java invokes the class it searches for the licences verification. So be sure to add the the Progress application to the OS path under Environment variables.
</p>

<pre><code class="language-markup">Ex. path=%path%;C:\Program files\progress\bin
</code></pre>

<p>
Reboot maybe required.
</p>

<p>
Setup Datasource in CF select Driver = other
</p>

<p>
Ex
</p>

<pre><code class="language-markup">CF Data Source Name  = Test
JDBC URL = jdbc:jdbcprogress:T:[host]:[port]:[dbname]
Driver Class = com.progress.sql.jdbc.JdbcProgressDriver
Driver Name = Progress
User Name = [username]
Password  = [password]
</code></pre>

<p>
Some Useful links:
</p>

<p>
JDBC Driver Guide
</p>

<p>
<a href= "http://www.psdn.com/library/entry.jspa?categoryID=296&externalID=1101" target = "newWind">http://www.psdn.com/library/entry.jspa?categoryID=296&externalID=1101</a>
</p>

<p>
SQL-92 Reference
</p>

<p>
<a href = "http://www.psdn.com/library/entry.jspa?externalID=1094&categoryID=296" target = "newwind" >http://www.psdn.com/library/entry.jspa?externalID=1094&categoryID=296</a>
</p>



