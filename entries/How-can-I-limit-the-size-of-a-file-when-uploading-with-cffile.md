---
title: How can I limit the size of a file when uploading with cffile?
published: January 30, 2006
author: Stan Winchester
authorwebsite: http://www.aftershockweb.com/
categories: File and Directory Access
permalink: How-can-I-limit-the-size-of-a-file-when-uploading-with-cffile.html
entryid: 46
---

<h3>How can I limit the size of a file when uploading with cffile?</h3>

<p>
You can use the cgi.content_length to find the file size. If the cgi.content_length is less than or equal to the maximum size specified the file is uploaded (saved) to the server.
</p>

<pre><code class="language-markup">&lt;cfset fileSizeLimit = 60000 /&gt;
&lt;cfif cgi.content_length LTE fileSizeLimit&gt;
	&lt;cffile action=&quot;UPLOAD&quot;
        filefield=&quot;Filename&quot;
        destination=&quot;#thisDirectory#&quot;
        nameconflict=&quot;OVERWRITE&quot;
        accept=&quot;image/gif, image/jpeg&quot;&gt;
	&lt;center&gt;SUCCESS!&lt;/center&gt;
&lt;cfelse&gt;
	&lt;cfoutput&gt;
	&lt;center&gt;
	Your file size of #cgi.content_length# is too big!
	&lt;br&gt;
	The maximum size allowed is #fileSizeLimit#.
	&lt;/center&gt;
	&lt;/cfoutput&gt;
	&lt;cfabort&gt;
&lt;/cfif&gt;
</code></pre>

<p>
Please note with this example the file is still uploaded as a temporary file, but the file is not saved. File sizes can also be restricted in the ColdFusion Administrator by using the setting, "Maximum size of post data." However, the example above gives more granular control.
</p>



