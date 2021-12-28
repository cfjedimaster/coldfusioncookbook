---
title: How do I return a query from an Excel file?
published: February 9, 2007
author: Kyle Hayes
authorwebsite: http://www.kylehayes.info/
categories: Database / SQL,File and Directory Access
permalink: How-do-I-return-a-query-from-an-Excel-file.html
entryid: 114
---

<h3>How do I return a query from an Excel file?</h3>

<p>
NOTE: To use the below solution, your ColdFusion server must allow you to create Java objects. Many shared hosts do not allow this.
</p>

<p>
Java's JDBC ODBC allows you to connect to a Microsoft Excel file. Then using Java's SQL classes we are able to query this file and return certain tables to a ColdFusion query object.
</p>

<p>
This function returns the ColdFusion query object so that you may use the methodology of "Query of Queries" to return the data that you need.
</p>

<p>
A possible location for this function would be inside a CFC labeled MicrosoftUtil.cfc or something equally descriptive.
</p>

<pre><code class="language-markup">&lt;cffunction name=&quot;getExcelSheet&quot; access=&quot;public&quot; output=&quot;false&quot; returntype=&quot;query&quot;&gt;
		&lt;cfargument name=&quot;filename&quot; required=&quot;true&quot; type=&quot;string&quot; /&gt;
		&lt;cfargument name=&quot;sheetName&quot; required=&quot;true&quot; type=&quot;string&quot; /&gt;
		&lt;cfscript&gt;
			var c = &quot;&quot;;
			var stmnt = &quot;&quot;;
			var rs = &quot;&quot;;
			var sql = &quot;Select * from [#sheetName#$]&quot;;
			var myQuery = &quot;&quot;;
			arguments.filename = expandPath(arguments.filename);
			
			if(len(trim(arguments.filename)) and fileExists(arguments.filename)){
				try{
					CreateObject(&quot;java&quot;,&quot;java.lang.Class&quot;).forName(&quot;sun.jdbc.odbc.JdbcOdbcDriver&quot;);	
					c = CreateObject(&quot;java&quot;,&quot;java.sql.DriverManager&quot;).getConnection(&quot;jdbc:odbc:Driver={Microsoft Excel Driver (*.xls)};DBQ=&quot; &amp; arguments.filename );
					stmnt = c.createStatement();
					rs = stmnt.executeQuery(sql);
					myQuery = CreateObject('java','coldfusion.sql.QueryTable').init(rs);
				}catch(any e){
					// error-handling code
				}
			}
			return myQuery;
		&lt;/cfscript&gt;
	&lt;/cffunction&gt;
</code></pre>

<p>
To use the function simply use the following syntax:
</p>

<pre><code class="language-markup">getExcelSheet(&quot;myFile.xls&quot;,&quot;productsSheet&quot;)
</code></pre>

<p>
Where myFile.xls is a relative path to your Excel file and productsSheet is the name of the sheet inside the Excel file that you would like to return.
</p>



