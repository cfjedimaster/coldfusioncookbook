---
title: How can I dynamically  find what form fields have been posted into a page?
published: April 17, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Forms
permalink: How-can-I-dynamically--find-what-form-fields-have-been-posted-into-a-page.html
entryid: 82
---

<h3>How can I dynamically  find what form fields have been posted into a page?</h3>

<p>
ColdFusion provides two easy ways to obtain a list of all form variables that have been posted to a page. 
</p>

<p>
The first way is to use the form.fieldNames variable. The form.fieldNames variable is automatically available to any ColdFusion template that has received a form post and contains a comma-delimited list of form-field names that have been posted to the current template. 
</p>

<p>
The second way is to use the form structure. The form structure is a special ColdFusion structure that contains each form-field name and its associated value. The following is a code sample for displaying the content of the form structure.  Note how the form.fieldNames is filtered out of the result set:
</p>

<pre><code class="language-markup">&lt;cfloop collection=&quot;#form#&quot; item=&quot;theField&quot;&gt;
&lt;cfif theField is not &quot;fieldNames&quot;&gt;
&lt;cfoutput&gt;
#theField# = #form[theField]#&lt;br&gt;
&lt;/cfoutput&gt;
&lt;/cfif&gt;
&lt;/cfloop&gt;
</code></pre>



