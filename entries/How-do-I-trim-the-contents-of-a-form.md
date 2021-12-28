---
title: How do I trim the contents of a form?
published: January 13, 2006
author: Tjarko Rikkerink
authorwebsite: http://www.mximize.com
categories: Forms
permalink: entries/How-do-I-trim-the-contents-of-a-form.html
entryid: 28
---

<h3>How do I trim the contents of a form?</h3>

<p>
This piece of code will trim the contents of a form. Since the form scope always exists in ColdFusion, you can either run it automatically, or only when a form post is submitted.
</p>

<pre><code class="language-markup">&lt;cfloop collection=&quot;#form#&quot; item=&quot;formfield&quot;&gt; 
	&lt;cfset form[formfield] = trim(form[formfield])&gt; 
&lt;/cfloop&gt; 
</code></pre>

<p>
Another suggestion would be to htmlEditFormat the data. This escapes any HTML tags the user may have entered into the form:
</p>

<pre><code class="language-markup">&lt;cfloop collection=&quot;#form#&quot; item=&quot;formfield&quot;&gt; 
	&lt;cfset form[formfield] = trim(htmlEditFormat(form[formfield]))&gt; 
&lt;/cfloop&gt; 
</code></pre>



