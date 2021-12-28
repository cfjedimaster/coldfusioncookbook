---
title: How can I tell if a user has JavaScript enabled?
published: June 13, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: JavaScript
permalink: entries/How-can-I-tell-if-a-user-has-JavaScript-enabled.html
entryid: 99
---

<h3>How can I tell if a user has JavaScript enabled?</h3>

<p>
Because ColdFusion is a server side technology and JavaScript is a client side technology, you will need to use a 2 page check to see if JavaScript is enabled.  Your first page will perform the "is JavaScript enabled" test; your second page will display or record the results (save in a session variable etc).
</p>

<p>
One way to accomplish this task would be to set a cookie in JavaScript, and then test for the existence of this cookie via ColdFusion.  If the cookie exists, then you know JavaScript is enabled.  
</p>

<pre><code class="language-markup">&lt;!--- Page1.cfm ---&gt;
&lt;script language=&quot;JavaScript&quot;&gt;
&lt;!--
function setCookie(name, value) {
 var expDate = new Date()
 expDate.setTime(expDate.getTime() + 60*60*1000);
 document.cookie = name + &quot;=&quot; + escape(value) + &quot;;&quot; + expDate.toGMTString();
}
setCookie('JSCookie', 'true!');
// --&gt;
&lt;/script&gt;
&lt;!--- Page2.cfm ---&gt;
&lt;cfoutput&gt;#cookie.JSCookie#&lt;/cfoutput&gt;
</code></pre>

<p>
Another way to test for JavaScript is to use a JavaScript redirect.  If the browser supports JavaScript, it will be redirected.  You could also use a HTML Meta redirect to catch all instances that ignored the JavaScript redirection, and redirect them to a set of non-JavaScript enabled pages.  The code would look as follows:
</p>

<pre><code class="language-markup">&lt;script language=&quot;JavaScript&quot;&gt;
&lt;!-- Begin script
     window.location.replace(&quot;hasJS.cfm&quot;);
// End script --&gt;
&lt;/script&gt;
&lt;html&gt;
&lt;head&gt;
        &lt;META HTTP-EQUIV=REFRESH CONTENT=&quot;0;URL=noJS.cfm&quot;&gt;
&lt;/head&gt;
&lt;/html&gt;
</code></pre>



