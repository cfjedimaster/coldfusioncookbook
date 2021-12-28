---
title: How can I read, set, or delete Windows system registry data?
published: February 2, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: File and Directory Access
permalink: How-can-I-read-set-or-delete-Windows-system-registry-data.html
entryid: 52
---

<h3>How can I read, set, or delete Windows system registry data?</h3>

<p>
Anyone who has worked with the Windows platform has probably encountered the system registry at one time or another.  The system registry is a database of sorts, organized in a tree like fashion.  The system registry contains data on just about everything in the system, including hardware, software, and users. It is important to note that because the system registry is Windows platform specific, ColdFusion only supports the &lt;cfregistry&gt; tag on the Windows platform.
</p>

<p>
The registry hierarchy tree is organized into two basic units: keys and values.  Keys make up the branches in the tree, and values are the actual data (in the form of name value pairs).   The &lt;cfregistry&gt; tag allows you to read, set (insert or update), and delete registry data.
</p>

<p>
&lt;cfregistry&gt; gives you two methods for reading (retrieving) keys and values from the registry.  The first method will allow you to retrieve all of the key and value information for an entire branch.  This is accomplished by setting the action attribute to getAll.  The second method will only get the information for the specific entry you are targeting.  This is accomplished by setting the action attribute to get.
</p>

<p>
The following example will look up information about all of the ODBC connections (the HKEY_LOCAL_MACHINE\Software\ODBC\ODBC.INI key) setup on the ColdFusion server machine:
</p>

<pre><code class="language-markup">&lt;cfregistry action=&quot;getAll&quot;
 branch=&quot;HKEY_LOCAL_MACHINE\Software\ODBC\ODBC.INI&quot;
 name=&quot;GetODBC&quot;
 type=&quot;any&quot;
 sort=&quot;entry asc&quot;&gt;
&lt;table border=&quot;1&quot;&gt;
&lt;tr&gt;
&lt;td&gt;Entry&lt;/td&gt;&lt;td&gt;Type&lt;/td&gt;&lt;td&gt;Value&lt;/td&gt;
&lt;/tr&gt;
&lt;cfoutoput query=&quot;getODBC&quot;&gt;
&lt;tr&gt;
&lt;td&gt;#Entry#&lt;/td&gt;&lt;td&gt;#Type#&lt;/td&gt;&lt;td&gt;#Value#&lt;/td&gt;
&lt;/tr&gt;
&lt;/cfoutput&gt;
&lt;/table&gt;
</code></pre>

<p>
Setting registry keys and values is accomplished by setting the action attribute to set.  Note that the type attribute can be set to key, dWord, or string (default) depending on what type of registry data you need to set. The following code shows how to use &lt;cfregistry&gt; to set a registry value:
</p>

<pre><code class="language-markup">&lt;cfregistry action=&quot;set&quot;
 branch=&quot;HKEY_LOCAL_MACHINE\Software\Macromedia\ColdFusion\CurrentVersion&quot;
 type=&quot;key&quot;
 entry=&quot;test&quot;&gt;
 </pre>
Deleting registry key or values is accomplished by setting the action attribute to delete.  The following code shows how to use &lt;cfregistry&gt; to delete a registry value:
<pre><code class="language-markup">&lt;cfregistry action=&quot;delete&quot;
 branch=&quot;HKEY_LOCAL_MACHINE\Software\Macromedia\ColdFusion\CurrentVersion&quot;
 entry=&quot;test&quot;&gt;
</code></pre>



