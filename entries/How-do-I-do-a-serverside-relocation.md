---
title: How do I do a server-side relocation?
published: February 19, 2006
author: Hal Helms
authorwebsite: http://halhelms.com/
categories: Miscellaneous
permalink: entries/How-do-I-do-a-serverside-relocation.html
entryid: 59
---

<h3>How do I do a server-side relocation?</h3>

<p>
ColdFusion provides a tag to handle relocating the user, &lt;cflocation&gt;. This tag returns header information to the browser that tells it to load a new URL. If you want to do a completely server-side relocation, you must use one of the underlining Java methods available in ColdFusion:
</p>

<pre><code class="language-markup">&lt;cfset getPageContext().forward('url_here') /&gt;
</code></pre>



