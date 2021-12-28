---
title: How do I programmatically create a new datasource?
published: February 15, 2007
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Database / SQL,Miscellaneous
permalink: entries/How-do-I-programmatically-create-a-new-datasource.html
entryid: 128
---

<h3>How do I programmatically create a new datasource?</h3>

<p>
The short answer is to use the Coldfusion Administrator API.
</p>

<p>
The following is taken directly from the ColdFusion documentation:
</p>

<p>
You can perform most ColdFusion MX Administrator tasks programmatically using the Administrator API. The Administrator API consists of a set of ColdFusion components (CFCs) that contain methods you call to perform Administrator tasks. For example, you use the setMSQL method of datasource.cfc to add a SQL Server data source. 
</p>

<pre><code class="language-markup">&lt;cfscript&gt;
   // Login is always required. This example uses a single line of code.
   createObject(&quot;component&quot;,&quot;cfide.adminapi.administrator&quot;).login(&quot;admin&quot;);
   // Instantiate the data source object.
   myObj = createObject(&quot;component&quot;,&quot;cfide.adminapi.datasource&quot;);
   // Required arguments for a data source.
   stDSN = structNew();
   stDSN.driver = &quot;MSSQLServer&quot;;
   stDSN.name=&quot;northwind_MSSQL&quot;;
   stDSN.host = &quot;10.1.147.73&quot;;
   stDSN.port = &quot;1433&quot;;
   stDSN.database = &quot;northwind&quot;;
   stDSN.username = &quot;sa&quot;;
   // Optional and advanced arguments.
   stDSN.login_timeout = &quot;29&quot;;
   stDSN.timeout = &quot;23&quot;;
   stDSN.interval = 6;
   stDSN.buffer = &quot;64000&quot;;
   stDSN.blob_buffer = &quot;64000&quot;;
   stDSN.setStringParameterAsUnicode = &quot;false&quot;;
   stDSN.description = &quot;Northwind SQL Server&quot;;
   stDSN.pooling = true;
   stDSN.maxpooledstatements = 999;
   stDSN.enableMaxConnections = &quot;true&quot;;
   stDSN.maxConnections = &quot;299&quot;;
   stDSN.enable_clob = true;
   stDSN.enable_blob = true;
   stDSN.disable = false;
   stDSN.storedProc = true;
   stDSN.alter = false;
   stDSN.grant = true;
   stDSN.select = true;
   stDSN.update = true;
   stDSN.create = true;
   stDSN.delete = true;
   stDSN.drop = false;
   stDSN.revoke = false;
   //Create a DSN.
   myObj.setMSSQL(argumentCollection=stDSN);
&lt;/cfscript&gt;
</code></pre>



