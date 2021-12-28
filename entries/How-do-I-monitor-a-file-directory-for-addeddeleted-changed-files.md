---
title: How do I monitor a file directory for added/deleted/ changed files?
published: July 21, 2008
author: Stefan le Roux
authorwebsite: http://www.coldfury.us
categories: File and Directory Access
permalink: entries/How-do-I-monitor-a-file-directory-for-addeddeleted-changed-files.html
entryid: 150
---

<h3>How do I monitor a file directory for added/deleted/ changed files?</h3>

<p>
Event Gateways: Directory Watcher
</p>

<p>
Open the ColdFusion Administrator and go to "EVENT GATEWAYS/Gateway Types". ColdFusion comes with a few predefined Gateway Types one of them being "DirectoryWatcher".
</p>

<p>
Now select "Gateway Instances" under the "EVENT GATEWAYS" heading in the left-hand menu. Create a new directory somewhere on your server to host the CFC and Configuration files that will handle your new Gateway operation.
</p>

<p>
For example: C:\Inetpub\wwwroot\com\company\services\dw
</p>

<p>
1. Inside this folder, create a new CFC (watch_dir.cfc) with the following contents:
</p>

<pre><code class="language-markup">&lt;cfcomponent&gt;
&lt;cffunction name=&quot;onAdd&quot; returntype=&quot;any&quot;&gt;
&lt;cfargument name=&quot;CFEvent&quot; type=&quot;struct&quot; required=&quot;yes&quot;&gt;
&lt;cfset data = CFEvent.data&gt;
&lt;cffile action=&quot;append&quot; file=&quot;C:\Inetpub\wwwroot\com\company\services\dw\eventdata.txt&quot; output=&quot;#data#&quot;&gt;
&lt;/cffunction&gt;
&lt;/cfcomponent&gt;
</code></pre>

<p>
2. Create another file (watch_dir.cfg) with the following contents (hash/pound signs and all):
</p>

<pre><code class="language-markup">#
# DirectoryWatcherGateway configuration file
#
# The directory you want to watch. If you are entering a Windows path
# either use forward slashes (C:/mydir) or escape the back slashes (C:\\mydir). directory=C:\\MY_DIRECTORY
# Should we watch the directory and all subdirectories too
# Default is no. Set to 'yes' to do the recursion. 
recurse=yes
# The interval between checks, in milliseconds
# Default is 10 seconds
interval=10000
# The comma separated list of extensions to match.
# Default is * - all files
extensions=*
# CFC Function for file Change events
# Default is onChange, set to nothing if you don't want to see these events
#changeFunction=
# CFC Function for file Add events
# Default is onAdd, set to nothing if you don't want to see these events
addFunction=onAdd
# CFC Function for file Delete events
# Default is onDelete, set to nothing if you don't want to see these events
#deleteFunction=
</code></pre>

<p>
For this example, we are only using the onAdd method.
</p>

<p>
Specify the following criteria for your new "Gateway Instance":
</p>

<p>
Gateway ID: watchInboundFiles
</p>

<p>
Gateway Type: DirectoryWatcher - Watches a directory for file changes (Select)
</p>

<p>
*CFC Path: C:\Inetpub\wwwroot\com\company\services\dw\watch_dir.cfc
</p>

<p>
*Configuration File: C:\Inetpub\wwwroot\com\company\services\dw\watch_dir.cfg
</p>

<p>
Startup Mode: Automatic (Select)
</p>

<p>
Click "Add Gateway Instance".
</p>

<p>
Under "Configured ColdFusion Event Gateway Instances", Start you Instance.
</p>

<p>
Now drop a new file in your "C:\MY_DIRECTORY" and open the "eventdata.txt" to see some variables added. You can now modify the "watch_dir.cfc" to handle these results in any way you like.
</p>

<p>
Be sure to check the "Debugging & Logging/Log Files: eventgateway.log" if things doesn't work as expected. It usually has some useful debugging information if something went wrong.
</p>



