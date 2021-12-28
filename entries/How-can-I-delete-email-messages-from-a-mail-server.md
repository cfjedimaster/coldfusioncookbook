---
title: How can I delete email messages from a mail server?
published: July 17, 2008
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Email
permalink: entries/How-can-I-delete-email-messages-from-a-mail-server.html
entryid: 147
---

<h3>How can I delete email messages from a mail server?</h3>

<p>
Use &lt;cfpop&gt; with the action attribute set to 'delete' and the messagenumber attribute or uuid attribute set to the message you wish to delete.
</p>

<pre><code class="language-markup">&lt;cfpop
  action=&quot;delete&quot;
  server=&quot;SERVER_NAME&quot;
  username=&quot;USERNAME&quot;
  password=&quot;PASSWORD&quot;
  messagenumber=&quot;MESSAGENUMBER&quot; 
</code></pre>

<p>
This entry was based on a suggestion by Stefan Leroux
</p>



