---
title: How do I get the username or domain from an email address?
published: February 2, 2006
author: Tariq Ahmed
authorwebsite: http://www.cflex.net/
categories: Strings,Lists
permalink: How-do-I-get-the-username-or-domain-from-an-email-address.html
entryid: 49
---

<h3>How do I get the username or domain from an email address?</h3>

<p>
The obvious use of lists in ColdFusion is to work with a lists of data. However what's cool about list functions is that they can be used for quick extraction of data. 
</p>

<p>
You can consider an email address as a list which uses the @ character as a delimiter. Because of this, you can then use listFirst() and listLast() to quickly grab the two portions of the email address.
</p>

<pre><code class="language-markup">&lt;cfset userName = listFirst(emailAddress,&quot;@&quot;)&gt;
&lt;cfset domainName = listLast(emailAddress,&quot;@&quot;)&gt;
</code></pre>

<p>
		
</p>

<p>
ColdFusion's list functions use the comma character as the default delimiter. Notice in the code above that we explicitly tell ColdFusion to use the @ character instead.
</p>



