---
title: How do you force an application to use SSL?
published: January 27, 2006
author: Terrence Ryan
authorwebsite: http://www.numtopia.com/terry
categories: Security
permalink: entries/How-do-you-force-an-application-to-use-SSL.html
entryid: 45
---

<h3>How do you force an application to use SSL?</h3>

<p>
If you want to force your application (or a portion of it) to use SSL, you can simply check one of the CGI variables, server_port_secure.
</p>

<pre><code class="language-markup">&lt;cfif not cgi.server_port_secure&gt;
	&lt;cflocation url=&quot;https://#cgi.server_name##cgi.script_name#?#cgi.query_string#&quot; /&gt;
&lt;/cfif&gt;
</code></pre> 

<p>
The code block above makes use of four CGI variables. The first one, cgi.server_port_secure, will be true if the current request is on a secure server.  (Technically it seems to return 0 or 1, which can be treated as false and true in ColdFusion.) The variable cgi.server_name represents the current server. The variable cgi.script_name will represent the current document. (However this will not be the case when ColdFusion is using a context root of anything but /.) Lastly, the variable cgi.query_string will represent anything after the ? character in the URL. If blank, nothing will be passed.
As a general warning, CGI variables can behave differently between different web servers, versions of web servers, web browsers, and many other factors. In general, care should be taken when using CGI variables.
</p>

