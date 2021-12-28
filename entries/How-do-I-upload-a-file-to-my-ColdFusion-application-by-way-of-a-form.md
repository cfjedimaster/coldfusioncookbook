---
title: How do I upload a file to my ColdFusion application by way of a form?
published: January 26, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Forms
permalink: How-do-I-upload-a-file-to-my-ColdFusion-application-by-way-of-a-form.html
entryid: 43
---

<h3>How do I upload a file to my ColdFusion application by way of a form?</h3>

<p>
Using a HTML form to upload files is a 2-step process. The first step involves the use of a HTML form to collect the file data from the user.  Once you have the file on your web server, the second step involves the use of &lt;cffile&gt;.
</p>

<p>
If you know that your HTML form will contain a type = "file" form-field, you need to be sure to set the &lt;form&gt; enctype parameter to "multipart/form-data".  This vital step ensures that non-text file data can be transmitted with the form post.  The second step in setting up a HTML form to accept a file is to include a type= "file" form-field.  It is important to note that the file upload feature is browser specific and not supported by all browsers- especially older browsers.  It is also important to note that different browsers and operating systems may render the file input form differently.  If your application must support multiple browsers and operating systems, you will want to be sure to test your type = "file" form-field code with each browser and operating system.    A sample file upload form would look as follows:
</p>

<pre><code class="language-markup">&lt;form action=&quot;fileUpload.cfm&quot; method=&quot;post&quot; enctype=&quot;multipart/form-data&quot;&gt;
&lt;input name=&quot;fileField&quot; type=&quot;file&quot;&gt;
&lt;input type=&quot;submit&quot; value=&quot;upload&quot;&gt;
&lt;/form&gt;
</code></pre>

<p>
As already mentioned, the next step in the process is to use some ColdFusion tags and functions to capture the now posted form data.  This is accomplished by using the &lt;cffile&gt; tag with the action = "upload" attribute, and the fielfield attribute set to the type = "file" form-field you just posted.  This code would look as follows:
</p>

<pre><code class="language-markup">&lt;cffile
action=&quot;upload&quot;
destination=&quot;C:/Temp/&quot;
nameconflict=&quot;overwrite&quot;
filefield=&quot;fileField&quot;&gt;
</code></pre>



