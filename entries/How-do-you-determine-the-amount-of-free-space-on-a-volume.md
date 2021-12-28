---
title: How do you determine the amount of free space on a volume?
published: March 1, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: File and Directory Access
permalink: entries/How-do-you-determine-the-amount-of-free-space-on-a-volume.html
entryid: 57
---

<h3>How do you determine the amount of free space on a volume?</h3>

<p>
Currently there is no native ColdFusion functionality to accomplish this task. If ColdFusion can't do it natively, the next best option for this kind of task is usually calling a Java class directly from ColdFusion. Unfortunately, there does not seem to be any build-in way for current versions of Java to perform this task.  The good news on the Java front is that the Java 6 (Mustang) File class will have getUsableSpace() and getTotalSpace() methods.
</p>

<p>
If you are in a Windows environment, you can use COM to accomplish this task. Rob Brooks-Bilson created a custom functional on <a href="http://www.cflib.org">CFLib</a> called <a href="http://www.cflib.org/udf.cfm?ID=105"> FreeSpace</a> that uses Windows COM.  
</p>

<pre><code class="language-markup">&lt;cfscript&gt;
/**
 * Returns the amount of free space (in bytes) available to the ColdFusion server for a specified drive or network share. (Windows only)
 * 
 * @param drvPath 	 Drive letter (c, c:, c:\) or network share (\\computer\share). 
 * @return Returns a simple value. 
 * @author Rob Brooks-Bilson (rbils@amkor.com) 
 * @version 1, July 19, 2001 
 */
function FreeSpace(drvPath)
{
  Var fso  = CreateObject(&quot;COM&quot;, &quot;Scripting.FileSystemObject&quot;);
  Var drive = fso.GetDrive(drvPath);
  Return drive.FreeSpace;
}
&lt;/cfscript&gt;
</code></pre>



