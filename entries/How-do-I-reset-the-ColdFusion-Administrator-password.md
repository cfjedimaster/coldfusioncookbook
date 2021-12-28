---
title: How do I reset the ColdFusion Administrator password?
published: March 2, 2006
author: Raymond Camden
authorwebsite: http://www.raymondcamden.com
categories: Security
permalink: How-do-I-reset-the-ColdFusion-Administrator-password.html
entryid: 68
---

<h3>How do I reset the ColdFusion Administrator password?</h3>

<p>
If you forget the password to your ColdFusion MX Administrator, navigate to the cfusionmx7/lib folder and find the file named neo-security.xml. Create a copy of this file. Then open the original and find this node in the XML:
</p>

<pre><code class="language-markup">&lt;var name='admin.security.enabled'&gt;
&lt;boolean value='true'/&gt;
&lt;/var&gt;
</code></pre>

<p>
Change true to false, restart your ColdFusion server, then immediately login and set up a new password.
</p>



