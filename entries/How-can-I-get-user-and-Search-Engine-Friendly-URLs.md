---
title: How can I get user and Search Engine Friendly URLs?
published: July 6, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Miscellaneous
permalink: How-can-I-get-user-and-Search-Engine-Friendly-URLs.html
entryid: 104
---

<h3>How can I get user and Search Engine Friendly URLs?</h3>

<p>
Due to the dynamic nature of ColdFusion websites, you may find that some of your pages end up with a long string of url parameters that make the pages less then intuitive and user friendly.  Along with looking out for your human visitors, you may also want to optimize your dynamic URLS for more favorable search engine treatment.  While this recipe is not the place to debate search engine optimization techniques, we are running under the assumption that search engines seem to prefer more "human readable" URLS over dynamic URL strings.
</p>

<p>
Lets take a look at some sample URLS:
</p>

<p>
http://www.coldfusioncookbook.com/index.cfm?event=faq
</p>

<p>
works much better as:
</p>

<p>
http://www.coldfusioncookbook.com/faq
</p>

<p>
and
</p>

<p>
http://www.coldfusioncookbook.com/index.cfm?event=showentry&id=1
</p>

<p>
works much better as:
</p>

<p>
http://www.coldfusioncookbook.com/entry/1/How-do-I-mail-the-contents-of-a-form?
</p>

<p>
So how can you make your URLS more readable?  1) Write some custom code using the cgi.path_info variable, or 2) Have your web server do the work for you.
</p>

<p>
1) By using cgi.path_info and a little custom code, you can have ColdFusion parse down your more complex URLs in favor of something more simple.
</p>

<p>
It's really two parts. First we have to recognize the "weird" URL form - and once we do - we then parse it.
</p>

<p>
To begin with - whenever a URL comes in with the form, http://host/filename.cfm/stuff/at/the/end, your web server will recognize that "filename.cfm" is the file you want. It will then take the "extra" stuff and store it in a CGI variable, path_info. Sometimes - this CGI variable will also contain the filename. Luckily, Michael Dinowitz wrote a nice little article showing sample regex to "clean" this value. I don't seem to see a "direct" link to his article, but it on the House of Fusion website. (Look for the article, "Search Engine Safe (SES) URLs.) In this article he has a full blown UDF for dealing with the values, but I'm going to focus just on the regex. This example below shows it in action:
</p>

<pre><code class="language-markup">&lt;cfset pathInfo = reReplaceNoCase(trim(cgi.path_info), &quot;.+\.cfm/? *&quot;, &quot;&quot;)&gt;
&lt;cfoutput&gt;
cgi.path_info=#cgi.path_info#&lt;br&gt;
stripped: #pathInfo#
&lt;/cfoutput&gt;
</code></pre>

<p>
You don't have to worry too much about the regex, it basically just handles removing any potential filename from the CGI variable. I'm not seeing any filename on my Apache or IIS server, but I know I've seen it in the past.
</p>

<p>
At this point we have a pathInfo variable that will store any information that added to the end of our filename. How do we parse this? Obviously you have a ColdFusion list using the / character are a delimiter. In my example above, "http://host/filename/stuff/at/the/end", my pathInfo variable would have: "/stuff/at/the/end". How I parse that is up to the application. In BlogCFC, I check the length of the value (using listLen and / as the delimiter) to make sure the length is 4. The first three values refer to the date and the last item refers to the alias.
</p>

<p>
You may want to use a format that is like typical URL variables. Something like: http://host/filename.cfm/product/323. In this form, the URL is simply another way of saying: http://host/filename.cfm?product=323. To parse this form, I would have to loop over the list and set URL variables. Here is a sample that will do that:
</p>

<pre><code class="language-markup">function parseSES() {
   var pathInfo = reReplaceNoCase(trim(cgi.path_info), '.+\.cfm/? *', '');
   var i = 1;
   var lastKey = &quot;&quot;;
   var value = &quot;&quot;;
   
   if(not len(pathInfo)) return;
   for(i=1; i lte listLen(pathInfo, &quot;/&quot;); i=i+1) {
      value = listGetAt(pathInfo, i, &quot;/&quot;);
      if(i mod 2 is 0) url[lastKey] = value;
      else lastKey = value;
   }
   //did we end with a &quot;dangler?&quot;
   if((i-1) mod 2 is 1) url[lastKey] = &quot;&quot;;
   return;
   
}
</code></pre>

<p>
What are we doing here? As I mentioned before, we begin by looking for stuff after the final slash. If we find nothing, we exit the function. (Normally a UDF returns something. A return statement by itself just means to leave the function without returning anything at all.)
</p>

<p>
Next we treat the value as a list and loop over it. We want to do things in twos - in other words, the first item is a variable, the second is a value. We simply check our list counter, i, and on odd numbers, we store the value as "lastKey", and on even numbers, we write to the URL scope. (UDFs should never directly access variables outside their own scope. Except when they should. ;) This code assumes an even number of values. So what happens if the pathInfo variable is odd? (Ex: /products/5/foo) We treat this then as a "empty" variable and create the value in the URL scope with an empty string. This could be used as a flag. So for example, /productid/5/short, could mean set url.productid to 5, which is the database record to load, and "short" simply means show the shorthand version of the content. 
</p>

<p>
2) As far as having your web server do the work for you, The solution is configure your web server so that the actual URL is intercepted and then displayed it as a more readable or friendly URL.
</p>

<p>
Appache
</p>

<p>
Apache has mod rewrite capabilities.  You can set the rewrite rules in a .htaccess file.  This file is good for whatever folder you place it in.  So by placing the following code in a .htaccess file located at the root of your website, you would accomplish the url rewrites as shown in the sample URLS above.
</p>

<pre><code class="language-markup">RewriteEngine on
RewriteRule faq /\?event=faq [PT]
RewriteRule entry/([0-9]+)/.* /\?event=showentry&amp;id=$1 [PT]
</code></pre>

<p>
IIS
</p>

<p>
IIS does not have built in rewrite functionality, but you can add it with Ionic's free ISAPI Rewrite Filter : http://cheeso.members.winisp.net/IIRF.aspx
</p>

<p>
Credit Note: Raymond Camden helped write part of this entry.
</p>



