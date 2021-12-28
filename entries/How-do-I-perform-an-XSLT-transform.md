---
title: How do I perform an XSLT transform?
published: June 13, 2006
author: Bif
authorwebsite: http://www.biff.org
categories: XML
permalink: entries/How-do-I-perform-an-XSLT-transform.html
entryid: 102
---

<h3>How do I perform an XSLT transform?</h3>

<p>
Here's a simple example of transforming an XML file using an XSLT stylesheet that are both located in the same directory as the running ColdFusion script:
</p>

<pre><code class="language-markup">&lt;cfset xmldoc = xmlParse(expandPath(&quot;input.xml&quot;))&gt;
&lt;cffile action=&quot;read&quot; file=&quot;#expandPath('transform.xsl')#&quot; variable=&quot;xmltrans&quot;&gt;
&lt;cfoutput&gt;#xmlTransform(xmldoc, xmltrans)#&lt;/cfoutput&gt;
</code></pre>



