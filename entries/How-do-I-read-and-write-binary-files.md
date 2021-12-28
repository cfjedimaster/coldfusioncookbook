---
title: How do I read and write binary files?
published: February 2, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: File and Directory Access
permalink: How-do-I-read-and-write-binary-files.html
entryid: 50
---

<h3>How do I read and write binary files?</h3>

<p>
Working with binary files is very similar to working with text files.  The main difference is that by default, binary files are in a more complex format then standard text files.  This means in order for ColdFusion to maniple binary file data, you may need to use the toBase64() and toBinary() functions to convert data to and from binary format in to a more manageable format.  
</p>

<p>
In order to use &lt;cffile&gt; to read a binary file, you need to set the action attribute to readBinary. For example:
</p>

<pre><code class="language-markup">&lt;cffile action=&quot;readBinary&quot;
        file=&quot;C:/button.gif&quot;
        variable=&quot;myBinaryFile&quot;&gt;
</pre>		
This would store the contents of the binary file in the myBinaryFile variable.  You could then use the toBase64() function to convert the binary file into a format that ColdFusion could output and manipulate.
If you want to use &lt;cffile&gt; to write a binary file, you first need to make sure the data is in the proper format.  If the data is not already in binary format, you can use the toBinary() function to convert the data to binary.  Once you have binary data, it is a simple matter of using &lt;cffile&gt; with the action attribute set to write and the output attribute to the variable holding your binary data:
<pre><code class="language-markup">&lt;cffile action=&quot;write&quot;
        file=&quot;C:/newButton.gif&quot;
        output=&quot;myBinaryFile&quot;&gt;
</pre>		
		
Notice that you do not to do anything special in the action attribute to disclose the fact that the file is binary.  ColdFusion is smart enough to figure this out by itself.


