---
title: How do I create a vCard/ vCalender link and have it download to MS Outlook?
published: June 2, 2006
author: Jeremy Petersen
authorwebsite: http://www.petersenfam.com/jeremy/
categories: Miscellaneous
permalink: How-do-I-create-a-vCard-vCalender-link-and-have-it-download-to-MS-Outlook.html
entryid: 95
---

<h3>How do I create a vCard/ vCalender link and have it download to MS Outlook?</h3>

<p>
Use &lt;cfcontent&gt; and &lt;cfheader&gt; to set the appropriate MIME and header types, then include the appropriate fields and data.  If MS Outlook is installed on the client, it will receive the data as a vCard!
</p>

<p>
The following sample static vCard was found out on the internet.  It can be used as a template to replace with your own dynamic data.
</p>

<pre><code class="language-markup">&lt;cfcontent type=&quot;text/x-vCalendar&quot;&gt; 
&lt;cfheader name=&quot;Content-Disposition&quot; value=&quot;inline; filename=newAppointment.vcs&quot;&gt; 
BEGIN:VCARD
VERSION:3.0
N;charset=iso-8859-1:Geuzaine;Christophe
BDAY;value=date:1973-02-06
EMAIL;type=HOME:geuz@geuz.org
URL;type=HOME:http://www.geuz.org
TITLE;charset=iso-8859-1:Postdoctoral Scholar
ORG;charset=iso-8859-1:Caltech, Applied and Computational Mathematics
ADR;type=WORK;charset=iso-8859-1:;;1200 E California Blvd;Pasadena;CA;91125;USA
TEL;type=WORK:1 626 395 4552
URL;type=WORK:http://www.acm.caltech.edu
END:VCARD
BEGIN:VCARD
VERSION:3.0
N;charset=iso-8859-1:Knudson;Donald Ernest
BDAY;value=date:01-29
TEL;type=HOME:+01-(0)2-234.56.78
EMAIL;type=HOME:duck@novosi.uni.gnu
NOTE;charset=iso-8859-1:1952 Permafrost Press Award winner
END:VCARD
BEGIN:VCARD
VERSION:3.0
N;charset=iso-8859-1:Knudson;Daffy Duck (with Bugs Bunny and Mr. Pluto)
NICKNAME;charset=iso-8859-1:gnat and gnu and pluto
BDAY;value=date:02-10;11-05;01-01
TEL;type=HOME:+01-(0)2-765.43.21
TEL;type=CELL:+01-(0)5-555.55.55
ACCOUNT;type=HOME:010-1234567-05
ADR;type=HOME;charset=iso-8859-1:;;Haight Street 512;Novosibirsk;;80214;Gnuland
TEL;type=HOME:+01-(0)2-876.54.32
ORG;charset=iso-8859-1:University of Novosibirsk, Department of Octopus Parthenogenesis
END:VCARD
BEGIN:VCARD
VERSION:3.0
N;charset=iso-8859-1:Knudson;Bip B.
NICKNAME;charset=iso-8859-1:road runner
BDAY;value=date:02-27
ADR;type=HOME;charset=iso-8859-1:;;Somewhere close to a falling rock;;;;
EMAIL;type=HOME:bip_bip@free.prov.gnu
END:VCARD
BEGIN:VCARD
VERSION:3.0
N;charset=iso-8859-1:Microknud Corp.;
ADR;type=WORK;charset=iso-8859-1:;;Haight Street 513;Novosibirsk;;80214;Gnuland
TEL;type=WORK:+01-(0)2-465.83.99
TEL;type=FAX:005.79.00
URL:http://foo.com/index.html
END:VCARD
BEGIN:VCARD
VERSION:3.0
N;charset=iso-8859-1:The Knudsoft Company;
EMAIL:knud@knudsoft.com
URL:http://foo.com/index.htm
END:VCARD
BEGIN:VCARD
VERSION:3.0
N;charset=iso-8859-1:Knudsoft (RS.2 Computer Room);
TEL;type=WORK:+01-(0)2-434.23.23
END:VCARD
</code></pre>



