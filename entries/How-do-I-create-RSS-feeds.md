---
title: How do I create RSS feeds?
published: December 20, 2008
author: Raymond Camden
authorwebsite: http://www.raymondcamden.com
categories: Strings
permalink: entries/How-do-I-create-RSS-feeds.html
entryid: 155
---

<h3>How do I create RSS feeds?</h3>

<p>
The &lt;cffeed&gt; tag can be used to both read and create RSS feeds. To create an RSS feed, you need two things. First you need the data that will provide the content for RSS feed. Next you need a set of properties that define the RSS feed. Let's begin by getting the data for the feed. &lt;cffeed&gt; supports generating a feed from a query or structure. Most people will want to use a query, so let's begin with that:
</p>

<pre><code class="language-markup">&lt;cfquery name=&quot;entries&quot; datasource=&quot;blogdev&quot; maxrows=&quot;10&quot;&gt;
select   *
from   tblblogentries
&lt;/cfquery&gt;
</code></pre>

<p>
Now that we have the data, we need to create a structure that define the properties for the RSS feed. The most important part of the structure is the type of RSS feed we are creating. ColdFusion supports creating two types of RSS feeds: RSS 2 and Atom 1. To create an RSS 2 feed you would do:
</p>

<pre><code class="language-markup">&lt;cfset p = structNew()&gt;
&lt;cfset p.version = &quot;rss_2.0&quot;&gt;
</code></pre>

<p>
Both RSS 2 and Atom 1 have required and optional properties you can use. For RSS 2, the minimum required properties you must use are title, link, and description. Here is a full example:
</p>

<pre><code class="language-markup">&lt;cfset p = structNew()&gt;
&lt;cfset p.version = &quot;rss_2.0&quot;&gt;
&lt;cfset p.title = &quot;My Feed&quot;&gt;
&lt;cfset p.link = &quot;http://www.linktomysite.com&quot;&gt;
&lt;cfset p.description = &quot;About my site...&quot;&gt;
</code></pre>

<p>
Obviously the value you use for these properties will depend on your site and the RSS feed you are creating. 
</p>

<p>
The last step is to pass both the properties and data to the &lt;cffeed&gt; tag. You can generate either a file or an XML variable. In this example we will create the XML and output it:
</p>

<pre><code class="language-markup">&lt;cffeed action=&quot;create&quot; query=&quot;#entries#&quot; xmlVar=&quot;rss&quot; properties=&quot;#p#&quot;&gt;
&lt;cfcontent type=&quot;text/xml&quot; reset=&quot;true&quot;&gt;&lt;cfoutput&gt;#rss#&lt;/cfoutput&gt;
</code></pre>

<p>
By default, ColdFusion looks at the query for columns with particular names. So for example, in RSS 2 the body of each item in the feed maps to a column named content. If your query columns don't match up with what RSS 2 (or Atom 1) is looking for, you can provide a set of aliases using the columnMap structure. Define a new structure where each key represents a column in RSS 2 and each value represents a column in your data. 
</p>

<pre><code class="language-markup">&lt;cfset c = structNew()&gt;
&lt;cfset c.content = &quot;body&quot;&gt;
&lt;cfset c.publisheddate = &quot;posted&quot;&gt;
</code></pre>

<p>
This code tells ColdFusion to map the body column in the query to the content field in the RSS feed. It also tells ColdFusion to map the posted column to the publisheddate field. Once you have this structure you can pass it to the &lt;cffeed&gt; tag:
</p>

<pre><code class="language-markup">&lt;cffeed action=&quot;create&quot; query=&quot;#entries#&quot; xmlVar=&quot;rss&quot; properties=&quot;#p#&quot; columnMap=&quot;#c#&quot;&gt;
</code></pre>



