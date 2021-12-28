---
title: How do I parse RSS feeds?
published: December 20, 2008
author: Raymond Camden
authorwebsite: http://www.raymondcamden.com
categories: Strings
permalink: entries/How-do-I-parse-RSS-feeds.html
entryid: 154
---

<h3>How do I parse RSS feeds?</h3>

<p>
RSS is a form of syndication in use by almost all blogs and many other types of web sites. It is a simple way to list, via XML, the latest content that has been updated on a web site. While parsing XML isn't difficult in ColdFusion, to work with RSS you have to have a good understanding of both the multiple "flavors" or RSS in use today as well a deep understanding of how the content is encoded within the XML. Luckily ColdFusion makes this relatively easy with the &lt;CFFEED&gt; tag. 
</p>

<p>
As a simple example, consider this code:
</p>

<pre><code class="language-markup">&lt;cffeed source=&quot;http://www.coldfusionjedi.com/rss.cfm&quot; query=&quot;content&quot;&gt;
&lt;cfdump var=&quot;#content#&quot;&gt;
</code></pre>

<p>
The source used in the &lt;cfeed&gt; tag simply points to the RSS file for the site. The query attribute tells ColdFusion to parse the RSS data into a query. You can also use the name attribute to create a structure of data. 
</p>

<p>
In general, that's all you have to do. Sometimes though you do need to know a bit more about the RSS being used in order to properly use it. If you add the properties attribute than ColdFusion will return a structure of data about the RSS feed itself:
</p>

<pre><code class="language-markup">&lt;cffeed source=&quot;http://www.coldfusionjedi.com/rss.cfm&quot; query=&quot;content&quot; properties=&quot;p&quot;&gt;
</code></pre>

<p>
This can help you determine the best way to use the parsed data.
</p>



