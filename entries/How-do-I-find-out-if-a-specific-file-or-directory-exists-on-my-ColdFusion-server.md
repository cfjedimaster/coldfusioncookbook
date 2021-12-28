---
title: How do I find out if a specific file or directory exists on my ColdFusion server?
published: January 26, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: File and Directory Access
permalink: How-do-I-find-out-if-a-specific-file-or-directory-exists-on-my-ColdFusion-server.html
entryid: 40
---

<h3>How do I find out if a specific file or directory exists on my ColdFusion server?</h3>

<p>
The directoryExists() function takes an absolute path as its only parameter.  It will then test for the existence of that absolute path on the server.  The function returns YES or NO.  Sample code for the directoryExists() function would look as follows:
</p>

<pre><code class="language-markup">&lt;cfset testDirectory = &quot;C:\foo\&quot;&gt;
 
  &lt;cfif directoryExists(testDirectory)&gt;
    Yes, #testDirectory# exists on the server.
  &lt;cfelse&gt;
    No, #testDirectory# does not exist on the server.
  &lt;/cfif&gt;
&lt;/cfoutput&gt;
</code></pre>

<p>
The fileExists() function works the same way as the directoryExists().  You pass it in an absolute path, and it returns YES or NO depending on if the path exists.  It is important to note that if you are testing for the existence of a file, you many first want to make sure the directory exists.  Sample use of the fileExists() function would be as follows:
</p>

<pre><code class="language-markup">&lt;cfset testFile = &quot;C:\foo\foobar.cfm&quot;&gt;
&lt;cfoutput&gt;
  &lt;cfif fileExists(testFile)&gt;
    Yes, #testFile# exists on the server.
  &lt;cfelse&gt;
    No, #testFile# does not exist on the server.
  &lt;/cfif&gt;
&lt;/cfoutput&gt;
</code></pre>



