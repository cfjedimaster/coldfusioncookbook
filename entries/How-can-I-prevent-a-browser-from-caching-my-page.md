---
title: How can I prevent a browser from caching my page?
published: February 7, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Caching
permalink: entries/How-can-I-prevent-a-browser-from-caching-my-page.html
entryid: 54
---

<h3>How can I prevent a browser from caching my page?</h3>

<p>
By default, browsers will try to cache the contents of a page. Because of their dynamic nature, most ColdFusion pages will automatically force a browser to reload them on each visit.  However, you may still want to keep the contents of a more static page (for security or other reasons) from being cached.  In these types of situations, you can use the &lt;cfheader&gt; tag or the html &lt;meta&gt; tag.  
</p>

<p>
Place the following three &lt;cfheader&gt; tags at the top of a page to keep it from being cached:
</p>

<pre><code class="language-markup">&lt;cfheader name=&quot;cache-control&quot; value=&quot;no-cache, no-store, must-revalidate&quot;&gt;
&lt;cfheader name=&quot;pragma&quot; value=&quot;no-cache&quot;&gt;
&lt;cfheader name=&quot;expires&quot; value=&quot;#getHttpTimeString(now())#&quot;&gt;
</code></pre>

<p>
You can also use set a meta tag for content expiration 
</p>

<pre><code class="language-markup">&lt;meta http-equiv=&quot;expires&quot; content=&quot;&lt;cfoutput&gt;#getHttpTimeString(now())#&lt;/cfoutput&gt;&quot;&gt; 
</code></pre>



