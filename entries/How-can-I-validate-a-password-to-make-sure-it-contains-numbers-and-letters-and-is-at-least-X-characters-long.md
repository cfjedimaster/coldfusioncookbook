---
title: How can I validate a password to make sure it contains numbers and letters and is at least X characters long?
published: October 19, 2006
author: Christopher Legge
authorwebsite: 
categories: Forms,Strings
permalink: entries/How-can-I-validate-a-password-to-make-sure-it-contains-numbers-and-letters-and-is-at-least-X-characters-long.html
entryid: 115
---

<h3>How can I validate a password to make sure it contains numbers and letters and is at least X characters long?</h3>

<p>
Regular expression combined with the &lt;cfif&gt; and reFind() function give you the flexibility to validate against all kinds of requirements.
</p>

<p>
In the following code sample, the password will have to contain at least one letter and number and be between 6-15 positions long.
</p>

<pre><code class="language-markup">&lt;cfif NOT reFind(&quot;^[[:alnum:]]{6,15}$&quot;,usr_pwd)&gt;
</code></pre>



