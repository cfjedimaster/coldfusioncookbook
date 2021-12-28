---
title: You need to generate a unique identification value to track a user.
published: January 13, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Numbers
permalink: entries/You-need-to-generate-a-unique-identification-value-to-track-a-user.html
entryid: 29
---

<h3>You need to generate a unique identification value to track a user.</h3>

<p>
A very common task that deals with number generation is creating an UUID.  UUID stands for Universally Unique Identifier.  A UUID is a 35-character string representation of a unique integer.  This unique integer is generated from the ethernet 'MAC' address built into the computer, along with the current time (in 100ns increments). This assures that the identifier will be unique.
</p>

<p>
It is important to note that ColdFusion uses a slightly different format for its UUIDs.  ColdFusion UUIDs can be broken into 4 parts such as:  B54D60CD-DF98-4869-9C3910ABE33E5112, while other companies such as Microsoft use a 5 part format such as: 4CFB048C-A19E-44E8-83E8-B842A3D43AA3.  If you are interested in working with 5 part UUIDs in ColdFusion, you can refer to www.cflib.org for a ColdFusion UDF (User Defined Function) for creating MS Style UUIDs.
</p>

<p>
You create an UUID in ColdFusion by using the CreateUUID() function:
</p>

<pre><code class="language-markup">&lt;cfset userUUID = createUUID()&gt;
&lt;cfoutput&gt;#userUUID#&lt;/cfoutput&gt;
B54D60CD-DF98-4869-9C3910ABE33E5112
</code></pre>



