---
title: How can ColdFusion work with ZIP and JAR files?
published: December 12, 2007
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: File and Directory Access
permalink: entries/How-can-ColdFusion-work-with-ZIP-and-JAR-files.html
entryid: 137
---

<h3>How can ColdFusion work with ZIP and JAR files?</h3>

<p>
Use the &lt;cfzip&gt; and the &lt;cfzipparam&gt; tags.
</p>

<p>
&lt;cfzip&gt; provides access to ZIP and JAR files with the following actions: 
</p>

<p>
delete:  Deletes one or more files from the file. 
</p>

<p>
list: Lists the contents of the file. 
</p>

<p>
read: Reads the contents of the file into a variable. 
</p>

<p>
readBinary:  Reads the contents of a binary archived file into a variable. 
</p>

<p>
unzip:  Extracts files from the ZIP or JAr file. 
</p>

<p>
zip: Compress files into a ZIP or JAR file. 
</p>

<pre><code class="language-markup">&lt;cfzip file=&quot;c:/foo.jar&quot; action=&quot;list&quot; name=&quot;myVar&quot;&gt;
&lt;cfdump var=&quot;#myVar#&quot;&gt;
</code></pre>

<p>
Use the &lt;cfzipparam&gt; tag with the &lt;cfzip&gt; tag to zip, extract, or delete multiple files or directories. For example:
</p>

<pre><code class="language-markup">&lt;!--- This example shows how to update a ZIP file with files from multiple locations, each with a different filter. ---&gt;
&lt;cfzip file=&quot;c:\foo.jar&quot; action=&quot;zip&quot;&gt;
 &lt;cfzipparam source=&quot;c:\test1\file1.txt&quot;&gt;
 &lt;cfzipparam source=&quot;c:\test2\test3&quot; recurse=&quot;yes&quot;&gt;
&lt;/cfzip&gt;
</code></pre>



