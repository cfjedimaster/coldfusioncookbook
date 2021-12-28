---
title: How can I generate static HTML from a dynamic ColdFusion page?
published: February 13, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Caching
permalink: How-can-I-generate-static-HTML-from-a-dynamic-ColdFusion-page.html
entryid: 56
---

<h3>How can I generate static HTML from a dynamic ColdFusion page?</h3>

<p>
One very powerful caching technique is to run your ColdFusion code to generate a dynamic web page, and then write the contents of the dynamic page to a static HTML file.  The static page can then be loaded time and time again without the expense of having to rebuild the page.  
</p>

<p>
To acomplish this task, ypou can use use a combination of the ColdFusion &lt;cfsavecontent&gt; and &lt;cffile&gt; tags, or the ColdFusion scheduling engine to write the HTML generated from running a dynamic page to a static HTML file. 
</p>

<p>
The first method to generate and static documents from dynamic content is to use a combination of the ColdFusion &lt;cfsavecontent&gt; and &lt;cffile&gt; tags.  The &lt;cfsavecontent&gt; tag stores the generated output from a block of ColdFusion and HTML code into a varaible.  So one you have that varaible, it is a simple matter of using the &lt;cffile&gt; tag to write the data to a static HTML file.  The following code shows a sample of this technique:
</p>

<pre><code class="language-markup">&lt;!--- Create cached contents (HTML) ---&gt;
&lt;cfsavecontent variable=&quot;cachedOutput&quot;&gt;
  &lt;html&gt;
  &lt;head&gt;
  &lt;title&gt;Cached File Example&lt;/title&gt;
  &lt;/head&gt;
	&lt;body&gt;
  &lt;h3&gt;Cached File Example&lt;/h3&gt;
	
  &lt;cfloop index=&quot;loopOn&quot; from=&quot;1&quot; to=&quot;10&quot;&gt;
	  &lt;cfoutput&gt;The loop is on: #loopOn#&lt;br&gt;&lt;/cfoutput&gt;
  &lt;/cfloop&gt;
	
  &lt;/body&gt;
  &lt;/html&gt;  	
&lt;/cfsavecontent&gt;
&lt;!--- Write cached contents (HTML) to file ---&gt;
&lt;cffile action=&quot;write&quot;
file=&quot;C:\temp\cachedFile.html&quot;
output=&quot;#cachedOutput#&quot;&gt;
</code></pre>

<p>
A second way to generate static documents from dynamic content is to use the ColdFusion scheduling engine.  Along with the ability to generate static documents from dynamic content, using the ColdFusion scheduling engine gives you the added ability to automatically update your static documents on whatever schedule you may require.
</p>

<p>
There are two main options for working with the ColdFusion scheduling engine.  The first option is by way of the ColdFusion Administrator, and the second is by using the &lt;cfschedule&gt; tag.  For our example, we will use this second method.
</p>

<p>
The real magic of using the ColdFusion scheduling engine to generate static documents from dynamic content lies in the publish attribute.  If this attribute is set to yes, then the results of the page the scheduled task runs will be saved to disk (as per the file and path attributes).  Beyond this, we are simply telling the ColdFusion scheduling engine what page to run, and how often the page should be ran.  Some sample code using this technique would look as follows:
</p>

<pre><code class="language-markup">&lt;cfschedule action = &quot;update&quot;
  task = &quot;createStaticPage&quot; 
  operation = &quot;httpRequest&quot;
  file = &quot;cachedFile.html&quot;
  path = &quot;C:\inetpub\wwwroot\&quot;
  startDate = &quot;2/13/2006&quot;
  startTime = &quot;12:00 PM&quot;
  url = &quot;http://127.0.0.1/createPage.cfm&quot;
  publish = &quot;yes&quot;
  interval = &quot;3600&quot;
  resolveURL = &quot;yes&quot;&gt;
</code></pre>



