---
title: How can I retrieve attachments from an email message?
published: July 17, 2008
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Email
permalink: How-can-I-retrieve-attachments-from-an-email-message.html
entryid: 148
---

<h3>How can I retrieve attachments from an email message?</h3>

<p>
Use &lt;cfpop&gt; with the action attribute set to 'getall' and the attachmentpath attribute set to the directory on your server that you want to save any attachments. 
</p>

<p>
You can then loop over the resulting query object to perform any other required logic such as logging the attachment information
</p>

<pre><code class="language-markup">&lt;!--- open mailbox ---&gt;
&lt;cfpop
  action=&quot;getall&quot;
  name=&quot;Q_emailGetAll&quot;
  server=&quot;SERVER_NAME&quot;
  username=&quot;USERNAME&quot;
  password=&quot;PASSWORD&quot;
  attachmentpath=&quot;\\SERVER_NAME\FOLDER\&quot;&gt;
&lt;!--- result set is a query object ---&gt;
&lt;cfloop query=&quot;Q_emailGetAll&quot;&gt;
     &lt;cfoutput&gt;
     #Q_emailGetAll.attachments#
     #Q_emailGetAll.attachmentfiles#
     &lt;/cfoutput&gt;
&lt;/cfloop&gt;		 
</code></pre>

<p>
This entry was based on a suggestion by Stefan Leroux
</p>



