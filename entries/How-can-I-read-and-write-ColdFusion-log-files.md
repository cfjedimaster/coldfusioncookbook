---
title: How can I read and write ColdFusion .log files?
published: February 2, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: File and Directory Access
permalink: How-can-I-read-and-write-ColdFusion-log-files.html
entryid: 51
---

<h3>How can I read and write ColdFusion .log files?</h3>

<p>
ColdFusion log files are a form of text files that end in the .log extension and must be saved inside of the ColdFusion log directory.  Although you can use &lt;cffile&gt; to read and write ColdFusion log files by hand, ColdFusion provides tools designed just for this specific task.  To read the files, use the ColdFuson administrator (under Debugging & Logging), and to write/update the files, use the &lt;cflog&gt; tag .  These handy shortcuts will save you most of the work associated with manipulating ColdFusion log files. 
</p>

<p>
 
</p>

<p>
Using &lt;cflog&gt; is easy.  You set the contents of the message to be written to the log file by way of the required text attribute.  If you wish to use one of the default ColdFusion log files, you set the log attribute equal to either application or scheduler, depending on which of the two logs you wish to write to.  If you wish to write to a custom log file, then you set the file attribute to the name (not including the .log extension) of the log file you wish to use.  The type attribute is used to set the severity of the log entry.  Valid values for this attribute include: information (default), warning, error, and fatal Information.  Finally, the Optional application attribute can be set to either yes (default), or no.  If application is set to yes, then the application name will be added to the log file.
</p>

<p>
The following sample code could be used to add a dynamic entry (based on form data) to a custom log file every time a new member registered on your site:
</p>

<pre><code class="language-markup">&lt;cflog file=&quot;newUserLog&quot; 
       application=&quot;No&quot;
       text=&quot;User #form.userName# joined the site.&quot;&gt;
</code></pre>



