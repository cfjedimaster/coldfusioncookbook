---
title: How do I know when a user's session ends?
published: January 16, 2006
author: Raymond Camden
authorwebsite: http://www.raymondcamden.com
categories: Application Management
permalink: entries/How-do-I-know-when-a-users-session-ends.html
entryid: 30
---

<h3>How do I know when a user's session ends?</h3>

<p>
You can run code when a user session end's by using the onSessionEnd method of the Application.cfc file. The following example will log to a file:
</p>

<pre><code class="language-markup">&lt;cffunction name=&quot;onSessionEnd&quot; returnType=&quot;void&quot; output=&quot;false&quot;&gt;
    &lt;cfargument name=&quot;sessionScope&quot; type=&quot;struct&quot; required=&quot;true&quot;&gt;
    &lt;cfargument name=&quot;appScope&quot; type=&quot;struct&quot; required=&quot;false&quot;&gt;
    &lt;cflog file=&quot;#arguments.appScope.applicationName#&quot; text=&quot;Session ended.&quot;&gt;
&lt;/cffunction&gt;
</code></pre>

<p>
Note that within the onSessionEnd method you cannot address the session or application scopes directly. Instead you reference them via the arguments automatically passed to the method. You can't output anything from this method since, obviously, no user is around to see the output.
</p>

<p>
Lastly - if you use J2EE session variables, you will notice that your session ends when your close the browser. Actually, your session is not ending. Instead, when you relaunch your browser, a new session is created. Therefore you cannot close your browser as a means to test this code. Instead, you must wait the complete amount of time it takes for sessions to expire in your application. (If not specified, it will default to a value set in the ColdFusion administrator - usually 20 minutes.)
</p>



