---
title: How can I detect if the browser accepts cookies?
published: May 22, 2006
author: Massimo Foti
authorwebsite: http://www.massimocorner.com
categories: Application Management
permalink: How-can-I-detect-if-the-browser-accepts-cookies.html
entryid: 91
---

<h3>How can I detect if the browser accepts cookies?</h3>

<p>
This script must be placed in an empty page, without any content. Since  the page will never be displayed to the browser. The "real" pages are  yescookie.cfm and nocookie.cfm.
</p>

<p>
Please note we use server-side redirect (forward) instead of client-side  redirect (&lt;cflocation&gt;) since search engine's spiders tend to penalize  websites that perform client-side redirect.
</p>

<p>
As an added bonus, using getPageContext().forward() we keep the same url  visible inside the browser's bar, allowing a better user experience and proper bookmarking.
</p>

<pre><code class="language-markup">&lt;cfif structKeyExists(cookie, &quot;tmtCookieTest&quot;)&gt;
	&lt;cfset getPageContext().forward(&quot;yescookie.cfm&quot;)&gt;
&lt;cfelseif NOT structKeyExists(url, &quot;tmtCookieSend&quot;)&gt;
	&lt;!--- First time the user visit the page, set the cookie  ---&gt;
	&lt;cfcookie name=&quot;tmtCookieTest&quot; value=&quot;Accepts cookies&quot;&gt;
	&lt;!--- The cookie was send, redirect and set the tmtCookieSend flag as  an url variable ---&gt;
	&lt;cfset getPageContext().forward(&quot;#cgi.script_name#?tmtCookieSend=true&quot;)&gt;
&lt;cfelseif structKeyExists(url, &quot;tmtCookieSend&quot;)&gt;
	&lt;!--- We tried sending the cookie, no way, cookies are disabled, get  out of here ---&gt;
	&lt;cfset getPageContext().forward(&quot;nocookie.cfm&quot;)&gt;
&lt;/cfif&gt;
</code></pre>



