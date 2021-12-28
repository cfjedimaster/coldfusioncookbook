---
title: How can you test to see if two arrays are the same?
published: July 21, 2008
author: Larry C. Lyons
authorwebsite: http://www.lyonsmorris.com/lyons/
categories: Data Structures
permalink: entries/How-can-you-test-to-see-if-two-arrays-are-the-same.html
entryid: 152
---

<h3>How can you test to see if two arrays are the same?</h3>

<p>
CF does not offer an easy way to compare two single dimension arrays. The most common solution involving looping through one array and comparing each item to the second array. It is a complicated and messy solution.
</p>

<p>
Actually there's a very simple way of comparing two arrays using CF's underlying java. According to a recent blog by Rupesh Kumar of Adobe (http://coldfused.blogspot.com/), ColdFusion arrays are an implementation of java lists (java.util.List). So all the Java list methods are available for CF arrays.
</p>

<p>
So to compare 2 arrays all you need to do is use the equals method. It returns a YES if the arrays are equal and NO if they are not.
</p>

<p>
For example, given these arrays:
</p>

<pre><code class="language-markup">&lt;cfset array1 = listToArray(&quot;tom,dick,harry,phred&quot;)/&gt;
&lt;cfset array2 = listToArray(&quot;dick,harry,phred&quot;) /&gt;
&lt;cfset array3 = listToArray(&quot;tom,dick,harry,phred&quot;)/&gt;
</code></pre>

<p>
To test for equality:
</p>

<pre><code class="language-markup">&lt;cfoutput&gt;
      Array2 equals Array1 #array2.equals(array1)# (returns a NO) &lt;br/&gt;
      Array3 equals Array1 #array3.equals(array1)# (returns a YES) &lt;br/&gt;
&lt;/cfoutput&gt;
</code></pre>



