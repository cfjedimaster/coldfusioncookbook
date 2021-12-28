---
title: How can I create a CAPTCHA image with ColdFusion?
published: December 6, 2007
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Display and Layout,Images
permalink: How-can-I-create-a-CAPTCHA-image-with-ColdFusion.html
entryid: 134
---

<h3>How can I create a CAPTCHA image with ColdFusion?</h3>

<p>
CAPTCHA images contain distorted text that is human-readable but not machine-readable.
</p>

<p>
The &lt;cfimage&gt; tag allows you to create CAPTCHA images.  You can specify the text you want to distort, the height and width of the text area, font and font size, and the level of difficulty (affects readability).
</p>

<p>
Note: As per the ColdFusion docs, in order for the CAPTCHA image to display, the width value must be greater than: fontSize times the number of characters specified in text times 1.08.
</p>

<pre><code class="language-markup">&lt;!--- font size = 25, number of characters = 11, then required number 1.08 ---&gt;
&lt;cfset size = 25 * 11 * 1.08/&gt;
&lt;cfimage action=&quot;captcha&quot; fontSize=&quot;25&quot; width=&quot;#size#&quot; height=&quot;50&quot;
text=&quot;ThisIsATest&quot; fonts=&quot;Verdana,Arial,Courier New,Courier&quot; difficulty=&quot;low&quot;&gt;
</code></pre>



