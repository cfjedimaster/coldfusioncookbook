---
title: How can I tell the dimensions of an image in ColdFusion?
published: December 26, 2006
author: Raymond Camden
authorwebsite: http://www.raymondcamden.com
categories: Miscellaneous
permalink: entries/How-can-I-tell-the-dimensions-of-an-image-in-ColdFusion.html
entryid: 123
---

<h3>How can I tell the dimensions of an image in ColdFusion?</h3>

<p>
ColdFusion does not have native image support (i.e., the ability to manipulate images) although it has been confirmed for the next version. However, there are multiple products that add this capability to ColdFusion. For this entry, we will look at <a href="http://www.opensourcecf.com/imagecfc/">ImageCFC</a>, a free and open source solution created by Rick Root. This component provides multiple image manipulation options. To simply check the size of an image, you can use this code:
</p>

<pre><code class="language-markup">&lt;cfset image = createObject(&quot;component&quot;, &quot;image&quot;)&gt;
&lt;cfset info = image.getImageInfo(&quot;&quot;, expandPath(&quot;./storm.jpg&quot;))&gt;
&lt;cfdump var=&quot;#info#&quot;&gt;
</code></pre>

<p>
The getImageInfo method returns a structure of data that contains information about the image, including its height and width. The same method can also be used to determine if a file is a valid image. If used against a non-image file, the returned structure will contain an error code with a value less than 0.
</p>



