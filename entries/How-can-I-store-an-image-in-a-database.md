---
title: How can I store an image in a database?
published: July 8, 2008
author: Matt Evans
authorwebsite: http://www.matevans.co.uk/
categories: Database / SQL,Images
permalink: How-can-I-store-an-image-in-a-database.html
entryid: 144
---

<h3>How can I store an image in a database?</h3>

<p>
To store an image in a database we must first turn the image in a BLOB or Binary Large OBject.
</p>

<p>
Basically this is just the binary data of the image in one entity that can then be stored nice and easily in one field of a DB.
</p>

<p>
Luckily CF8 comes with a little function called imageGetBlob() - below is a little example of how it can be used...
</p>

<p>
First we have to use &lt;cfimage&gt; to create a ColdFusion image variable..
</p>

<pre><code class="language-markup">&lt;cfimage action=&quot;read&quot; 
name=&quot;myImage&quot;
source=&quot;http://www.imagesite.site/myImage.jpg&quot;&gt;
</code></pre>

<p>
We can then use this variable with imageGetBlob()
</p>

<pre><code class="language-markup">&lt;cfset binimage = imageGetBlob(myImage)&gt;
</code></pre>

<p>
The binImage variable can now be inserted into a DB to keep it nice and safe!
</p>

<p>
N.B. This is a binary variable, so any fields used to contain this sort of data should have a suitable data type.
</p>

<p>
To display this image have a look at this article - <a href= "http://www.coldfusioncookbook.com/entry/130/How-to-serve-pictures-from-a-database">http://www.coldfusioncookbook.com/entry/130/How-to-serve-pictures-from-a-database</a>
</p>



