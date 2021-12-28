---
title: How do I get around a lack of constructors in CFCs?
published: June 12, 2006
author: Hal Helms
authorwebsite: http://halhelms.com/
categories: Components
permalink: How-do-I-get-around-a-lack-of-constructors-in-CFCs.html
entryid: 98
---

<h3>How do I get around a lack of constructors in CFCs?</h3>

<p>
A widely adopted practice is to create an "init" method that returns the object.
</p>

<p>
Example:
</p>

<pre><code class="language-markup">&lt;cfcomponent displayname=&quot;Person&quot;&gt;
    &lt;cffunction name=&quot;init&quot; access=&quot;public&quot; output=&quot;false&quot;&gt;
       &lt;cfreturn this /&gt;
    &lt;/cffunction&gt;
&lt;/cfcomponent&gt;
</code></pre>

<p>
The init method can accept arguments and perform object initialization,  if needed. Now, you can always create your objects like this:
</p>

<pre><code class="language-markup">&lt;cfset joe = createObject('component', 'Person').init() /&gt;
</code></pre>



