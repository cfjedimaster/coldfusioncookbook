---
title: How do I prevent a file from becoming corrupt due to simultaneous access?
published: January 31, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: File and Directory Access
permalink: entries/How-do-I-prevent-a-file-from-becoming-corrupt-due-to-simultaneous-access.html
entryid: 47
---

<h3>How do I prevent a file from becoming corrupt due to simultaneous access?</h3>

<p>
While working with files, it is important to lock them for single threaded access.   If you do not, it is possible that your application will try to perform simultaneous read or write operations on the file.  This could cause all kinds of undesirable results, including file corruption.  By wrapping all file access code in a &lt;cflock&gt; tag that is uniquely named for each file, you insure that your file data only be accessed by one process at a time.
</p>

<p>
The following code shows a sample use of a &lt;cflock&gt; tag that could be used to protect a file transaction:
</p>

<pre><code class="language-markup">&lt;cflock name=&quot;dataFileLock&quot; type=&quot;exclusive&quot; timeout=&quot;30&quot;&gt;
&lt;!--- Insert file transaction ---&gt;
&lt;/cflock&gt;
</code></pre>

<p>
Note the name of the lock.  By setting this to something related to the particular file you will be working with, you can better insure that the next portion of code that will work with this file will use the same lock.
</p>



