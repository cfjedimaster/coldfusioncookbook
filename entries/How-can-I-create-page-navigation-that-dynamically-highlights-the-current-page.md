---
title: How can I create page navigation that dynamically highlights the current page?
published: November 24, 2006
author: Raymond Camden
authorwebsite: http://www.raymondcamden.com
categories: Miscellaneous
permalink: entries/How-can-I-create-page-navigation-that-dynamically-highlights-the-current-page.html
entryid: 120
---

<h3>How can I create page navigation that dynamically highlights the current page?</h3>

<p>
When displaying navigation to the user, it is a good idea to highlight the current page or section that user is currently viewing. This makes it easier for the user to see where they are in the site. There are a couple of ways this can be done, but here is a simple example. First, consider this simple menu:
</p>

<pre><code class="language-markup">&lt;a href=&quot;/&quot;&gt;Home&lt;/a&gt;&lt;br&gt;
&lt;a href=&quot;/about.cfm&quot;&gt;About Us&lt;/a&gt;&lt;br&gt;
&lt;a href=&quot;/products.cfm&quot;&gt;Products&lt;/a&gt;&lt;br&gt;
&lt;a href=&quot;/press.cfm&quot;&gt;Press Releases&lt;/a&gt;&lt;br&gt;
</code></pre>

<p>
By looking at CGI variables, we can determine which page the user is on and highlight it within the navigation. This version simply add a bold tag to the link:
</p>

<pre><code class="language-markup">&lt;a href=&quot;/&quot;&gt;&lt;cfif cgi.script_name is &quot;/index.cfm&quot;&gt;&lt;b&gt;Home&lt;/b&gt;&lt;cfelse&gt;Home&lt;/cfif&gt;&lt;/a&gt;&lt;br&gt;
&lt;a href=&quot;/about.cfm&quot;&gt;&lt;cfif cgi.script_name is &quot;/about.cfm&quot;&gt;&lt;b&gt;About Us&lt;/b&gt;&lt;cfelse&gt;About Us&lt;/cfif&gt;&lt;/a&gt;&lt;br&gt;
&lt;a href=&quot;/products.cfm&quot;&gt;&lt;cfif cgi.script_name is &quot;/products.cfm&quot;&gt;&lt;b&gt;Products&lt;/b&gt;&lt;cfelse&gt;Products&lt;/cfif&gt;&lt;/a&gt;&lt;br&gt;
&lt;a href=&quot;/press.cfm&quot;&gt;&lt;cfif cgi.script_name is &quot;/press.cfm&quot;&gt;&lt;b&gt;Press Releases&lt;/b&gt;&lt;cfelse&gt;Press Releases&lt;/cfif&gt;&lt;/a&gt;&lt;br&gt;
</code></pre>

<p>
This code could be modified to check for just a folder instead of a specific file name. That would then highlight the section that use is in rather than a specific page.
</p>



