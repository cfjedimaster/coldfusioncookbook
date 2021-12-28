---
title: How can I use session variables to determine the date of a user's last visit?
published: June 30, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Application Management
permalink: How-can-I-use-session-variables-to-determine-the-date-of-a-users-last-visit.html
entryid: 96
---

<h3>How can I use session variables to determine the date of a user's last visit?</h3>

<p>
While the client scope has this functionality built in (client.lastVisit), with the session scope you will need to set your own variable to track a user's last visit date. On your Application.CFC page's onRequestStart() method, set a session variable with the current date time.  This session variable will then be updated on each new page request.  
</p>

<pre><code class="language-markup">&lt;cffunction name=&quot;onRequestStart&quot; returnType=&quot;boolean&quot;&gt;
	&lt;cfset session.lastVis =  now()&gt;
&lt;/cffunction&gt;
</code></pre>

<p>
Remember that session variables will usually timeout much sooner then client variables (based on server or local settings), and once a session is timed out, you will loose that user's last visit session variable.  With this in mind, you may want to consider adding some code to your Application.CFC page's onSessionEnd() method to write the session data to a database or file on session end.
</p>

<pre><code class="language-markup">&lt;cffunction name=&quot; onSessionEnd&quot; returnType=&quot;boolean&quot;&gt;
	-insert code to persist session.lastVis to DB or File-
&lt;/cffunction&gt;
</code></pre>



