---
title: How can I use ColdFusion to crop an image?
published: December 10, 2007
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Images
permalink: How-can-I-use-ColdFusion-to-crop-an-image.html
entryid: 136
---

<h3>How can I use ColdFusion to crop an image?</h3>

<p>
Use the  imageCrop() function.
</p>

<pre><code class="language-markup">&lt;!---Read in the image ---&gt;
&lt;cfimage action=&quot;read&quot; name=&quot;myImg&quot; source=&quot;foo.jpg&quot;&gt; 
&lt;!--- Crop to 50x50 pixels starting at  X = 1 &amp;  Y=1.
&lt;cfset imageCrop(myImg,1,1,50,50)&gt;
</code></pre>



