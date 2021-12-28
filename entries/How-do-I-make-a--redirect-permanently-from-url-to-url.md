---
title: How do I make a 301 redirect (permanently) from url1 to url2?
published: June 19, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Miscellaneous
permalink: entries/How-do-I-make-a--redirect-permanently-from-url-to-url.html
entryid: 103
---

<h3>How do I make a 301 redirect (permanently) from url1 to url2?</h3>

<p>
Permanently redirecting traffic using &lt;cfheader&gt;  with statuscode="301" is the best way to ensure that your web-visitors and search engine spiders continue to find content that has permanently moved to a new location.
</p>

<pre><code class="language-markup">&lt;cfheader statuscode=&quot;301&quot; statustext=&quot;Moved permanently&quot;&gt;
&lt;cfheader name=&quot;Location&quot; value=&quot;http://www.newUrl.com&quot;&gt;
</code></pre>



