---
title: How do I return XML from a CFC that can be used with Spry?
published: March 5, 2007
author: Steve Milburn
authorwebsite: 
categories: XML
permalink: How-do-I-return-XML-from-a-CFC-that-can-be-used-with-Spry.html
entryid: 129
---

<h3>How do I return XML from a CFC that can be used with Spry?</h3>

<p>
There are a few things to look out for when returning XML to Spry.  Make sure you set output=false for both the component and the method to suppress any whitespace that may be included with the returned XML. Also note the &lt;cfcontent&gt; tag directly before returning the XML.  This is not needed for returning XML to other consumers such as Flex, but without it, Spry will not recognize it as valid XML.  Special thanks to Bruce Phillips for pointing this out.  Below is a sample components with 1 method that returns XML that can be consumed by Spry.
</p>

<pre><code class="language-markup">&lt;cfcomponent name=&quot;Baseball&quot; output=&quot;false&quot;&gt;
	
	&lt;cffunction name=&quot;getTeams&quot; access=&quot;remote&quot; returntype=&quot;xml&quot; 
output=&quot;false&quot;&gt;
		&lt;cfset var teams = &quot;&quot; /&gt;
		&lt;cfset var tmp = &quot;&quot; /&gt;
		&lt;cfset var xmlObj = &quot;&quot; /&gt;
		
		&lt;!---
			Create a new query object and populate 5 rows with data.  In most cases
			your application will be retrieving data from a database via 
&lt;cfquery&gt; tag.
		---&gt;
		&lt;cfset teams = queryNew(&quot;Team, Mascot&quot;, &quot;varchar, varchar&quot;) /&gt;		
		&lt;cfset tmp = queryAddRow(teams, 5) /&gt;		
		&lt;cfset tmp = querySetCell(teams, &quot;Team&quot;, &quot;Boston&quot;, 1) /&gt;
		&lt;cfset tmp = querySetCell(teams, &quot;Mascot&quot;, &quot;Red Sox&quot;, 1) /&gt;
		&lt;cfset tmp = querySetCell(teams, &quot;Team&quot;, &quot;New York&quot;, 2) /&gt;
		&lt;cfset tmp = querySetCell(teams, &quot;Mascot&quot;, &quot;Yankees&quot;, 2) /&gt;
		&lt;cfset tmp = querySetCell(teams, &quot;Team&quot;, &quot;Baltimore&quot;, 3) /&gt;
		&lt;cfset tmp = querySetCell(teams, &quot;Mascot&quot;, &quot;Orioles&quot;, 3) /&gt;
		&lt;cfset tmp = querySetCell(teams, &quot;Team&quot;, &quot;Toronto&quot;, 4) /&gt;
		&lt;cfset tmp = querySetCell(teams, &quot;Mascot&quot;, &quot;Blue Jays&quot;, 4) /&gt;
		&lt;cfset tmp = querySetCell(teams, &quot;Team&quot;, &quot;Tampa Bay&quot;, 5) /&gt;
		&lt;cfset tmp = querySetCell(teams, &quot;Mascot&quot;, &quot;Devil Rays&quot;, 5) /&gt;
		
		&lt;!---
			Loop through the query and create XML formatted text, which we will 
then convert
			to an XML document object.  You could also use Ray Camden's toxml.cfc 
component to accomplish this.
		---&gt;
		&lt;cfset xmlObj = &quot;&lt;baseball&gt;&quot; /&gt;		
		&lt;cfoutput query=&quot;teams&quot;&gt;		
			&lt;cfset xmlObj = xmlObj &amp; &quot;&lt;teams&gt;&quot; /&gt;				
			&lt;cfset xmlObj = xmlObj &amp; &quot;&lt;team&gt;&quot; /&gt;
			&lt;cfset xmlObj = xmlObj &amp; &quot;#team#&quot; /&gt;
			&lt;cfset xmlObj = xmlObj &amp; &quot;&lt;/team&gt;&quot; /&gt;
			&lt;cfset xmlObj = xmlObj &amp; &quot;&lt;mascot&gt;&quot; /&gt;
			&lt;cfset xmlObj = xmlObj &amp; &quot;#mascot#&quot; /&gt;
			&lt;cfset xmlObj = xmlObj &amp; &quot;&lt;/mascot&gt;&quot; /&gt;
			&lt;cfset xmlObj = xmlObj &amp; &quot;&lt;/teams&gt;&quot; /&gt;
		&lt;/cfoutput&gt;		
		&lt;cfset xmlObj = xmlObj &amp; &quot;&lt;/baseball&gt;&quot; /&gt;
		
		&lt;!---
			Convert the XML formatted text to an XML document object.
		---&gt;
		&lt;cfset xmlObj = xmlParse(xmlObj) /&gt;
		
		&lt;!---
			Spry will not recognize the returned XML without this line.  Thanks 
to Bruce Phillips (www.brucephillips.name)
			for this tip.
		---&gt;
		&lt;cfcontent type=&quot;application/xml; charset=UTF-8&quot;&gt;
						
		&lt;cfreturn xmlObj /&gt;		
		
	&lt;/cffunction&gt;
	
&lt;/cfcomponent&gt;
</code></pre>



