---
title: How can I send mail with ColdFusion that will not generate auto-reponsder (vacation) messages?
published: July 7, 2008
author: Kamru Miah
authorwebsite: 
categories: Email
permalink: How-can-I-send-mail-with-ColdFusion-that-will-not-generate-autoreponsder-vacation-messages.html
entryid: 143
---

<h3>How can I send mail with ColdFusion that will not generate auto-reponsder (vacation) messages?</h3>

<p>
Use &lt;cfmailparam name="Precedence" value="bulk"&gt; or &lt;cfmailparam name="Precedence" value="list"&gt; after the &lt;cfmail&gt; tag and the email server is 'told' to avoid sending any vacation messages.
</p>

<pre><code class="language-markup">&lt;cfmail 
to = &quot;recipient&quot;
subject = &quot;message subject&quot;
from = &quot;sender&quot;&gt;
&lt;cfmailparam name=&quot;Precedence&quot; value=&quot;bulk&quot;&gt;
&lt;/cfmail&gt;
</code></pre>



