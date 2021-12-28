---
title: How can I find what machine/server my code is running on?
published: July 3, 2008
author: J.C. Overgaard
authorwebsite: http://yougiveloveabad.name
categories: Miscellaneous
permalink: entries/How-can-I-find-what-machineserver-my-code-is-running-on.html
entryid: 141
---

<h3>How can I find what machine/server my code is running on?</h3>

<p>
You can determine the name of the server your code is running on, as well as the ColdFusion instance that is executing it. This is very useful if you have code that you only want to execute in a development environment, or to easily tell which server in a cluster is executing your request.
</p>

<p>
To retrieve the physical server name:
</p>

<pre><code class="language-markup">&lt;cfset host = CreateObject(&quot;java&quot;, &quot;java.net.InetAddress&quot;).getLocalHost().getHostName();&gt;
</code></pre>

<p>
To retrieve the ColdFusion instance:
</p>

<pre><code class="language-markup">&lt;cfset cfserv = createObject(&quot;java&quot;,&quot;jrunx.kernel.JRun&quot;).getServerName();&gt;
</code></pre>

<p>
Some sample code for a fairly common setup:
</p>

<pre><code class="language-markup">&lt;cfif isNumeric(right(host,1))&gt;&lt;!-- This code was executed on the
###right(host,1)# box in the cluster, by the #cfserv# instance of CF.
--&gt;
&lt;cfelse&gt;&lt;!-- This code was executed on the dev or test box named
#host#, by the #cfserv# instance of CF. --&gt;&lt;/cfif&gt;
</code></pre>

<p>
Of course, you'll probably want to obfuscate that a bit, maybe a switch/case statement renaming them to something recognizable without giving away any of your host or instance names.
</p>

<p>
Another excellent use of this code is for a generic error handler that emails you when something goes wrong:
</p>

<pre><code class="language-markup">&lt;cfmail to=&quot;#me#&quot; from=&quot;#me#&quot; subject=&quot;Problem with #host#-#cfserv# on
#dateformat(NOW(),'m/d/yy')# at #timeformat(NOW(),'h:mm:ss tt')#&quot;&gt;
&lt;cfdump var=&quot;#cfcatch#&quot; format=&quot;text&quot;&gt;
&lt;cfdump var=&quot;#cgi#&quot; format=&quot;text&quot;&gt;
... and so on
&lt;/cfmail&gt;
</code></pre>



