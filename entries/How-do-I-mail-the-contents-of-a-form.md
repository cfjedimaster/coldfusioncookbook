---
title: How do I mail the contents of a form?
published: July 7, 2008
author: Raymond Camden
authorwebsite: http://www.raymondcamden.com
categories: Forms,Email
permalink: How-do-I-mail-the-contents-of-a-form.html
entryid: 1
---

<h3>How do I mail the contents of a form?</h3>

<p>
One of the most common things a web site may require is a simple "Contact Us" or other form. Normally all you want to do is take the results of the form and email them to the site owner. If you want to quickly deploy a script to do this without all the fancy formatting, you can use the fact that ColdFusion treats form data as a structure. Because of this - there are some simple structure functions we can use to email the contents of the form.
</p>

<pre><code class="language-markup">&lt;cfmail to=&quot;someone@yourorganization.com&quot; from=&quot;someone@yourorganization.com&quot; subject=&quot;Form Foo Submitted&quot; wraptext=&quot;80&quot;&gt;
&lt;cfloop item=&quot;field&quot; collection=&quot;#form#&quot;&gt;
&lt;cfif field is not &quot;fieldnames&quot;&gt;
#field# = #form[field]#
&lt;/cfif&gt;
&lt;/cfloop&gt;
&lt;/cfmail&gt;
</code></pre>

<p>
The code snippet above begins with a cfmail tag. Obviously you would change the addresses to match those of the people you want to mail. Next we use cfloop with the item and collection attributes. These tell cfloop to iterate over all the keys of the structure. In this case it will be the fields of the form. Notice that we skip the form field, "fieldnames." This is a special field that ColdFusion creates. It contains all the fields of the form. Since we don't need this, we don't print it.
</p>



