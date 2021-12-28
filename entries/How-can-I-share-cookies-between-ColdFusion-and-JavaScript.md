---
title: How can I share cookies between ColdFusion and JavaScript?
published: April 3, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: JavaScript
permalink: entries/How-can-I-share-cookies-between-ColdFusion-and-JavaScript.html
entryid: 80
---

<h3>How can I share cookies between ColdFusion and JavaScript?</h3>

<p>
Sharing Cookies between ColdFusion and JavaScript is an easy way to pass data back and forth between the 2 technologies.  A cookie is a cookie- regardless of if it was set by ColdFusion, Java, .net, or JavaScript.  As long as you know the cookie name (including exact case in many situations) you can access and manipulate the cookie.  With that said, the biggest trick to sharing cookies between ColdFusion and JavaScript is to remember that ColdFusion ignores case, but JavaScript does not.  To use a JavaScript cookie in ColdFusion case does not matter.  But to use a ColdFusion cookie in JavaScript, you need to reference the cookie name all in caps.
</p>

<p>
The following code is broken into two pages.  The first page sets two cookies.  The first cookie is set via JavaScript, and the second cookie is set via ColdFusion.  The Second page then uses ColdFusion and JavaScript to display the contents of the cookie that was set by the other language:
</p>

<p>
 
</p>

<pre><code class="language-markup">&lt;!--- Page1.cfm ---&gt;
&lt;script language=javaScript&gt;
&lt;!--
//This function will set a JavaScript cookie
function setCookie(name, value) {
	//build an expiration time 1 hour into the future
	var expDate = new Date()
	expDate.setTime(ExpDate.getTime() + 60*60*1000);
	
	//set the cookie
  document.cookie = name + &quot;=&quot; + escape(value) + &quot;;&quot; + expDate.toGMTString();
}
setCookie('jSCookie', 'JavaScript!');
// --&gt;
&lt;/script&gt;
&lt;cfcookie name=&quot;cFCookie&quot; value=&quot;ColdFusion!&quot; expires=&quot;never&quot;&gt;
&lt;!--- Page2.cfm ---&gt;
&lt;script language=javaScript&gt;
&lt;!--
// This function will return the value of a JavaScript cookie
function getCookie(name) {
	//init output
  var output = null;
	//apend ; to end so we can calculate end of cookie text
  var myCookie = &quot; &quot; + document.cookie + &quot;;&quot;;
	//append = to cookie name so any additional text is the cookie value
  var search = &quot; &quot; + name + &quot;=&quot;;
	// init search start location
  var begin = myCookie.indexOf(search);
	//init search end location
  var end;
	//loop over cookie text and pull out the value we want
  if (begin != -1) {
    begin += search.length;
    end = myCookie.indexOf(&quot;;&quot;, begin);
    output = unescape(myCookie.substring(begin, end));
   }
   return output;
 }	
	
alert(getCookie('CFCOOKIE'));
// --&gt;
&lt;/script&gt;
&lt;cfoutput&gt;#cookie.jSCookie#&lt;/cfoutput&gt;
</code></pre>



