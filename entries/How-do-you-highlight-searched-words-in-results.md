---
title: How do you highlight searched words in results?
published: June 30, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Strings,Full-Text Searching
permalink: How-do-you-highlight-searched-words-in-results.html
entryid: 92
---

<h3>How do you highlight searched words in results?</h3>

<p>
This is a simple matter of finding the text you are looking for, and replacing this text with a highlighted version of the same text.  This can be accomplished using the replaceNoCase() function.
</p>

<pre><code class="language-markup">&lt;cfset myText = &quot;This is my text!&quot;&gt;
&lt;cfset myWord = &quot;my&quot;&gt;
&lt;cfoutput&gt;#replaceNoCase(myText,myWord,&quot;&lt;span style='background:yellow'&gt;#myWord#&lt;/span&gt;&quot;,&quot;all&quot;)#&lt;/cfoutput&gt;
</code></pre>

<p>
Also, Verity searches support this functionality right out of the box using the context column.  In your Verity result set, the context column returns a context summary containing the search terms, highlighted in bold. (This is enabled if you set the contextpassages attribute to a number greater than zero.). If bolding your search term is not enough, you can use the contextHighlightBegin and contextHighlightEnd attributes to append custom HTML before and after your search term.
</p>



