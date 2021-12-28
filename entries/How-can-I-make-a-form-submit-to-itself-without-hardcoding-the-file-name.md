---
title: How can I make a form submit to itself without hardcoding the file name?
published: January 9, 2006
author: Ben Forta
authorwebsite: http://www.forta.com
categories: Forms
permalink: entries/How-can-I-make-a-form-submit-to-itself-without-hardcoding-the-file-name.html
entryid: 22
---

<h3>How can I make a form submit to itself without hardcoding the file name?</h3>

<p>
The ColdFusion CGI variable CGI.SCRIPT_NAME contains the name of page being executed, so you can use:
</p>

<pre><code class="language-markup">&lt;cfoutput&gt;
&lt;form action=&quot;#CGI.SCRIPT_NAME#&quot; method=&quot;post&quot;&gt;
&lt;/cfoutput&gt;
</code></pre>

<p>
Note the use of &lt;cfoutput&gt; around the form tag. This is required unless you are using &lt;cfform&gt;.
</p>



