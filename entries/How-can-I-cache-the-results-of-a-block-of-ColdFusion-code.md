---
title: How can I cache the results of a block of ColdFusion code?
published: February 8, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Caching
permalink: entries/How-can-I-cache-the-results-of-a-block-of-ColdFusion-code.html
entryid: 55
---

<h3>How can I cache the results of a block of ColdFusion code?</h3>

<p>
The ColdFusion &lt;cfsavecontent&gt; tag is a convenient way to store the results of a block of ColdFusion code.  The &lt;cfsavecontent&gt; tag is called with both a beginning &lt;cfsavecontent&gt; and an ending &lt;/cfsavecontent&gt; tag.  &lt;cfsavecontent&gt;  has a single required attribute called variable.  This attribute will hold the cached results of the &lt;cfsavecontent&gt; tag.  
</p>

<p>
So now that you know how to call the &lt;cfsavecontent&gt; tag, what does it do?  When you wrap a block of ColdFusion code with a &lt;cfsavecontent&gt; tag, the block of code executes, but any output that is generated by the block of code doesn't display to the screen.  Instead, the output is stored in the variable that you choose in the varaible attribute of the tag.  
</p>

<pre><code class="language-markup">&lt;cfsavecontent variable=&quot;cachedOutput&quot;&gt;
  I am going to count to 10!&lt;p&gt;
  &lt;cfloop index=&quot;loopOn&quot; from=&quot;1&quot; to=&quot;10&quot;&gt;
	  &lt;cfoutput&gt;#loopOn#&lt;br&gt;&lt;/cfoutput&gt;
  &lt;/cfloop&gt;
&lt;/cfsavecontent&gt;
</code></pre>

<p>
If you want to see the output, you would need to do the following:
</p>

<pre><code class="language-markup">&lt;cfoutput&gt;#cachedOutput#&lt;/cfoutput&gt;
</code></pre>



