---
title: How do I get the directory for the current template?
published: January 26, 2006
author: Stan Winchester
authorwebsite: http://www.aftershockweb.com/
categories: File and Directory Access
permalink: entries/How-do-I-get-the-directory-for-the-current-template.html
entryid: 42
---

<h3>How do I get the directory for the current template?</h3>

<p>
Use the two ColdFusion functions getCurrentTemplatePath() and getDirectoryFromPath().
</p>

<pre><code class="language-markup">&lt;cfset currentPath = getCurrentTemplatePath()&gt;
&lt;cfset currentDirectory = getDirectoryFromPath(currentPath)&gt;
&lt;cfoutput&gt;This directory is #currentDirectory#&lt;/cfoutput&gt;
</code></pre>

<p>
The function, getCurrentTemplatePath(), will return the full path of the current template. By path we mean the directory and file name. The function, getDirectoryFromPath(), will then get just the directory from the path.
</p>



