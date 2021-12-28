---
title: How do I use encryption in ColdFusion?
published: August 6, 2007
author: Raymond Camden
authorwebsite: http://www.raymondcamden.com
categories: Security
permalink: entries/How-do-I-use-encryption-in-ColdFusion.html
entryid: 132
---

<h3>How do I use encryption in ColdFusion?</h3>

<p>
ColdFusion makes it simply to use encryption to protect sensitive data. The basic process to encrypt data requires you to select a key. This key is used to both encrypt and decrypt the data. The same key must be used for both operations. Once you have selected a key, the code is simple:
</p>

<pre><code class="language-markup">&lt;cfset key = &quot;mysecretsarebetterthanyoursecrets&quot;&gt;
&lt;cfset string = &quot;my credit card number&quot;&gt;
&lt;cfset encrypted_string = encrypt(string,key)&gt;
</code></pre>

<p>
To decrypt the string, just reverse the process:
</p>

<pre><code class="language-markup">&lt;cfset decrypted_string = decrypt(encrypted_string, key)&gt;
</code></pre>

<p>
ColdFusion supports multiple types of encryption. These include AES, DES, DES-EDE, DESX, RC2, RC4, RC5, SHA1, SHA-256, HMAC-MD5, and others as well. The level of encryption supported depends on the edition of ColdFusion being run. ColdFusion also supports an encryptBinary and decryptBinary to support encryption of binary data.
</p>



