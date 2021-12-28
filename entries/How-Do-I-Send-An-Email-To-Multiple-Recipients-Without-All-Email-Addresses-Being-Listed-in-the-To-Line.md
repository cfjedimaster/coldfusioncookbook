---
title: How Do I Send An Email To Multiple Recipients Without All Email Addresses Being Listed in the To Line?
published: July 7, 2008
author: Todd Sharp
authorwebsite: http://cfsilence.com
categories: Email
permalink: entries/How-Do-I-Send-An-Email-To-Multiple-Recipients-Without-All-Email-Addresses-Being-Listed-in-the-To-Line.html
entryid: 122
---

<h3>How Do I Send An Email To Multiple Recipients Without All Email Addresses Being Listed in the To Line?</h3>

<p>
Use the query attribute of the &lt;cfmail&gt; tag.  Doing this will iterate once over the cfmail tag for each row in the query.  You must specify the query column that contains the appropriate email address in the to attribute of cfmail.
</p>

<pre><code class="language-markup">&lt;!--- query the database to find out who needs the email ---&gt; &lt;cfquery name=&quot;getEmailAddresses&quot; dataSource=&quot;#theDSN#&quot;&gt; SELECT emailAddress FROM tblUsers &lt;/cfquery&gt;
&lt;!--- set up variables ---&gt;
&lt;cfset variables.msg = &quot;this is a test message&quot;&gt; &lt;cfset variables.subject = &quot;test subject&quot;&gt; &lt;cfset variables.from = &quot;me@ohMy.com&quot;&gt; &lt;cfset variables.server= &quot;mail.ohMy.com&quot;&gt;
&lt;cfmail
from=&quot;#variables.from#&quot; subject=&quot;#variables.subject#&quot; 
query=&quot;getEmailAddresses&quot;
to=&quot;#emailAddress#&quot;
server=&quot;#variables.server#&quot;&gt;
#variables.msg#
&lt;/cfmail&gt;
</code></pre>



