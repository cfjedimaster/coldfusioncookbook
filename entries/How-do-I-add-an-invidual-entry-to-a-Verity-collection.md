---
title: How do I add an invidual entry to a Verity collection?
published: April 18, 2006
author: Raymond Camden
authorwebsite: http://www.raymondcamden.com
categories: Full-Text Searching
permalink: How-do-I-add-an-invidual-entry-to-a-Verity-collection.html
entryid: 84
---

<h3>How do I add an invidual entry to a Verity collection?</h3>

<p>
As you know, the &lt;cfindex&gt; tag allows you to populate a Verity collection. This data can come from the file system (by using either a directory or just a file) or with a custom query. 
</p>

<p>
Once the collection is populated, you do not need to clear the collection to do minor updates. You can use &lt;cfindex&gt; to add content as well. So for example, this code block will add a new file to the collection:
</p>

<pre><code class="language-markup">&lt;cfindex action=&quot;update&quot; collection=&quot;docs&quot; type=&quot;file&quot; key=&quot;c:\mydocs\new.pdf&quot;&gt;
</code></pre>

<p>
You can also use &lt;cfindex&gt; to remove an item as well. If the file used above was deleted, the following code should be used to keep the collection in sync:
</p>

<pre><code class="language-markup">&lt;cfindex action=&quot;delete&quot; collection=&quot;docs&quot; type=&quot;file&quot; key=&quot;c:\mydocs\new.pdf&quot;&gt;
</code></pre>



