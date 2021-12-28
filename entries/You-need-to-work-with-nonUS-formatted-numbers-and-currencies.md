---
title: You need to work with non-US formatted numbers and currencies.
published: January 12, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Numbers
permalink: You-need-to-work-with-nonUS-formatted-numbers-and-currencies.html
entryid: 19
---

<h3>You need to work with non-US formatted numbers and currencies.</h3>

<p>
LS functions are locale specific.  You can use the setLocale() function to change the current locale you will be working with.  Once this locale is set, all locale specific functions will use this local.  For more information on what locals are supported in ColdFusion, you can consult your ColdFusion documentation, or access the server.coldfusion.supportedLocales variable.
</p>

<p>
As you begin working with locale specific functions, you will probably notice that many of these functions have a non-locale specific twin.  As a general rule, aside from some minor locale specific differences, the functions are identical.  The following are the locale specific versions of some functions we have already covered in this chapter:
</p>

<pre><code class="language-markup">lSIsNumeric() is used to directly test a variable to see if it is numeric.  
&lt;cfset newLocal = setLocale(&quot;Dutch (Belgian)&quot;)&gt;
&lt;cfset testVar = &quot;foo&quot;&gt;
&lt;cfoutput&gt;#lSIsNumeric(testVar)#&lt;/cfoutput&gt;
NO
</code></pre>

<p>
The lSCurrencyFormat() function is used to format a number with the locale specific currency format.  It is very similar to the dollarFormat() function with one exception.  The exception being that lSCurrencyFormat() has an optional type parameter.  Type can be: none, local, or international.  The Type parameter controls what type of formatting is used with the basic decimal number.  For our example, we will ignore this parameter allowing the type parameter to default to the "local" value:
</p>

<pre><code class="language-markup">&lt;cfset newLocal = setLocale(&quot;Dutch (Belgian)&quot;)&gt;
&lt;cfset testNum = -537&gt;
&lt;cfoutput&gt;#lSCurrencyFormat (testNum)#&lt;/cfoutput&gt;
-537,00 BF
</code></pre>

<p>
The lSEuroCurrencyFormat() function is similar to lSCurrencyFormat(), with the exception that if the current local specific country accepts the euro as a local currency, it can also display the euro currency symbol (?), or the international euro sign (EUR).
</p>

<p>
The lSNumberFormat() function works the same was as numberFormat(), only the mask contents adapt to the local specific settings:
</p>

<pre><code class="language-markup">&lt;cfset newLocal = setLocale(&quot;Dutch (Belgian)&quot;)&gt;
&lt;cfset testNum = &quot;-537&quot;&gt;
&lt;cfset testNum2 = &quot;5735&quot;&gt;
&lt;cfset testNumTotal = testNum + testNum2&gt;
&lt;cfoutput&gt;
#lSNumberFormat(testNum,&quot;-$_,____.__&quot;)#&lt;BR&gt;
#lSNumberFormat(testNum2,&quot;-$_,____.__&quot;)#&lt;BR&gt;
--------------&lt;BR&gt;
#lSNumberFormat(testNumTotal,&quot;-$_,____.__&quot;)#
&lt;/cfoutput&gt;
</code></pre>

<p>
Running this code produces this output:
</p>

<pre><code class="language-markup">BF- 537,00
BF 5.735,00
--------------
BF 5.198,00
</code></pre>



