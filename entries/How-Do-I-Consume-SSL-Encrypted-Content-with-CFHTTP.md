---
title: How do I consume SSL encrypted content with CFHTTP?
published: June 30, 2013
author: Joshua Miller
authorwebsite: http://www.jo5h.com
categories: Security
permalink: entries/How-Do-I-Consume-SSL-Encrypted-Content-with-CFHTTP.html
entryid: 156
---

<h3>How Do I Consume SSL Encrypted Content with CFHTTP?</h3>
	
<p>Many websites that use SSL certificates are not accessible via CFHTTP or via ColdFusion Web Services. This happens because the certificate issuing authority is not registered in the security keystore in the JVM that ColdFusion is running on top of. This can be remedied by installing the SSL certificate for the site or service you’re trying to consume. In order to do this, you will need to have administrative rights on the server (or local development machine) you are working on. Following is a step-by-step guide to installing an SSL certificate into your ColdFusion environment.</p>

<p>Prerequisites</p>

<p>You must have the following in order to complete this process:</p>

<ul>
<li>Administrative access to the ColdFusion server
<li>Functional JVM (Java Runtime or JDK) (http://java.com/)
<li>KeyTool GUI Application ("http://keytool-gui.software.informer.com/)
</ul>

<p>Installing KeyToolGUI</p>

<p>Follow these instructions to install the KeyTool GUI on the computer running ColdFusion</p>

<ul>
<li>Download the ZIP archive: http://keytool-gui.software.informer.com/
<li>Extract the entire /KeyTool GUI 1.7/ directory into your applications directory: c:/Program Files/ (Windows) or /Applications/ (Mac) so that you have a directory named: c:/Program Files/KeyTool GUI 1.7/ (Windows) or /Applications/KeyTool GUI 1.7/ (Mac)
<li>Run the application’s JAR (ktg-17.jar)
</ul>

<p>Step-by-Step Instructions (Windows)</p>

<ul>
<li>In your browser, navigate to the URL / URI where the SSL Certificate can be viewed
<li>Click on the padlock icon in the address bar (IE or Chrome) or at the bottom of the screen (Firefox)
<li>Select "View Certificates"
<li>Click on the "Details" tab and then click "Copy to File ..."
<li>Walk through the wizard to create a "DER encoded binary X.509 (CER)" format certificate
<li>Save the file to a local directory (i.e.: c:\SSL\)
<li>Open KeyTool GUI (c:\Program Files\KeyTool GUI 1.7\ktg-17.jar)
<li>Open the Java Keystore for ColdFusion (Show All Files): c:\ColdFusion9\runtime\jre\lib\security\cacerts\ (Windows)
<li>Enter password "changeit"
<li>Click on: Tools &gt; Import Trusted Certificate
<li>Locate the file you saved from IE (i.e.: c:\SSL\)
<li>Click "Import" and follow the wizard
<li>Save "cacerts" KeyStore
<li>Restart ColdFusion Service
</ul>

<p>Step-by-Step Instructions (OS X)</p>

<ul>
<li>In your browser, navigate to the URL / URI where the SSL Certificate can be viewed
<li>Click on the padlock icon in the address bar (Chrome, Firefox or Safari)
<li>Select "View Certificates"
<li>Click on the "Details" tab and then click "Export"
<li>Walk through the wizard to create a "DER encoded binary X.509 (CER)" format certificate
<li>Save the file to a local directory (i.e.: /Users//Desktop/)
<li>Open KeyTool GUI (/Applications/KeyTool GUI 1.7/ktg-17.jar)
<li>Open the Java Keystore for ColdFusion (Show All Files): /Applications/coldfusion9/runtime/jre/lib/cacerts/
</ul>

<p>** NOTE: Cacerts on Mac may also be found in: /Library/Java/lib/security/cacerts/ and you may need to make this writable using: sudo chmod 777 cacerts</p>

<ul>
<li>Enter password "changeit" or "changeme" (depending on Java version)
<li>Click on: Tools > Import Trusted Certificate
<li>Locate the file you saved from your browser (i.e.: Users/Desktop/)
<li>Click "Import" and follow the wizard
<li>Save "cacerts" KeyStore
<li>Restart ColdFusion Service:
</ul>

<p>
** Open Terminal<br/>
** cd /Applications/coldfusion9/bin (or /Applications/coldfusion10/cfusion/bin for CF10)<br/>
** ./coldfusion restart
</p>

<p>Note that you will not be able to consume the service or access the site until you restart the ColdFusion service.</p>	


