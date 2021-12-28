---
title: How can I work with remote HTML forms?
published: February 1, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Forms
permalink: How-can-I-work-with-remote-HTML-forms.html
entryid: 48
---

<h3>How can I work with remote HTML forms?</h3>

<p>
The nature of working with HTML form submission (or handler) pages is such that by default they do not make any distinction in regards to the source of the form data.  In other words, if a form handler page is expecting to receive the posting of a name and an address value, it does not know (or care) if the form date came from a page on your server, or from another server.  Take for example many of the web based credit card merchant account systems.  The typical scenario for these systems is for you to provide a form on your website that contains the form data you have collected for a shopping transaction.  You collect information such as the customer's name, billing address, and credit card number in a form.  You then post this form data to a specifically designed page on the credit card processing company's website.  This processing page performs all the magic of the credit card transaction, and then informs the user of the outcome.  The big problem with this scenario is that your customer has now left your website, and this is not the ideal solution or user experience.  
</p>

<p>
Amongst other functionality, the ColdFusion &lt;cfhttp&gt; tag provides a way for you to post form data to a remote form, and then retrieve the results that are outputted from the form results page into a ColdFusion variable.  You can then process the results variable (the form submission outcome) within your ColdFusion application.   So with our above credit card processing example, we could let &lt;cfhttp&gt; leave our website, post the form data, retrieve the results of the credit card transaction, then seamlessly display the outcome to the user, all from within our website.  
</p>

<p>
In order to use &lt;cfhttp&gt; to post to a remote form, you need to know the full address of the template you will be posting to.  You also need to know each expected form parameter, and include a &lt;cfhttpparam&gt; tag for each of these parameters.  A sample &lt;cfhttp&gt; form post would look as follows:
</p>

<pre><code class="language-markup">&lt;cfhttp url=&quot;http://127.0.0.1/formHandler.cfm&quot; method=&quot;post&quot;&gt;
&lt;cfhttpparam type=&quot;formField&quot; name=&quot;creditCardNumber&quot; value=&quot;#localCCNum#&quot;&gt;
&lt;cfhttpparam type=&quot;formField&quot; name=&quot;userName&quot; value=&quot;#localName#&quot;&gt;
&lt;/cfhttp&gt;
</code></pre>

<p>
Notice how we can pass in any value (in this case we are using the dynamic contents of ColdFusion variables) to the remote form via the &lt;cfhttpparam&gt; value parameter. 
</p>

<p>
The results of the form post will be contained in the cfhttp.fileContent variable.  You can access this variable to parse out and redisplay any data.  In our credit card processing scenario, we would probably want to parse out the transaction status message so we could dynamically show the user a success or failure message.
</p>

<p>
&lt;cfhttp&gt; is a very powerful tool, and it can be used for many things.  Some other common &lt;cfhttp&gt; tasks include grabbing current weather and stock quotes.  One final thing to remember about &lt;cfhttp&gt;: you are not limited to ColdFusion pages.  A form is a form, so feel free to use &lt;cfhttp&gt; to communicate with any other flavor of form, including those made with JSP, ASP, PHP, etc.
</p>



