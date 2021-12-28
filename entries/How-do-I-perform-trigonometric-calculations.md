---
title: How do I perform trigonometric calculations?
published: January 24, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Numbers
permalink: entries/How-do-I-perform-trigonometric-calculations.html
entryid: 37
---

<h3>How do I perform trigonometric calculations?</h3>

<p>
ColdFusion provides functions for all of the common trigonometric calculations.
</p>

<p>
The pi() function returns the mathematical constant Pi, accurate up to 15 digits:
</p>

<pre><code class="language-markup">&lt;cfset testVar = pi()&gt;
&lt;cfoutput&gt;#testVar#&lt;/cfoutput&gt;
3.14159265359
</code></pre>

<p>
The sin() function takes an angle (in radians), and returns the sine of the angle (in radians):
</p>

<pre><code class="language-markup">&lt;cfset testVar = sin(100)&gt;
&lt;cfoutput&gt;#testVar#&lt;/cfoutput&gt;
-0.50636564111
</code></pre>

<p>
The cos() function takes an angle (in radians), and returns the cosine of the angle (in radians):
</p>

<pre><code class="language-markup">&lt;cfset testVar = cos(100)&gt;
&lt;cfoutput&gt;#testVar#&lt;/cfoutput&gt;
0.862318872288
</code></pre>

<p>
The tan() function takes an angle (in radians), and returns the tangent of the angle (in radians):
</p>

<pre><code class="language-markup">&lt;cfset testVar = tan(100)&gt;
&lt;cfoutput&gt;#testVar#&lt;/cfoutput
-0.587213915157
</code></pre>

<p>
The asin() function takes a number between -1 and 1, and then returns the arcsine of that number.
</p>

<pre><code class="language-markup">&lt;cfset testVar = asin(1)&gt;
&lt;cfoutput&gt;#testVar#&lt;/cfoutput&gt;
1.57079632679
</code></pre>

<p>
The acos() function takes a number between -1 and 1, and then returns the arccosine of that number.
</p>

<pre><code class="language-markup">&lt;cfset testVar = acos(1)&gt;
&lt;cfoutput&gt;#testVar#&lt;/cfoutput&gt;
0
</code></pre>

<p>
The atn() function takes a number, and then returns the arctangent of that number.
</p>

<pre><code class="language-markup">&lt;cfset testVar = atn(1)&gt;
&lt;cfoutput&gt;#testVar#&lt;/cfoutput&gt;
0.785398163397
</code></pre>

<p>
To convert degrees to radians, multiply degrees by pi/180. 
</p>

<pre><code class="language-markup">&lt;cfset myDegreesVar = .5&gt;
&lt;cfoutput&gt;Radians = #myDegreesVar * pi()/180#&lt;/cfoutput&gt;
Radians = 0.00872664625997 
</code></pre>

<p>
To convert radians to degrees, multiply radians by 180/pi.
</p>

<pre><code class="language-markup">&lt;cfset myRadiansVar = .5&gt;
&lt;cfoutput&gt;Degrees = #myRadiansVar * 180/pi()#&lt;/cfoutput&gt;
Degrees = 28.6478897565 
</code></pre>



