---
title: How do you loop over the values in a structure?
published: January 10, 2006
author: Charlie Griefer
authorwebsite: http://charlie.griefer.com/
categories: Data Structures
permalink: How-do-you-loop-over-the-values-in-a-structure.html
entryid: 23
---

<h3>How do you loop over the values in a structure?</h3>

<p>
A structure is a complex object that is comprised of key-value pairs.  
</p>

<p>
Let's say we have a structure that represents/describes a person.  Keys are 'Name', 'Address', and 'PhoneNumber'...with corresponding values 'Harvey', '123 Main Street', and '555-1212'.
</p>

<p>
CF's &lt;cfloop&gt; tag provides us with a "collection" loop that is can loop over a structure.
</p>

<pre><code class="language-markup">&lt;cfloop collection=&quot;#myStructure#&quot; item=&quot;key&quot;&gt;
     #key#: #myStructure[key]#&lt;br /&gt;
&lt;/cfloop&gt;
</code></pre>

<p>
The "collection" attribute is the name of your structure (in # signs so CF knows to evaulate it).
</p>

<p>
The "item" attribute is simply a variable to represent the key of your struct for each iteration.  For this reason you'll often see it represented as the variable "key", but it could just as easily have been "i", "x", or "foo".
</p>

<p>
The output of the loop above would, for each iteration, output the key alone ('Name', 'Address', 'PhoneNumber'), and then the value of that key in the structure ('Harvey', '123 Main Street', '555-1212').
</p>

<p>
If you prefer &lt;cfscript&gt;, you can use a for-in loop to loop over a structure:
</p>

<pre><code class="language-markup">&lt;cfscript&gt;
	for (key in myStruct) {
		writeOutput(key &amp; &quot;: &quot; &amp; myStruct[key] &amp; &quot;&lt;br /&gt;&quot;);
	}
&lt;/cfscript&gt;
</code></pre>



