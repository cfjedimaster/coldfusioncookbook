---
title: How do I migrate from Application.cfm to Application.cfc?
published: December 26, 2006
author: Raymond Camden
authorwebsite: http://www.raymondcamden.com
categories: Application Management
permalink: entries/How-do-I-migrate-from-Applicationcfm-to-Applicationcfc.html
entryid: 124
---

<h3>How do I migrate from Application.cfm to Application.cfc?</h3>

<p>
One of the best new features of ColdFusion 7 is the Application.cfc file. This allows for much more control over the ColdFusion application. In general the process involves migrating settings (for example, enabling client and session management) and code that would handle various events. First lets look at settings. This &lt;cfapplication&gt; tag represents something you might have used in an Application.cfm file:
</p>

<pre><code class="language-markup">&lt;cfapplication name=&quot;test&quot; clientManangement=false sessionManagement=true&gt;
</code></pre>

<p>
In the Application.cfc file, these because values in the This scope:
</p>

<pre><code class="language-markup">&lt;cfset this.name=&quot;this&quot;&gt;
&lt;cfset this.clientManagement=false&gt;
&lt;cfset this.sessionManagement=true&gt;
</code></pre>

<p>
Another common thing people do in Application.cfm is run code when the Application starts up. Developers typically check for the existence of a particular Application variable to determine if the code has already run.
</p>

<pre><code class="language-markup">&lt;cfif not structKeyExists(application, &quot;init&quot;)&gt;
    &lt;cfset application.dsn = &quot;foo&quot;&gt;
    &lt;cfset application.init = true&gt;
&lt;/cfif&gt;
</code></pre>

<p>
In the Application.cfc file, this can be done simpler. Since the Application.cfc file supports the idea of a method that runs when the application starts (amongst other events), there is no need to create a "flag" variable to mark that the code has been run. The above code can be replaced with the following method:
</p>

<pre><code class="language-markup">&lt;cffunction name=&quot;onApplicationStart&quot; returnType=&quot;boolean&quot; output=&quot;false&quot;&gt;
    &lt;cfset application.dsn = &quot;foo&quot;&gt;
    &lt;cfreturn true&gt;
&lt;/cffunction&gt;
</code></pre>

<p>
For more information about migrating from Application.cfm, Adobe provides a <a href="http://livedocs.macromedia.com/coldfusion/7/htmldocs/wwhelp/wwhimpl/common/html/wwhelp.htm?context=ColdFusion_Documentation&file=00001123.htm">quick guide</a> in the Live Docs.
</p>



