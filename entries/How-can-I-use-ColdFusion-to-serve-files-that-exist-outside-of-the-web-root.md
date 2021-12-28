---
title: How can I use ColdFusion to serve files that exist outside of the web root?
published: December 3, 2007
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: File and Directory Access
permalink: entries/How-can-I-use-ColdFusion-to-serve-files-that-exist-outside-of-the-web-root.html
entryid: 133
---

<h3>How can I use ColdFusion to serve files that exist outside of the web root?</h3>

<p>
Use the &lt;cfcontent&gt; tag. You can set the file attribute to point to a file on any local or mapped path on the system on which the web server runs. You also need to set the type attribute (A file or MIME content type, optionally including character encoding, in which to return the page).
</p>

<pre><code class="language-markup">&lt;cfcontent file=&quot;C:\files\example.jpg&quot; type=&quot;image/jpeg&quot;&gt;
</code></pre>

<p>
See also:
</p>

<p>
<a href ="http://www.coldfusioncookbook.com/entry/39/How-do-I-force-a-file-to-download-instead-of-displaying-inline-in-IE,-Firefox-and-other-browsers?"> http://www.coldfusioncookbook.com/entry/39/How-do-I-force-a-file-to-download-instead-of-displaying-inline-in-IE,-Firefox-and-other-browsers?</a>
</p>



