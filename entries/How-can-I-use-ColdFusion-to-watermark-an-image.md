---
title: How can I use ColdFusion to watermark an image?
published: December 7, 2007
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Images
permalink: How-can-I-use-ColdFusion-to-watermark-an-image.html
entryid: 135
---

<h3>How can I use ColdFusion to watermark an image?</h3>

<p>
Use the imagePaste() function.
</p>

<p>
The imagePaste() function takes two images and an X Y coordinate, and draws the second image over the first image with the upper-left corner at X Y coordinate. 
</p>

<pre><code class="language-markup">&lt;cfset foo(myBigImage.jpg,myWatermark.jpg,50,50)&gt;
</code></pre>



