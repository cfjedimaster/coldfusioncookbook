---
title: How to I initialize a CFC at the same time as I create it?
published: April 17, 2006
author: Michael Dinowitz
authorwebsite: http://www.houseoffusion.com/
categories: Components
permalink: How-to-I-initialize-a-CFC-at-the-same-time-as-I-create-it.html
entryid: 83
---

<h3>How to I initialize a CFC at the same time as I create it?</h3>

<p>
In many examples using CFCs, the call that creates the CFC also calls an init() method. This is done to both create an instance of a CFC as well as initialize it with certain information. So for example, you may want to pass in a datasource name to a CFC so that the component can perform database queries. How is this done?
</p>

<p>
This is a 2 step process. The first is to call the CFC using syntax like the example below:
</p>

<pre><code class="language-markup">&lt;cfset cachedQuery = createObject(&quot;component&quot;, &quot;CachedQuery&quot;).init(dsn)&gt;
</code></pre>

<p>
This says to create a variable called cachedQuery which will contain a reference to a CFC. The CFC is created using the createObject() function. At the same time that the CFC is created, a method of the CFC called init() is called. Whatever is returned from the init() method is what will actually be loaded into the CachedQuery variable. This is called method chaning. It is essentially the act of calling multiple functions in one line. The result of the first operation (createObject) is passed to the next operation (init).
</p>

<p>
The CFC's init method could look something like this:
</p>

<pre><code class="language-markup">&lt;cffunction name=&quot;init&quot; access=&quot;public&quot; returntype=&quot;CachedQuery&quot; output=&quot;false&quot;&gt;
	&lt;cfargument name=&quot;dsn&quot; type=&quot;string&quot; required=&quot;yes&quot;&gt;
	&lt;!--- Set the DSN to the local variables for the CFC ---&gt;
	&lt;cfset variables.dsn = arguments.dsn&gt;
	&lt;!--- Return the query object ---&gt;
	&lt;cfreturn this&gt;		
&lt;/cffunction&gt;
</code></pre>

<p>
Very simply, it is expecting a string to be passed in and that string to be set to a local variable for the CFC called DSN. The important point here is two-fold. First, we are setting a returntype for this method (cffunction) to the name of the CFC. This is not 100% needed and you can ignore the return type totally if you want, but it's a good idea to have it here. The second thing is the most important. We will be returning THIS from the method. THIS is a reference to the entire CFC. The end result is that a reference to the CFC is passed back to the original call and then assigned to the outside variable resulting in a variable that holds a reference to the CFC. 
</p>



