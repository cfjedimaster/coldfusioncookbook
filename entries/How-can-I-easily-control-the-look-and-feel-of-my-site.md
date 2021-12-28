---
title: How can I easily control the look and feel of my site?
published: July 3, 2008
author: Raymond Camden
authorwebsite: http://www.raymondcamden.com
categories: Display and Layout
permalink: How-can-I-easily-control-the-look-and-feel-of-my-site.html
entryid: 142
---

<h3>How can I easily control the look and feel of my site?</h3>

<p>
While non-ColdFusion techniques like an effective CSS file are one way to easily control layout across a site, you also want to consider using custom tags, and custom tag "wrappers" as a way to maintain a consistent look and feel across your site. Custom tags "wrappers" are simply custom tags that wrap content. As an example:
</p>

<pre><code class="language-markup">&lt;cf_foo&gt;
Stuff here
&lt;/cf_foo&gt;
</code></pre>

<p>
When ColdFusion runs this file, it will execute the custom tag, foo, twice. Once before "Stuff here" and once after. You can programatically determine if foo is being run in the beginning or end of execution. This is done using the builtin thisTag scope and the executionMode value.
</p>

<pre><code class="language-markup">&lt;cfif thisTag.executionMode is &quot;start&quot;&gt;
Code here to run in the beginning.
&lt;cfelse&gt;
Code here to run at the end.
&lt;/cfif&gt;
</code></pre>

<p>
This technique then is very useful for handling layout. You can easily use a layout custom tag that handles outputting a header and footer using the code above. Then wrap your pages with code like so:
</p>

<pre><code class="language-markup">&lt;cf_layout&gt;
This is my page!
&lt;/cf_layout&gt;
</code></pre>

<p>
This entry was based on a suggestion by Mat Evans.
</p>



