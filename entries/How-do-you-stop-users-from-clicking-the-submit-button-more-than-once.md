---
title: How do you stop users from clicking the submit button more than once?
published: January 11, 2006
author: Larry C. Lyons
authorwebsite: http://www.lyonsmorris.com/lyons/
categories: Forms
permalink: How-do-you-stop-users-from-clicking-the-submit-button-more-than-once.html
entryid: 25
---

<h3>How do you stop users from clicking the submit button more than once?</h3>

<p>
If there is a form submission that may take a while, many users will click the submit button multiple times. One way to prevent that from happening is to add a bit of javascript to a form button that disables the button on the first submit. For example:
</p>

<pre><code class="language-markup">&lt;INPUT TYPE=&quot;Button&quot;  VALUE=&quot;Submit&quot; onClick=&quot;if(this.value == 'Submit') this.form.submit(); this.value = 'Please Wait.';this.disabled=true;&quot;&gt;
</code></pre>

<p>
Of course this depends on Javascript being turned on in the user's browser. Another option is to use ColdFusion's built in form handling with <cfform> and <cfinput>. The <cfinput> tag has a validate option "SubmitOnce", that will prevent users from submitting the form more than once.
</p>

<pre><code class="language-markup">&lt;cfinput type=&quot;submit&quot; name=&quot;submit&quot; value=&quot;Submit&quot; validate=&quot;SubmitOnce&quot;&gt;
</code></pre>



