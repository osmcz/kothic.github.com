// © Jan van Steenbergen, 2006-2017
// from http://steen.free.fr/interslavic/transliterator_extended.html

function transcript ()
{
	document.write ('<table width="100%"><tr><td width="46%">');
	document.write ('<p style="text-align:center;">');
	document.write ('	<i><small>Change the orthography of this column to:<br><br> Script:&nbsp;&nbsp; <script type="text/javascript"> orthChoiceLat (); </script> ');
	document.write ('	&nbsp;&nbsp; Flavour:&nbsp;&nbsp;<script type="text/javascript"> flavChoiceLat (); </script> </small></i></p>');
	document.write ('<input id="hidden_text1" type="hidden" value="empty">');
	document.write ('</td><td width="4%"></td><td width="50%">');
	document.write ('<p style="text-align:center;">');
	document.write ('	<i><small>Change the orthography of this column to:<br><br> Script:&nbsp;&nbsp; <script type="text/javascript"> orthChoiceCyr (); </script>');
	document.write ('	&nbsp;&nbsp; Flavour: <script type="text/javascript"> flavChoiceCyr (); </script> </small></i></p>');
	document.write ('</td></tr></table>');
}

function transcript1 ()
{
	document.write ('<table width="100%"><tr><td width="46%">');
	document.write ('<p style="text-align:center;">');
	document.write ('	<i><small>Change this text to:<br><br> Script:&nbsp;&nbsp; <script type="text/javascript"> orthChoiceLat (); </script> ');
	document.write ('	&nbsp;&nbsp; Flavour:&nbsp;&nbsp;<script type="text/javascript"> flavChoiceLat (); </script> </small></i></p>');
	document.write ('<input id="hidden_text1" type="hidden" value="empty">');
	document.write ('</td></tr></table>');
}

function orthChoiceLat (veld)
{
	document.write ('<select id="lorth" onchange="ltrans ()">');
	document.write ('  <option value="1" checked>Latin</option>');
	document.write ('  <option value="2">Latin (ASCII)</option>');
	document.write ('  <option value="5">Cyrillic</option>');
	document.write ('  <option value="6">Cyrillic (Russian)</option>');
	document.write ('  <option value="7">Cyrillic (Ukrainian)</option>');
	document.write ('  <option disabled>--------------------------</option>');
	document.write ('  <option value="10">IPA-transcription</option>');
	document.write ('  <option value="11">Albanian</option>');
	document.write ('  <option value="12">Armenian</option>');
	document.write ('  <option value="18">Devanagari</option>');
	document.write ('  <option value="17">Ethiopian</option>');
	document.write ('  <option value="13">Georgian</option>');
	document.write ('  <option value="14">Greek</option>');
	document.write ('  <option value="15">Hungarian</option>');
	document.write ('  <option value="16">Latvian</option>');
	document.write ('</select>');
}

function flavChoiceLat (veld)
{
	document.write ('<select id="lflav" onchange="ltrans ()" style="margin:10px;">');
	document.write ('  <option value="2">MS Plus</option>');
	document.write ('  <option value="3">Medžuslovjanski</option>');
	document.write ('  <option disabled>--------------------------</option>');
	document.write ('  <option value="VZ">Sěverny variant</option>');
	document.write ('  <option value="J">Južny variant</option>');
	document.write ('  <option value="V">Vzhodny variant</option>');
	document.write ('  <option value="Z">Zapadny variant</option>');
	document.write ('  <option disabled>--------------------------</option>');
	document.write ('  <option value="I">Slovianski</option>');
	document.write ('  <option value="N">Neoslavonic</option>');
	document.write ('  <option value="4">Slovianto</option>');
	document.write ('  <option value="MZ">/Majar-Ziljski</option>');
	document.write ('  <option value="PI">/Pilát</option>');
	document.write ('  <option disabled>--------------------------</option>');
	document.write ('  <option value="R">Russian</option>');
	document.write ('  <option value="U">Ukrainian</option>');
	document.write ('  <option value="P">Polish</option>');
	document.write ('  <option value="S">Slovene</option>');
	document.write ('  <option value="C">Serbian</option>');
	document.write ('</select>');
}

function orthChoiceCyr (veld)
{
	document.write ('<select id="corth" onchange="ctrans ()">');
	document.write ('  <option value="5">Cyrillic</option>');
	document.write ('  <option value="6">Cyrillic (Russian)</option>');
	document.write ('  <option value="7">Cyrillic (Ukrainian)</option>');
	document.write ('  <option value="1">Latin</option>');
	document.write ('  <option value="2">Latin (ASCII)</option>');
	document.write ('  <option disabled>--------------------------</option>');
	document.write ('  <option value="10">IPA-transcription</option>');
	document.write ('  <option value="11">Albanian</option>');
	document.write ('  <option value="12">Armenian</option>');
	document.write ('  <option value="18">Devanagari</option>');
	document.write ('  <option value="17">Ethiopian</option>');
	document.write ('  <option value="13">Georgian</option>');
	document.write ('  <option value="14">Greek</option>');
	document.write ('  <option value="15">Hungarian</option>');
	document.write ('  <option value="16">Latvian</option>');
	document.write ('</select>');
}

function flavChoiceCyr (veld)
{
	document.write ('<select id="cflav" onchange="ctrans ()" style="margin:10px;">');
	document.write ('  <option value="2">MS Plus</option>');
	document.write ('  <option value="3">Medžuslovjanski</option>');
	document.write ('  <option disabled>--------------------------</option>');
	document.write ('  <option value="VZ">Sěverny variant</option>');
	document.write ('  <option value="J">Južny variant</option>');
	document.write ('  <option value="V">Vzhodny variant</option>');
	document.write ('  <option value="Z">Zapadny variant</option>');
	document.write ('  <option disabled>--------------------------</option>');
	document.write ('  <option value="I">Slovianski</option>');
	document.write ('  <option value="N">Neoslavonic</option>');
	document.write ('  <option value="4">Slovianto</option>');
	document.write ('  <option value="MZ">/Majar-Ziljski</option>');
	document.write ('  <option value="PI">/Pilát</option>');
	document.write ('  <option disabled>--------------------------</option>');
	document.write ('  <option value="R">Russian</option>');
	document.write ('  <option value="U">Ukrainian</option>');
	document.write ('  <option value="P">Polish</option>');
	document.write ('  <option value="S">Slovene</option>');
	document.write ('  <option value="C">Serbian</option>');
	document.write ('</select>');
}

function ltrans ()
{
  for (i=1; i<=14; i++)
  {
	veld = 'text' + i;
	var hidnaam = 'hidden_' + veld;
	if (document.getElementById(hidnaam).value != "") {
	if (document.getElementById(hidnaam).value == "empty") 	{ document.getElementById(hidnaam).value = document.getElementById(veld).innerHTML; }
	var iSource = document.getElementById(hidnaam).value;
	var type = document.getElementById('lorth').value; if (!type) type = 1; 
	var flav = document.getElementById('lflav').value; if (!flav) flav = "3";
	result = transliterate (iSource, type, flav, 0, 2);
	veld = 'l' + veld;
	document.getElementById(veld).innerHTML = result;
	} else {i=13;};
  }
}

function ctrans ()
{
  for (i=1; i<=4; i++)
  {
	veld = 'text' + i;
	var hidnaam = 'hidden_' + veld; 
	if (document.getElementById(hidnaam).value == "empty") 	{ document.getElementById(hidnaam).value = document.getElementById(veld).innerHTML; }
	var iSource = document.getElementById(hidnaam).value;
	var type = document.getElementById('corth').value; if (!type) type = 1; 
	var flav = document.getElementById('cflav').value; if (!flav) flav = "3";
	result = transliterate (iSource, type, flav, 0, 2); 
	veld = 'c' + veld;
	document.getElementById(veld).innerHTML = result;
  }
}

function transliterate (iSource, type, flav, caps, nms)
{
	var text = iSource;
	var result = "";

	if (!flav)						{ flav = "2"; }
	if (caps == 0)						{  }
	else if (caps == 1)					{ iSource = iSource.toUpperCase(); }
	else if (caps == 2)					{ iSource = iSource.toLowerCase(); }

	if (nms != "2")						{ nms = 1; }

	if ((type == 2) && (flav == "2"))			{ flav = "3"; }

	iSource = iSource.replace (/{/g,"<{");
	iSource = iSource.replace (/}/g,"}>");

	iSource = iSource.replace (/'''/g,"❸"); 
	iSource = iSource.replace (/''/g,"❷");
	iSource = iSource.replace (/'‘’‛/g,"’");
	iSource = iSource.replace (/\t/g,"₮");
	iSource = iSource.replace (/\n/g,"₦");

	var teken = new Array();
	teken[0] = '!'; teken[1] = '"'; teken[2] = '&'; teken[3] = '('; teken[4] = ')'; teken[5] = ','; teken[6] = '-'; teken[7] = '.'; teken[8] = '/'; 
	teken[9] = ':'; teken[10] = ';'; teken[11] = 'Ƹ'; teken[12] = 'Ǯ'; teken[13] = '?'; teken[14] = '['; teken[15] = ']'; teken[16] = '{';
	teken[17] = '}'; teken[18] = '|'; teken[19] = '«'; teken[20] = '»'; teken[21] = '–'; teken[22] = '—'; teken[23] = '‚'; teken[24] = '%';
	teken[25] = '“'; teken[26] = '”'; teken[27] = '„'; teken[28] = '‟'; teken[29] = '|'; teken[30] = '='; teken[31] = '₮'; teken[32] = '₦'; teken[33] = '❷'; teken[34] = '❸';

	while (iSource != "")
	{
		var nextW = "";
		var nextSpace = iSource.indexOf (" ");
		var nextHook  = iSource.indexOf ("<");

		var x;
		for (x in teken)
		{
			if ((iSource.indexOf (teken[x]) < nextSpace) && (iSource.indexOf (teken[x]) > -1))
			{
				nextSpace = iSource.indexOf (teken[x]);
			}
			else if ((nextSpace == -1) && (iSource.indexOf (teken[x]) > -1))
			{
				nextSpace = iSource.indexOf (teken[x]);
			}
		}


		if ((nextHook != -1) && ((nextSpace == -1) || (nextHook < nextSpace)))
		{
			nextW = iSource.substring (0, nextHook);
			iSource = iSource.substring (nextHook + 1, iSource.length);
			result += transliterateW (nextW, type, flav, nms);
			result += "<";

			var nextRHook = iSource.indexOf (">");
			if (nextRHook != -1)
			{
				nextW = iSource.substring (0, nextRHook);
				iSource = iSource.substring (nextRHook + 1, iSource.length);
				result += nextW;
				result += ">";
			}
		}
		else if (nextSpace == -1)
		{
			nextW = iSource; 
			iSource = "";
			result += transliterateW (nextW, type, flav, nms);
		}
		else if (nextSpace == 0)
		{ 
			result += iSource.charAt (nextSpace);
			iSource = iSource.substring (1, iSource.length);
		}
		else
		{
			nextW = iSource.substring (0, nextSpace);
			result += transliterateW (nextW, type, flav, nms);

			var leesteken = iSource.charAt (nextSpace);
			if (type == 17)
			{ 
				if      (leesteken == ".")	{ leesteken =  "።"; }
				else if (leesteken == ",")	{ leesteken =  "፣"; }
				else if (leesteken == ";")	{ leesteken =  "፤"; }
				else if (leesteken == ":")	{ leesteken =  "፥"; }
			}
			else if (type == 18)
			{ 
				if      (leesteken == ".")	{ leesteken =  "।"; }
			}
			result += leesteken;
			iSource = iSource.substring (nextSpace + 1, iSource.length);
		}
		
	}
	result = result.replace (/<{/g,"");
	result = result.replace (/}>/g,"");
	result = result.replace (/₮/g,'\t');
	result = result.replace (/₦/g,'\n');
	result = result.replace (/❸/g,"'''"); 
	result = result.replace (/❷/g,"''");


	return result;
}

function transliterateW (iW, type, flav, nms)
{ 	iW = "%" + iW + "%";
	OrigW = iW;
	iW = iW.toLowerCase();
	if (nms == 1) { iW = nmsify (iW); }

	iW = iW.replace (/%råzj/g,"%råz#j"); iW = iW.replace (/%razj/g,"%raz#j"); iW = iW.replace (/%izj/g,"%iz#j"); iW = iW.replace (/%bezj/g,"%bez#j"); iW = iW.replace (/%sj/g,"%s#j"); 
	iW = iW.replace (/%podj/g,"%pod#j"); iW = iW.replace (/%nadj/g,"%nad#j"); iW = iW.replace (/%odj/g,"%od#j"); iW = iW.replace (/%obj/g,"%ob#j"); iW = iW.replace (/%otj/g,"%ot#j");  
	iW = iW.replace (/%v`zj/g,"%v`z#j"); iW = iW.replace (/%vzj/g,"%vz#j"); iW = iW.replace (/%vozj/g,"%voz#j"); iW = iW.replace (/%vòzj/g,"%vòz#j"); 

	iW = iW.replace (/ľ/g,"lj"); iW = iW.replace (/ň/g,"nj"); iW = iW.replace (/ť/g,"tj"); iW = iW.replace (/ď/g,"dj"); 
	iW = iW.replace (/ś/g,"sj"); iW = iW.replace (/ź/g,"zj"); iW = iW.replace (/dzj/g,"dź"); iW = iW.replace (/đ/g,"dź"); iW = iW.replace (/jj/g,"ıj");

	iW = iW.replace (/rj/g,"ř");
	var aPos = iW.indexOf ("ř"); var vowel = /[aeiouyąęųáéíóœýåėěèòì]/;
	if  ((aPos > 1) && (iW.charAt (aPos - 1) != "%") && (vowel.test (iW.charAt (aPos - 1)) == false) && (vowel.test (iW.charAt (aPos + 1)) == false))	
	{ iW = iW.substring (0, aPos) + "ŕ" + iW.substring (aPos + 1, iW.length); }

	var rPos = iW.indexOf ("r"); var vowel = /[aeiouyąęųáéíóœýåėěèòì]/;
	if  ((rPos > 1) && (iW.charAt (rPos - 1) != "%") && (vowel.test (iW.charAt (rPos - 1)) == false) && (vowel.test (iW.charAt (rPos + 1)) == false))	
	{ iW = iW.substring (0, rPos) + "ṙ" + iW.substring (rPos + 1, iW.length); iW = iW.replace (/’ṙ/, "ṙ"); iW = iW.replace (/jṙ/, "ŕ"); iW = iW.replace (/ṙj/, "ŕ");
	  iW = iW.replace (/šṙ/g,"šŕ"); iW = iW.replace (/žṙ/g,"žŕ"); iW = iW.replace (/čṙ/g,"čŕ"); iW = iW.replace (/cṙ/g,"cŕ");  }

	iW = iW.replace (/ř/g,"rj");

	/* Flavourise */

	if ((flav == "2") || (flav == "3") || (flav == "4"))
		{ iW = iW.replace (/á/g,"a"); 
		  iW = iW.replace (/[éè]/g,"e"); 
		  iW = iW.replace (/ė/g,"ě"); 
		  iW = iW.replace (/[íì]/g,"i"); 
		  iW = iW.replace (/[œó]/g,"o"); 
		  iW = iW.replace (/ò%/g,"o%"); 
		  iW = iW.replace (/[ŀĺ]/g,"òl"); 
		  iW = iW.replace (/ý/g,"y");
		  iW = iW.replace (/ù/g,"v");	
		  iW = iW.replace (/ç/g,"c");
		  iW = iW.replace (/ʒ/g,"z");
		  iW = iW.replace (/ĵ/g,"j");
		  iW = iW.replace (/[ṱḓ]/g,"");
		  iW = iW.replace (/[’`]/g,"#%"); 
		  iW = iW.replace (/dź/g,"dž"); 
		}

	if (flav == "2")
		{ iW = iW.replace (/ı/g,"#"); 
		}

	if ((flav == "3") || (flav == "4"))
		{ iW = iW.replace (/[ęě]/g,"e");
		  iW = iW.replace (/å/g,"a"); 
		  iW = iW.replace (/ò/g,"o"); 
		  iW = iW.replace (/ų/g,"u"); 
		  iW = iW.replace (/ı/g,"#"); 
		  iW = iW.replace (/ć/g,"č"); 
		  iW = iW.replace (/čě/g,"če"); iW = iW.replace (/cě/g,"ce"); 
		  iW = iW.replace (/šě/g,"še"); iW = iW.replace (/žě/g,"že"); iW = iW.replace (/jě/g,"je"); 
		  iW = iW.replace (/čŕ/g,"čr"); iW = iW.replace (/cŕ/g,"cr"); 
		  iW = iW.replace (/šŕ/g,"šr"); iW = iW.replace (/žŕ/g,"žr"); 
		}

	if (flav == "4")
		{ iW = iW.replace (/y/g,"i");
		  iW = iW.replace (/lj/g,"l"); iW = iW.replace (/nj/g,"n"); 
		  iW = iW.replace (/rj/g,"r"); 
		  iW = iW.replace (/tj/g,"t"); iW = iW.replace (/dj/g,"d"); 
		  iW = iW.replace (/sj/g,"s"); iW = iW.replace (/zj/g,"z"); 
		}
	else if (flav == "VZ")
		{ iW = iW.replace (/čto/g,"čo"); iW = iW.replace (/ć/g,"č"); iW = iW.replace (/dź/g,"dž");
		  iW = iW.replace (/ç/g,"k"); iW = iW.replace (/ʒ/g,"g");
		  iW = iW.replace (/ṱ/g,"t"); iW = iW.replace (/ḓ/g,"d");
		  iW = iW.replace (/[ĵì]/g,"j");
		  iW = iW.replace (/ıj/g,"i");
		  iW = iW.replace (/á/g,"a");
		  iW = iW.replace (/[éėèě]/g,"e");
		  iW = iW.replace (/í/g,"i");
		  iW = iW.replace (/ý/g,"y");
		  iW = iW.replace (/œ%/g,"e%");
		  iW = iW.replace (/[åœò]/g,"o");
		  iW = iW.replace (/ų/g,"u"); iW = iW.replace (/ù/g,"v");
		  iW = iW.replace (/šę/g,"ša"); iW = iW.replace (/žę/g,"ža"); iW = iW.replace (/čę/g,"ča"); iW = iW.replace (/cę/g,"ca");
		  iW = iW.replace (/ję/g,"ja"); iW = iW.replace (/ę/g,"ja");
		  iW = iW.replace (/ṙ/g,"or"); iW = iW.replace (/ŕ/g,"er"); iW = iW.replace (/[ŀĺ]/g,"ol"); 
		  iW = iW.replace (/[`’]/g,"#%"); 
		}
	else if (flav == "V")
		{ iW = iW.replace (/čto/g,"čo"); iW = iW.replace (/ć/g,"č"); iW = iW.replace (/dź/g,"dž");
		  iW = iW.replace (/œĵų/g,"oj"); iW = iW.replace (/èĵų/g,"ej"); iW = iW.replace (/oĵų/g,"oj"); iW = iW.replace (/eĵų/g,"ej"); iW = iW.replace (/ų/g,"u"); 
		  iW = iW.replace (/ṙ/g,"or"); iW = iW.replace (/ŕ/g,"er"); iW = iW.replace (/[ŀĺ]/g,"ol"); 
		  iW = iW.replace (/ç/g,"c"); iW = iW.replace (/ʒ/g,"z");
		  iW = iW.replace (/[ṱḓ]/g,""); iW = iW.replace (/ĵ/g,"j"); iW = iW.replace (/ù/g,"v"); 
		  iW = iW.replace (/œ%/g,"oje%"); iW = iW.replace (/[œò]/g,"o"); 
		  iW = iW.replace (/[ěè]/g,"e"); 
		  iW = iW.replace (/%rå/g,"%ro"); iW = iW.replace (/%lå/g,"%lo");
		  iW = iW.replace (/rå/g,"oro"); iW = iW.replace (/lå/g,"olo");
		  iW = iW.replace (/rė/g,"ere"); iW = iW.replace (/lė/g,"olo");
		  iW = iW.replace (/šę/g,"ša"); iW = iW.replace (/žę/g,"ža"); iW = iW.replace (/čę/g,"ča"); iW = iW.replace (/cę/g,"ca");
		  iW = iW.replace (/ję/g,"ja"); iW = iW.replace (/ę/g,"ja");
		  iW = iW.replace (/ý%/g,"yj%"); iW = iW.replace (/í%/g,"ij%"); 
		  iW = iW.replace (/ý/g,"y"); iW = iW.replace (/[íı]/g,"i"); 
		  iW = iW.replace (/á/g,"aja"); iW = iW.replace (/é/g,"ije");
		  iW = iW.replace (/ì/g,"j");
		  iW = iW.replace (/[`’]/g,"#%"); 
		}
	else if (flav == "Z")
		{ iW = iW.replace (/čto/g,"co"); iW = iW.replace (/%kak/g,"%jak"); iW = iW.replace (/ògda/g,"ògdy");
		  iW = iW.replace (/œĵų/g,"u"); iW = iW.replace (/èĵų/g,"u"); iW = iW.replace (/oĵų/g,"u"); iW = iW.replace (/eĵų/g,"u"); 
		  iW = iW.replace (/aĵųt/g,"aju"); iW = iW.replace (/aĵųć/g,"ajuć"); iW = iW.replace (/aĵų/g,"am"); iW = iW.replace (/aĵe/g,"a"); iW = iW.replace (/ĵ/g,"j");
		  iW = iW.replace (/ç/g,"k"); iW = iW.replace (/ʒ/g,"g");
		  iW = iW.replace (/šć/g,"šč"); iW = iW.replace (/ć/g,"c"); iW = iW.replace (/dź/g,"dz");
		  iW = iW.replace (/vsj/g,"vš"); iW = iW.replace (/sj/g,"s"); iW = iW.replace (/zj/g,"z");
		  iW = iW.replace (/[å]/g,"o"); 
		  iW = iW.replace (/[éèœėò]/g,"e"); 
		  iW = iW.replace (/ý/g,"y"); iW = iW.replace (/í/g,"i"); iW = iW.replace (/á/g,"a"); 
		  iW = iW.replace (/ṱ/g,"t"); iW = iW.replace (/ḓ/g,"d"); iW = iW.replace (/[ųù]/g,"u"); 
		  iW = iW.replace (/ę/g,"ja"); iW = iW.replace (/ě/g,"je");
		  iW = iW.replace (/šj/g,"š"); iW = iW.replace (/žj/g,"ž"); iW = iW.replace (/čj/g,"č"); iW = iW.replace (/cj/g,"c"); iW = iW.replace (/jj/g,"j"); 
		  iW = iW.replace (/ì/g,"j");
		  iW = iW.replace (/ıj/g,"i");
		  iW = iW.replace (/[’`]/g,"#%"); 
		}
	else if (flav == "J")
		{ iW = iW.replace (/čto/g,"što"); iW = iW.replace (/%jak/g,"%kak"); iW = iW.replace (/ògdy/g,"ògda");
		  iW = iW.replace (/œĵų/g,"u"); iW = iW.replace (/èĵų/g,"u"); iW = iW.replace (/oĵų/g,"u"); iW = iW.replace (/eĵų/g,"u"); iW = iW.replace (/ų/g,"u"); 
		  iW = iW.replace (/aĵųt/g,"aju"); iW = iW.replace (/aĵųć/g,"ajuć"); iW = iW.replace (/aĵų/g,"am"); iW = iW.replace (/aĵe/g,"a"); iW = iW.replace (/ĵ/g,"j");
		  iW = iW.replace (/ç/g,"c"); iW = iW.replace (/ʒ/g,"z");
		  iW = iW.replace (/[ṱḓ]/g,""); iW = iW.replace (/ù/g,"v"); 
		  iW = iW.replace (/rj/g,"r"); iW = iW.replace (/tj/g,"t"); iW = iW.replace (/dj/g,"d"); iW = iW.replace (/sj/g,"s"); iW = iW.replace (/zj/g,"z");
		  iW = iW.replace (/šč/g,"št"); 
		  iW = iW.replace (/[ŀĺ]/g,"ol"); 
		  iW = iW.replace (/[åá]/g,"a");
		  iW = iW.replace (/[ęè]/g,"e");
		  iW = iW.replace (/ė/g,"ě");
		  iW = iW.replace (/[éyýìí]/g,"i"); 
		  iW = iW.replace (/œ/g,"o");
		  iW = iW.replace (/ò%/g,"o%");
		  iW = iW.replace (/ı/g,""); 
		  iW = iW.replace (/[`’]/g,"#%"); 
		}
	else if (flav == "I")
		{ iW = iW.replace (/čto/g,"čo"); 
		  iW = iW.replace (/ı/g,"#"); 
		  iW = iW.replace (/ç/g,"c"); iW = iW.replace (/ʒ/g,"z");
		  iW = iW.replace (/ć/g,"č"); iW = iW.replace (/dź/g,"dž");
		  iW = iW.replace (/ĵe/g,""); iW = iW.replace (/ĵ/g,"j");
		  iW = iW.replace (/sj/g,"s"); iW = iW.replace (/zj/g,"z");
		  iW = iW.replace (/[ŀĺ]/g,"ol"); 
		  iW = iW.replace (/[åá]/g,"a");
		  iW = iW.replace (/[ěęèėé]/g,"e");
		  iW = iW.replace (/[íì]/g,"i"); 
		  iW = iW.replace (/[œò]/g,"o");
		  iW = iW.replace (/ų/g,"u"); 
		  iW = iW.replace (/ù/g,"v"); 
		  iW = iW.replace (/ý/g,"y"); 
		  iW = iW.replace (/[ṱḓ]/g,""); 
		  iW = iW.replace (/[`’]/g,"#%"); 
		}
	else if (flav == "N")
		{ iW = iW.replace (/čto/g,"što"); iW = iW.replace (/%kak/g,"%jak"); iW = iW.replace (/ògdy/g,"ògda"); iW = iW.replace (/gdě/g,"kdě");
		  iW = iW.replace (/œĵų/g,"oj"); iW = iW.replace (/èĵų/g,"oj"); iW = iW.replace (/oĵų/g,"oj"); iW = iW.replace (/eĵų/g,"oj"); 
		  iW = iW.replace (/%v`/g,"%v’"); iW = iW.replace (/%s`/g,"%s’"); iW = iW.replace (/`/g,"’");
		  iW = iW.replace (/pě/g,"pĚ"); iW = iW.replace (/bě/g,"bĚ"); iW = iW.replace (/vě/g,"vĚ"); iW = iW.replace (/mě/g,"mĚ");
		  iW = iW.replace (/tě/g,"tĚ"); iW = iW.replace (/dě/g,"dĚ"); iW = iW.replace (/ně/g,"nĚ");
		  iW = iW.replace (/ki/g,"ky"); iW = iW.replace (/gi/g,"gy"); iW = iW.replace (/hi/g,"hy"); 
		  iW = iW.replace (/ç/g,"c"); iW = iW.replace (/ʒ/g,"z");
		  iW = iW.replace (/[ṱḓ]/g,""); 
		  iW = iW.replace (/ĵ/g,"j");
		  iW = iW.replace (/ć/g,"č"); iW = iW.replace (/dź/g,"dž"); iW = iW.replace (/šč/g,"št"); 
		  iW = iW.replace (/rj/g,"r"); iW = iW.replace (/tj/g,"t"); iW = iW.replace (/dj/g,"d"); iW = iW.replace (/sj/g,"s"); iW = iW.replace (/zj/g,"z");
		  iW = iW.replace (/[åá]/g,"a");
		  iW = iW.replace (/[ěęèėœò]/g,"e"); iW = iW.replace (/Ě/g,"ě");
		  iW = iW.replace (/[éìı]/g,"i"); 
		  iW = iW.replace (/[ýí]/g,"y"); 
		  iW = iW.replace (/[ųù]/g,"u"); 
		  iW = iW.replace (/#jan/g,"ěn"); 
		  iW = iW.replace (/%v’z/g,"%văz"); iW = iW.replace (/%văza/g,"%v’za"); iW = iW.replace (/%văzo/g,"%v’zo"); iW = iW.replace (/%văze/g,"%v’ze"); iW = iW.replace (/ă/g,"a"); 
		}
	else if (flav == "R")
	{ 	iW = iW.replace (/pj/g,"plj"); iW = iW.replace (/bj/g,"blj"); iW = iW.replace (/mj/g,"mlj"); iW = iW.replace (/vj/g,"vlj");
		iW = iW.replace (/ć/g,"č"); iW = iW.replace (/dź/g,"ž");
		iW = iW.replace (/ç/g,"c"); iW = iW.replace (/ʒ/g,"z"); iW = iW.replace (/[ṱḓ]/g,""); 
		iW = iW.replace (/ṙ/g,"or"); iW = iW.replace (/ŕ/g,"er"); iW = iW.replace (/[ŀĺ]/g,"ol"); 
		iW = iW.replace (/%rå/g,"%ra"); iW = iW.replace (/%lå/g,"%la"); iW = iW.replace (/%rė/g,"%re"); iW = iW.replace (/%lė/g,"%le");
		iW = iW.replace (/rå/g,"oro"); iW = iW.replace (/lå/g,"olo");
		iW = iW.replace (/rė/g,"ere"); iW = iW.replace (/lė/g,"olo"); 
		iW = iW.replace (/œĵų/g,"oj"); iW = iW.replace (/èĵų/g,"ej"); 
		iW = iW.replace (/mò%/g,"m%");
		iW = iW.replace (/[åò]/g,"o");
		iW = iW.replace (/ję/g,"ja"); iW = iW.replace (/ę/g,"ja"); 
		iW = iW.replace (/[ěèė]/g,"e");
		iW = iW.replace (/ų/g,"u"); iW = iW.replace (/ù/g,"v"); iW = iW.replace (/tì/g,"tj");
		iW = iW.replace (/ý%/g,"yj%"); iW = iW.replace (/í%/g,"ij%"); 
		iW = iW.replace (/ý/g,"y"); iW = iW.replace (/í/g,"i"); 
		iW = iW.replace (/á/g,"aja");
		iW = iW.replace (/œ%/g,"oje%"); iW = iW.replace (/œ/g,"o");
		iW = iW.replace (/jé%/g,"ije%"); iW = iW.replace (/é%/g,"yje%"); iW = iW.replace (/é/g,"e");
		iW = iW.replace (/[ìĵ]/g,"j");
		iW = iW.replace (/ji/g,"i");
		iW = iW.replace (/ı/g,"i");
		iW = iW.replace (/ky/g,"ki"); iW = iW.replace (/gy/g,"gi"); iW = iW.replace (/hy/g,"hi");  
		iW = iW.replace (/jj/g,"j"); iW = iW.replace (/šj/g,"š"); iW = iW.replace (/čj/g,"č"); iW = iW.replace (/žj/g,"ž"); 
		iW = iW.replace (/[`’]/g,"’#%"); 
		type = 6;
	}
	else if (flav == "U")
	{ 	iW = iW.replace (/pj/g,"plj"); iW = iW.replace (/bj/g,"blj"); iW = iW.replace (/mj/g,"mlj"); iW = iW.replace (/vj/g,"vlj");
		iW = iW.replace (/čto/g,"ščo"); iW = iW.replace (/ć/g,"č"); iW = iW.replace (/dź/g,"ž");
		iW = iW.replace (/ç/g,"k"); iW = iW.replace (/ʒ/g,"g"); iW = iW.replace (/[ṱḓ]/g,""); 
		iW = iW.replace (/ṙ/g,"or"); iW = iW.replace (/ŕ/g,"er"); iW = iW.replace (/[ŀĺ]/g,"ov"); 
		iW = iW.replace (/%rå/g,"%ro"); iW = iW.replace (/%lå/g,"%lo"); iW = iW.replace (/%rė/g,"%re"); iW = iW.replace (/%lė/g,"%le");
		iW = iW.replace (/rå/g,"oro"); iW = iW.replace (/lå/g,"olo");
		iW = iW.replace (/rė/g,"ere"); iW = iW.replace (/lė/g,"olo");
		iW = iW.replace (/å/g,"o");
		iW = iW.replace (/ję/g,"ja"); iW = iW.replace (/ę/g,"ja"); 
		iW = iW.replace (/è/g,"e");
		iW = iW.replace (/ò/g,"o");
		iW = iW.replace (/ų/g,"u"); iW = iW.replace (/ù/g,"v");
		iW = iW.replace (/[yì]/g,"i");
		iW = iW.replace (/ý%/g,"ij%"); iW = iW.replace (/í%/g,"ij%"); 
		iW = iW.replace (/[íý]/g,"i"); 
		iW = iW.replace (/á/g,"a"); iW = iW.replace (/é%/g,"í%"); iW = iW.replace (/é/g,"e"); 
		iW = iW.replace (/œ%/g,"e%"); iW = iW.replace (/œ/g,"o");
		iW = iW.replace (/ě/g,"í"); iW = iW.replace (/ì/g,"y"); iW = iW.replace (/ĵ/g,"j");
		iW = iW.replace (/ıje/g,"ıja");
		iW = iW.replace (/nı/g,"nn"); iW = iW.replace (/tı/g,"tt"); iW = iW.replace (/dı/g,"dd"); iW = iW.replace (/lı/g,"ll"); iW = iW.replace (/sı/g,"ss");
		iW = iW.replace (/ıj/g,"j"); iW = iW.replace (/jj/g,"j"); iW = iW.replace (/šj/g,"š"); iW = iW.replace (/čj/g,"č"); iW = iW.replace (/žj/g,"ž"); 
		iW = iW.replace (/yja/g,"ija"); iW = iW.replace (/yji/g,"iji"); iW = iW.replace (/yju/g,"iju");
		iW = iW.replace (/ay/g,"ai"); iW = iW.replace (/ey/g,"ej"); iW = iW.replace (/iy/g,"ii");
		iW = iW.replace (/oy/g,"oi"); iW = iW.replace (/uy/g,"ui"); iW = iW.replace (/yy/g,"yi");
		iW = iW.replace (/rj%/g,"r%");
		iW = iW.replace (/ostj/g,"ístj");
		iW = iW.replace (/’/g,"#%"); 
		iW = iW.replace (/pj/g,"p`j");
		iW = iW.replace (/bj/g,"b`j");
		iW = iW.replace (/fj/g,"f`j");
		iW = iW.replace (/vj/g,"v`j");
		iW = iW.replace (/mj/g,"m`j");
		iW = iW.replace (/rj/g,"r`j");
		type = 7;
	}
	else if (flav == "P")
	{	iW = iW.replace (/èĵų/g,"ų"); iW = iW.replace (/œĵų/g,"ų"); 
	 	iW = iW.replace (/aĵųt/g,"ajų"); iW = iW.replace (/aĵųć/g,"ajųć"); iW = iW.replace (/aĵų/g,"am"); 
		iW = iW.replace (/aĵe/g,"a"); iW = iW.replace (/ěĵe/g,"ě"); iW = iW.replace (/ĵ/g,"j");
	 	iW = iW.replace (/%e/g,"%E"); iW = iW.replace (/e/g,"je"); iW = iW.replace (/E/g,"e");
		iW = iW.replace (/ě/g,"jě"); iW = iW.replace (/ė/g,"jė"); iW = iW.replace (/ę/g,"ję"); iW = iW.replace (/è/g,"jè"); 
		iW = iW.replace (/i/g,"ji"); iW = iW.replace (/ì/g,"j");
		iW = iW.replace (/í/g,"ji"); iW = iW.replace (/ý/g,"y"); iW = iW.replace (/á/g,"a");
		iW = iW.replace (/å/g,"o");
		iW = iW.replace (/čto/g,"co"); iW = iW.replace (/šć/g,"šč"); iW = iW.replace (/ć/g,"c"); iW = iW.replace (/dź/g,"dz");
		iW = iW.replace (/ç/g,"k"); iW = iW.replace (/ʒ/g,"g"); iW = iW.replace (/ṱ/g,"t"); iW = iW.replace (/ḓ/g,"d"); 
		iW = iW.replace (/ĺ/g,"jĺ"); 
		iW = iW.replace (/stj/g,"sjtj"); iW = iW.replace (/spj/g,"sjpj"); iW = iW.replace (/svj/g,"sjvj"); 
		iW = iW.replace (/smj/g,"sjmj"); iW = iW.replace (/snj/g,"sjnj");iW = iW.replace (/srj/g,"sjr"); iW = iW.replace (/slj/g,"sjlj"); 
		iW = iW.replace (/zdj/g,"zjdj"); iW = iW.replace (/zbj/g,"zjbj"); iW = iW.replace (/zvj/g,"zjvj"); 
		iW = iW.replace (/zmj/g,"zjmj"); iW = iW.replace (/znj/g,"zjnj"); iW = iW.replace (/zrj/g,"zjr"); iW = iW.replace (/zlj/g,"zjlj"); 
		iW = iW.replace (/tj/g,"#tj"); iW = iW.replace (/dj/g,"#dj"); iW = iW.replace (/sj/g,"#sj"); iW = iW.replace (/zj/g,"#zj");
		iW = iW.replace (/nj/g,"#nj"); iW = iW.replace (/rj/g,"#rj"); iW = iW.replace (/lj/g,"#lj");
		iW = iW.replace (/ět/g,"at"); iW = iW.replace (/ědz/g,"edz"); iW = iW.replace (/ěd/g,"ad"); iW = iW.replace (/ěs/g,"as");
		iW = iW.replace (/ěz/g,"az"); iW = iW.replace (/ěn/g,"an"); iW = iW.replace (/ěr/g,"ar"); iW = iW.replace (/ěl/g,"al");
		iW = iW.replace (/ŕt/g,"art"); iW = iW.replace (/ŕd/g,"ard"); iW = iW.replace (/ŕs/g,"ars");
		iW = iW.replace (/ŕz/g,"arz"); iW = iW.replace (/ŕn/g,"arn"); iW = iW.replace (/ŕl/g,"arl"); iW = iW.replace (/ŕ/g,"jèr");
		iW = iW.replace (/jĺt/g,"lut"); iW = iW.replace (/jĺd/g,"lud"); iW = iW.replace (/jĺs/g,"lus");
		iW = iW.replace (/jĺz/g,"luz"); iW = iW.replace (/jĺn/g,"lun"); iW = iW.replace (/jĺr/g,"lur"); iW = iW.replace (/ĺ/g,"jèľ");
		iW = iW.replace (/tŀ/g,"tlu"); iW = iW.replace (/dŀ/g,"dlu"); iW = iW.replace (/sŀ/g,"slu"); iW = iW.replace (/zŀ/g,"zlu"); iW = iW.replace (/ŀ/g,"el");
		iW = iW.replace (/#/g,"");
		iW = iW.replace (/mò%/g,"my%");
		iW = iW.replace (/ṙ/g,"ar");
		iW = iW.replace (/[òěèėéœ]/g,"e");
		iW = iW.replace (/ù/g,"u");
		iW = iW.replace (/ıj/g,"j"); iW = iW.replace (/jjj/g,"j"); iW = iW.replace (/jj/g,"j"); iW = iW.replace (/cj/g,"c"); iW = iW.replace (/dzj/g,"dz"); iW = iW.replace (/rj/g,"rz"); 
		iW = iW.replace (/šj/g,"š"); iW = iW.replace (/čj/g,"č"); iW = iW.replace (/žj/g,"ž"); 
		iW = iW.replace (/ši/g,"šy"); iW = iW.replace (/či/g,"čy"); iW = iW.replace (/ži/g,"žy"); 
		iW = iW.replace (/ci/g,"cy"); iW = iW.replace (/dzi/g,"dzy"); iW = iW.replace (/rzi/g,"rzy"); 
		iW = iW.replace (/dj/g,"dzj"); iW = iW.replace (/tj/g,"cj");
		iW = iW.replace (/ji/g,"i");
		iW = iW.replace (/’/g,"");
		type = 3;
	}
	else if (flav == "S")
	{	iW = iW.replace (/’/g,"#%"); 
		iW = iW.replace (/ı/g,""); 
		iW = iW.replace (/èĵų/g,"ų"); iW = iW.replace (/œĵų/g,"ų"); 
	 	iW = iW.replace (/aĵųt/g,"ajų"); iW = iW.replace (/aĵųć/g,"ajųć"); iW = iW.replace (/aĵų/g,"am"); 
		iW = iW.replace (/aĵe/g,"a"); iW = iW.replace (/ěĵe/g,"ě"); iW = iW.replace (/ĵ/g,"j");
	 	iW = iW.replace (/pj/g,"plj"); iW = iW.replace (/bj/g,"blj"); iW = iW.replace (/mj/g,"mlj"); iW = iW.replace (/vj/g,"vlj");
		iW = iW.replace (/čto/g,"što");
		iW = iW.replace (/ć/g,"č"); iW = iW.replace (/dź/g,"j");
		iW = iW.replace (/ç/g,"c"); iW = iW.replace (/ʒ/g,"z"); iW = iW.replace (/[ṱḓ]/g,""); 
		iW = iW.replace (/sj/g,"s"); iW = iW.replace (/zj/g,"z"); iW = iW.replace (/tj/g,"t"); iW = iW.replace (/dj/g,"d");
		iW = iW.replace (/mò%/g,"mo%"); 
		iW = iW.replace (/[åá]/g,"a");
		iW = iW.replace (/œ%/g,"o");
		iW = iW.replace (/œgo%/g,"ega"); iW = iW.replace (/ego%/g,"ega");
		iW = iW.replace (/[ęěėéèòœ]/g,"e");
		iW = iW.replace (/[yíýì]/g,"i"); 
		iW = iW.replace (/ų/g,"o"); iW = iW.replace (/ù/g,"u");
		type = 1;
	}
	else if (flav == "C")
	{	iW = iW.replace (/èĵų/g,"ų"); iW = iW.replace (/œĵų/g,"ų"); 
	 	iW = iW.replace (/aĵųt/g,"ajų"); iW = iW.replace (/aĵųć/g,"ajųć"); iW = iW.replace (/aĵų/g,"am"); 
		iW = iW.replace (/aĵe/g,"a"); iW = iW.replace (/ěĵe/g,"ě"); iW = iW.replace (/ĵ/g,"j");
	 	iW = iW.replace (/pj/g,"plj"); iW = iW.replace (/bj/g,"blj"); iW = iW.replace (/mj/g,"mlj"); iW = iW.replace (/vj/g,"vlj");
		iW = iW.replace (/čto/g,"što");
		iW = iW.replace (/ç/g,"c"); iW = iW.replace (/ʒ/g,"z"); iW = iW.replace (/[ṱḓ]/g,""); 
		iW = iW.replace (/tıj/g,"ć"); iW = iW.replace (/dıj/g,"dź"); iW = iW.replace (/ı/g,""); 
		iW = iW.replace (/rj/g,"r"); iW = iW.replace (/sj/g,"s"); iW = iW.replace (/zj/g,"z"); iW = iW.replace (/tj/g,"t"); iW = iW.replace (/dj/g,"d"); iW = iW.replace (/jj/g,"j");
		iW = iW.replace (/[ŀĺ]/g,"u"); iW = iW.replace (/œgo%/g,"oga"); iW = iW.replace (/ego%/g,"ega%");
		iW = iW.replace (/[åáèò]/g,"a");
		iW = iW.replace (/[ęěėé]/g,"e");
		iW = iW.replace (/[yíýì]/g,"i"); 
		iW = iW.replace (/œ/g,"o"); iW = iW.replace (/ų/g,"u"); iW = iW.replace (/ù/g,"v");
		type = 8;
	}
	else if (flav == "MZ")
	{	iW = iW.replace (/%ima/g,"%jima"); iW = iW.replace (/%imě/g,"%jimě"); 
		iW = iW.replace (/%ih/g,"%jih"); iW = iW.replace (/%im%/g,"%jim%"); 
		iW = iW.replace (/ego%/g,"ega%"); iW = iW.replace (/œgo/g,"œga");
		iW = iW.replace (/èĵų/g,"oj"); iW = iW.replace (/œĵų/g,"oj"); iW = iW.replace (/ĵ/g,"j");
		iW = iW.replace (/mò%/g,"mo%");
		iW = iW.replace (/[ṙŕ]/g,"er"); iW = iW.replace (/[ŀĺ]/g,"ol"); 
		iW = iW.replace (/[åá]/g,"a"); iW = iW.replace (/[éèęò]/g,"e"); iW = iW.replace (/ė/g,"ě"); iW = iW.replace (/[iíìyý]/g,"í");  
		iW = iW.replace (/œ/g,"o"); iW = iW.replace (/ų/g,"u"); iW = iW.replace (/ù/g,"v");
		iW = iW.replace (/ç/g,"c"); iW = iW.replace (/ʒ/g,"z"); iW = iW.replace (/[ṱḓ]/g,""); 
		iW = iW.replace (/sj/g,"s"); iW = iW.replace (/zj/g,"z"); iW = iW.replace (/tj/g,"t"); iW = iW.replace (/dj/g,"d");
		iW = iW.replace (/ć/g,"č"); iW = iW.replace (/dź/g,"dj");
		iW = iW.replace (/`/g,"%"); 
		iW = iW.replace (/[ı’]/g,""); 
		iW = iW.replace (/slov#jan/g,"slavjan"); 
		if ((type > 4) && (type < 10))	{ type = 5; }
		else 				{ type = 1; iW = iW.replace (/í/g,"i"); }
	}
	else if (flav == "PI")
		{ iW = iW.replace (/ç/g,"k"); iW = iW.replace (/ʒ/g,"g"); iW = iW.replace (/ṱ/g,"t"); iW = iW.replace (/ḓ/g,"d"); 
		  iW = iW.replace (/čto/g,"što"); iW = iW.replace (/ć/g,"ť"); iW = iW.replace (/dź/g,"ď");
		  iW = iW.replace (/òĵǫ%/g,"ų%"); iW = iW.replace (/èĵų%/g,"ǫ%"); iW = iW.replace (/ĵ/g,"j"); 
		  iW = iW.replace (/ıj/g,"ij"); 
		  iW = iW.replace (/[èéœ]/g,"e"); 
		  iW = iW.replace (/[ėě]/g,"ě"); 
		  iW = iW.replace (/[åá]/g,"a");
		  iW = iW.replace (/[ṙŕ]/g,"r"); iW = iW.replace (/[ŀĺ]/g,"l");
		  iW = iW.replace (/ò/g,"ă");
		  iW = iW.replace (/ų/g,"ǫ"); iW = iW.replace (/ù/g,"u"); iW = iW.replace (/[ìı]/g,"i");
		  iW = iW.replace (/ý%/g,"yj%"); iW = iW.replace (/í%/g,"ij%");  
		  iW = iW.replace (/ý/g,"y"); iW = iW.replace (/í/g,"i");  
		  iW = iW.replace (/nj/g,"ń"); iW = iW.replace (/rj/g,"ŕ"); iW = iW.replace (/ŕ%/g,"r%");
		  iW = iW.replace (/sj/g,"s"); iW = iW.replace (/zj/g,"z");
		  iW = iW.replace (/tj/g,"ť"); iW = iW.replace (/dj/g,"ď"); iW = iW.replace (/lj/g,"ľ"); 
		  iW = iW.replace (/%jě/g,"%ja"); 
		  iW = iW.replace (/#jan/g,"ěn"); 
		  iW = iW.replace (/mă%/g,"me%");
		  iW = iW.replace (/[’`]/g,"%"); 
		  iW = iW.replace (/ki/g,"ky"); iW = iW.replace (/gi/g,"gy"); iW = iW.replace (/hi/g,"hy");
		  type = 0;
		}

	else if (flav == "SX")
		{ iW = iW.replace (/ç/g,"k"); iW = iW.replace (/ʒ/g,"g"); iW = iW.replace (/[ṱḓì]/g,"");  
		  iW = iW.replace (/čto/g,"što"); iW = iW.replace (/ć/g,"č"); iW = iW.replace (/dź/g,"đ");
		  iW = iW.replace (/òĵǫ%/g,"ų%"); iW = iW.replace (/èĵų%/g,"ǫ%"); iW = iW.replace (/ĵ/g,"j"); 
		  iW = iW.replace (/nj/g,"n"); iW = iW.replace (/rj/g,"r"); iW = iW.replace (/sj/g,"s"); iW = iW.replace (/zj/g,"z");
		  iW = iW.replace (/tj/g,"t"); iW = iW.replace (/dj/g,"d"); iW = iW.replace (/lj/g,"l"); 
		  iW = iW.replace (/ıj/g,"i"); 
		  iW = iW.replace (/y/g,"i"); 
		  iW = iW.replace (/%j/g,"%J"); iW = iW.replace (/j/g,"i");  iW = iW.replace (/J/g,"j"); 
		  iW = iW.replace (/[ýíáéóœ]/g,"ju"); 
		  iW = iW.replace (/[èéėě]/g,"e"); 
		  iW = iW.replace (/ę/g,"ia"); 
		  iW = iW.replace (/å/g,"a");
		  iW = iW.replace (/ṙ/g,"or"); iW = iW.replace (/ŕ/g,"er"); iW = iW.replace (/[ŀĺ]/g,"ol");
		  iW = iW.replace (/ò/g,"o");
		  iW = iW.replace (/[ùų]/g,"u"); 
		  iW = iW.replace (/[’`]/g,"%"); 
		  iW = iW.replace (/š/g,"sx"); iW = iW.replace (/ž/g,"zx"); iW = iW.replace (/č/g,"cx"); iW = iW.replace (/đ/g,"gx");
		  type = 0;
		}

	/* Cyrillic */

	if ((type > 4) && (type < 10))
	{ iW = iW.replace (/[ṙŕ]/g,"’r");
	  iW = iW.replace (/[ŀĺ]/g,"’l");
	}

	if ((type == 6) || (type == 7))
	{ iW = iW.replace (/ae/g,"aэ");
	  iW = iW.replace (/ee/g,"eэ");
	  iW = iW.replace (/ie/g,"iэ");
	  iW = iW.replace (/oe/g,"oэ");
	  iW = iW.replace (/ue/g,"uэ");
	  iW = iW.replace (/%e/g,"%э");
	  iW = iW.replace (/ja/g,"я");
	  iW = iW.replace (/je/g,"ѥ");
	  iW = iW.replace (/ji/g,"ї");
	  iW = iW.replace (/ju/g,"ю");
	  iW = iW.replace (/ję/g,"ѩ");
	  iW = iW.replace (/jų/g,"ѭ");
	}

	if (type == 6)
	{ iW = iW.replace (/ѥ/g,"е");
	  iW = iW.replace (/ї/g,"и");
	  iW = iW.replace (/шч/g,"щ");
	}

	else if (type == 7)
	{ iW = iW.replace (/ѥ/g,"є");
	  iW = iW.replace (/э/g,"е");
	  iW = iW.replace (/šč/g,"щ");
	  iW = iW.replace (/’/g,""); 
	}

	else if (type == 8)
	{ iW = iW.replace (/lj/g,"љ");
	  iW = iW.replace (/nj/g,"њ");
	  iW = iW.replace (/’/g,"");
	}

	if ((type > 4) && (type < 10))
	{ iW = iW.replace (/lj/g,"ль");
	  iW = iW.replace (/nj/g,"нь");
	  iW = iW.replace (/rj/g,"рь");
	  iW = iW.replace (/tj/g,"ть");
	  iW = iW.replace (/dj/g,"дь");
	  iW = iW.replace (/sj/g,"сь");
	  iW = iW.replace (/zj/g,"зь");
	  iW = iW.replace (/ć/g,"ћ");
	  iW = iW.replace (/dź/g,"ђ"); iW = iW.replace (/đ/g,"ђ");
	  iW = iW.replace (/[ṙŕ]/g,"ър"); 
	  iW = iW.replace (/[aå]/g,"а");
	  iW = iW.replace (/b/g,"б");
	  iW = iW.replace (/v/g,"в");
	  iW = iW.replace (/g/g,"г");
	  iW = iW.replace (/d/g,"д");
	  iW = iW.replace (/e/g,"е");
	  iW = iW.replace (/ž/g,"ж");
	  iW = iW.replace (/z/g,"з");
	  iW = iW.replace (/i/g,"и");
	  iW = iW.replace (/j/g,"ј");
	  iW = iW.replace (/k/g,"к");
	  iW = iW.replace (/l/g,"л");
	  iW = iW.replace (/m/g,"м");
	  iW = iW.replace (/n/g,"н");
	  iW = iW.replace (/o/g,"о");
	  iW = iW.replace (/p/g,"п");
	  iW = iW.replace (/r/g,"р");
	  iW = iW.replace (/s/g,"с");
	  iW = iW.replace (/t/g,"т");
	  iW = iW.replace (/u/g,"у");
	  iW = iW.replace (/f/g,"ф");
	  iW = iW.replace (/h/g,"х");
	  iW = iW.replace (/c/g,"ц");
	  iW = iW.replace (/č/g,"ч");
	  iW = iW.replace (/š/g,"ш");
	  iW = iW.replace (/y/g,"ы");
	  iW = iW.replace (/ě/g,"ѣ");
	  iW = iW.replace (/[ò’]/g,"ъ"); 
	  iW = iW.replace (/`/g,"’"); 
	  iW = iW.replace (/ų/g,"ѫ"); 
	  iW = iW.replace (/ę/g,"ѧ");
	  iW = iW.replace (/í/g,"і");

	  if ((flav > "2") && (flav < "5"))
	  {
		iW = iW.replace (/ъ/,"");
	  }
	}

	if ((type == 6) || (type == 7))
	{ iW = iW.replace (/ј/g,"й");
	}

	/* IPA */

	if (type == 10)
	{ iW = iW.replace (/e/g,"ɛ"); 
	  iW = iW.replace (/ě/g,"jɛ"); iW = iW.replace (/ę/g,"jæ"); 
	  iW = iW.replace (/šj/g,"š"); iW = iW.replace (/čj/g,"č"); iW = iW.replace (/žj/g,"ž"); 
	  iW = iW.replace (/jj/g,"j"); iW = iW.replace (/ćj/g,"ć"); iW = iW.replace (/źj/g,"źæ"); 
	  iW = iW.replace (/y/g,"ɪ"); iW = iW.replace (/kɪ/g,"ki"); iW = iW.replace (/gɪ/g,"gi"); iW = iW.replace (/hɪ/g,"hi");  
	  iW = iW.replace (/å/g,"ɒ");
	  iW = iW.replace (/o/g,"ɔ");
	  iW = iW.replace (/[ŕṙ]/g,"ər");
	  iW = iW.replace (/[ŀĺ]/g,"əl");
	  iW = iW.replace (/[ò’]/g,"ə");
	  iW = iW.replace (/ų/g,"u");

	  iW = iW.replace (/c/g,"ʦ"); iW = iW.replace (/č/g,"ʧ"); iW = iW.replace (/ć/g,"ʨ");
	  iW = iW.replace (/dz/g,"ʣ"); iW = iW.replace (/dž/g,"ʤ"); iW = iW.replace (/dź/g,"ʥ");
	  iW = iW.replace (/h/g,"x");
	  iW = iW.replace (/š/g,"ʃ");
	  iW = iW.replace (/ž/g,"ʒ");
	  iW = iW.replace (/stj/g,"ɕc"); 
	  iW = iW.replace (/zdj/g,"ʑɟ");
	  iW = iW.replace (/tj/g,"c");
	  iW = iW.replace (/dj/g,"ɟ");
	  iW = iW.replace (/sj/g,"ɕ");
	  iW = iW.replace (/zj/g,"ʑ");
	  iW = iW.replace (/rj/g,"rʲ");
	  iW = iW.replace (/nj/g,"ɲ");
	  iW = iW.replace (/l/g,"ɫ"); iW = iW.replace (/ɫi/g,"li"); iW = iW.replace (/ɫɛ/g,"lɛ"); iW = iW.replace (/ɫj/g,"ʎ"); 
	  iW = iW.replace (/ʦj/g,"ʦʲ"); iW = iW.replace (/ʣj/g,"ʣʲ");
	}

	else if (type == 14)
	{ 	iW = iW.replace (/čt/g,"tzj"); iW = iW.replace (/ć/g,"č"); iW = iW.replace (/šč/g,"stzj");
		iW = iW.replace (/dź/g,"dzj");
		iW = iW.replace (/ṙ/g,"or"); iW = iW.replace (/ŕ/g,"er"); iW = iW.replace (/[ŀĺ]/,"ol"); 
		iW = iW.replace (/ę/g,"ě"); 
		iW = iW.replace (/pě/g,"pje"); iW = iW.replace (/bě/g,"bje"); iW = iW.replace (/vě/g,"vje"); iW = iW.replace (/mě/g,"mje"); 
		iW = iW.replace (/tě/g,"tje"); iW = iW.replace (/dě/g,"dje"); iW = iW.replace (/ně/g,"nje"); 
		iW = iW.replace (/å/g,"a"); 
		iW = iW.replace (/ě/g,"e"); 
		iW = iW.replace (/ò/g,"o");
		iW = iW.replace (/ų/g,"u");
		iW = iW.replace (/š/g,"sj"); iW = iW.replace (/ž/g,"zj"); iW = iW.replace (/č/g,"tzj");
		iW = iW.replace (/jj/g,"j"); 
	}

	else if (type == 17)
	{ 	iW = iW.replace (/å/g,"a"); 
		iW = iW.replace (/je/g,"jE"); iW = iW.replace (/če/g,"čE"); iW = iW.replace (/še/g,"šE"); iW = iW.replace (/že/g,"žE"); 
		iW = iW.replace (/će/g,"ćE"); iW = iW.replace (/dźe/g,"dźE"); iW = iW.replace (/e/g,"ä"); iW = iW.replace (/E/g,"e"); 
		iW = iW.replace (/[ěę]/g,"jä"); iW = iW.replace (/jj/g,"j"); 
		iW = iW.replace (/y/g,"i"); 
		iW = iW.replace (/ò/g,"o"); 
		iW = iW.replace (/ų/g,"u"); 
		iW = iW.replace (/ù/g,"w"); 
		iW = iW.replace (/[ŕṙ]/g,"r"); 
		iW = iW.replace (/[ĺŀ]/g,"l");
		iW = iW.replace (/ć/g,"č"); 
		iW = iW.replace (/dž/g,"ǧ"); iW = iW.replace (/dź/g,"ǧ");
		iW = iW.replace (/nj/g,"ñ"); 
		iW = iW.replace (/’/g,""); 
	}

	if ((type == 1) || (type == 2) || (type == 3) || ((type > 10) && (type < 20)))
	{
		if (type == 2) { iW = iW.replace (/ć/g,"tj"); iW = iW.replace (/dź/g,"đj"); }

		var i = 0;
		var wLength = iW.length;
		var nextChar = "";
		var resC = "";
		var result = "";

		while (i < wLength)
		{
			nextChar = iW.charAt (i);
			resC = nextChar;
			var vowel = /[aeiouyęųåěò]/

			switch (nextChar)
			{
			case "j":	if  (iW.charAt (i - 1) == "%")							{ resC = "j"; break; }
					else if (iW.charAt (i - 1) == "j")						{ resC = "j"; break; }
					else if ((vowel.test (iW.charAt (i - 1)) == false) 
						&& (vowel.test (iW.charAt (i + 1)) == true))				{ resC = "ь"; break; }
					else if ((vowel.test (iW.charAt (i - 1)) == false) 
						&& (vowel.test (iW.charAt (i + 1)) == false))				{ resC = "Ь"; break; }
					else										{ resC = "j"; break; }
			}
			i++;
			result += resC;
		}
	}
	else
	{
		result = iW;
	}

	/* (V)j(V)	= j */
	/* Cj(C)  	= Ь */
	/* CjV		= ь */

	if (type == 1)
	{	if (flav == "2")
		{ result = result.replace (/ь/g,"j");
		  result = result.replace (/ṙ/g,"r");
		}
		else if ((flav == "3") || (flav == "4"))
		{ result = result.replace (/ь/g,"j");
		  result = result.replace (/[ṙŕ]/g,"r");
		  result = result.replace (/sЬ/g,"s"); result = result.replace (/zЬ/g,"z");

		}
		else if (flav == "VZ")
		{ result = result.replace (/li/g,"lii"); result = result.replace (/ь/g,"i"); 
		  result = result.replace (/l/g,"ł"); result = result.replace (/łe/g,"le"); result = result.replace (/łi/g,"l"); result = result.replace (/ii/g,"i");
		  result = result.replace (/łi/g,"l"); result = result.replace (/łЬ/g,"l");
		  result = result.replace (/h/g,"ch");
		}
		else if (flav == "V")
		{ result = result.replace (/ь/g,"Ь");
		}
		else if (flav == "N")
		{ result = result.replace (/ь/g,"j");
		  result = result.replace (/lЬ/g,"l");
		  result = result.replace (/nЬ/g,"nj");
		  result = result.replace (/Ь/g,"");
		  result = result.replace (/ě/g,"ie"); result = result.replace (/ks/g,"x"); 
		  result = result.replace (/[ŀĺ]/g,"’l"); result = result.replace (/[ṙŕ]/g,"’r");
		}
		else if (flav == "I")
		{ result = result.replace (/ь/g,"Ь");
		  result = result.replace (/nЬ/g,"ň");
		  result = result.replace (/rЬ/g,"ř");
		  result = result.replace (/[ṙŕ]/g,"r");
		}
		else if (flav == "Z")
		{ result = result.replace (/ьi/g,"i");
		  result = result.replace (/ь/g,"i");
		  result = result.replace (/h/g,"ch");
		  result = result.replace (/[ŀĺ]/g,"l"); result = result.replace (/[ṙŕ]/g,"r");
		}
		else
		{ result = result.replace (/ò/g,"ă");
		  result = result.replace (/[Ьь]/g,"j");
		  result = result.replace (/[ṙŕ]/g,"r");
		  result = result.replace (/[ŀĺ]/g,"ol");
		  result = result.replace (/dź/g,"đ"); 
		}

		if ((flav == "2") || (flav == "3") || (flav == "4") || (flav == "V") || (flav == "VZ") || (flav == "Z") || (flav == "I"))
		{ result = result.replace (/lЬ/g,"ľ");
		  result = result.replace (/nЬ/g,"ń");
		  result = result.replace (/rЬ/g,"ŕ");
		  result = result.replace (/tЬ/g,"ť"); 
		  result = result.replace (/dЬ/g,"ď"); 
		  result = result.replace (/sЬ/g,"ś");
		  result = result.replace (/zЬ/g,"ź");
		  result = result.replace (/Ь/g,"j");
		} 
	}

	else if (type == 2)
		{ result = result.replace (/ьi/g,"ji");
		  if (flav == "Z")	{ result = result.replace (/ь/g,"i"); }
		  else			{ result = result.replace (/ь/g,"j"); result = result.replace (/Ь#/g,""); }
		  result = result.replace (/Ь/g,"'");
		  result = result.replace (/š/g,"sz");
		  result = result.replace (/č/g,"cz");
		  result = result.replace (/ž/g,"zs");
		  result = result.replace (/ć/g,"t");
		  result = result.replace (/đ/g,"d");
		  result = result.replace (/ě/g,"ie");
		  result = result.replace (/å/g,"a");
		  result = result.replace (/ę/g,"e");
		  result = result.replace (/ò/g,"o");
		  result = result.replace (/ų/g,"u");
		  result = result.replace (/[ŀĺ]/g,"ol");
		  result = result.replace (/[ṙŕ]/g,"r");
		  if (flav == "N")	{ result = result.replace (/’/g,"'"); }
		  else if (flav == "J")	{ result = result.replace (/’/g,"'"); result = result.replace (/'/g,"j"); }
		  else			{ result = result.replace (/’/g,""); }
		}

	else if (type == 3)
		{ result = result.replace (/[áå]/g,"a");
		  result = result.replace (/ç/g,"c");
		  result = result.replace (/[éèėě]/g,"e");
		  result = result.replace (/[íì]/g,"i");
		  result = result.replace (/ĵ/g,"j");
		  result = result.replace (/[ŀĺ]/g,"ol");
		  result = result.replace (/[òóœ]/g,"o");
		  result = result.replace (/ṙ/g,"or");
		  result = result.replace (/ŕ/g,"er");
		  result = result.replace (/ù/g,"u");
		  result = result.replace (/ý/g,"y");
		  result = result.replace (/ʒ/g,"z");
		  result = result.replace (/[ṱḓ’]/g,"");

		  if (flav != "P")
			  {	result = result.replace (/cьe/g,"cje"); result = result.replace (/dzьe/g,"dzje"); 
				result = result.replace (/cьę/g,"cję"); result = result.replace (/dzьę/g,"dzję"); 
				result = result.replace (/lь/g,"ĺь"); result = result.replace (/lЬ/g,"ľ"); result = result.replace (/li/g,"ĺi"); result = result.replace (/le/g,"ĺe"); 
			  }
		    else  {	result = result.replace (/lь/g,"ĺ"); result = result.replace (/lЬ/g,"ĺ"); result = result.replace (/li/g,"ĺi"); result = result.replace (/rzь/g,"rz");
			  }
		  result = result.replace (/ь/g,"i");
		  result = result.replace (/Ь/g,"ь");
		  result = result.replace (/ьý/g,"ьí"); 
		  result = result.replace (/ų/g,"ą");
		  result = result.replace (/š/g,"sz");
		  result = result.replace (/č/g,"cz");
		  result = result.replace (/rь/g,"ŕ");
		  result = result.replace (/ž/g,"ż");
		  result = result.replace (/v/g,"w");
		  result = result.replace (/h/g,"ch");
		  result = result.replace (/l/g,"ł"); result = result.replace (/ĺ/g,"l"); 
		  result = result.replace (/tь/g,"ť"); result = result.replace (/ti/g,"ti"); 
		  result = result.replace (/dь/g,"ď"); result = result.replace (/di/g,"di");
		  result = result.replace (/cь/g,"ć"); result = result.replace (/ci/g,"ci"); 
		  result = result.replace (/dzь/g,"dź"); result = result.replace (/dzi/g,"dzi");
		  result = result.replace (/sь/g,"ś");
		  result = result.replace (/zь/g,"ź");
		  result = result.replace (/lь/g,"ĺ");
		  result = result.replace (/nь/g,"ń");
		  result = result.replace (/ь/g,"j");

		  result = result.replace (/ii/g,"i"); result = result.replace (/ji/g,"i"); 
		  result = result.replace (/iy/g,"i"); result = result.replace (/jy/g,"i"); 
		  result = result.replace (/ky/g,"ki"); result = result.replace (/ke/g,"kie");
		  result = result.replace (/gy/g,"gi"); result = result.replace (/ge/g,"gie");
		  result = result.replace (/jn/g,"#jn"); result = result.replace (/js/g,"#js"); 
		  result = result.replace (/cyj/g,"cj"); result = result.replace (/cyi/g,"cji"); result = result.replace (/lij/g,"li");
		  result = result.replace (/ya/g,"ja"); result = result.replace (/yą/g,"ją"); 
		  result = result.replace (/yu/g,"ju"); result = result.replace (/yo/g,"jo");
		  result = result.replace (/rzj/g,"rj");
		  result = result.replace (/#/g,""); 
		}

	else if (type == 11)
		{ 
		  result = result.replace (/[ŕṙ]/g,"ër"); 
		  result = result.replace (/[ĺŀ]/g,"ël"); 
		  result = result.replace (/å/g,"a");  
		  result = result.replace (/ě/g,"je"); 
		  result = result.replace (/[ò’]/g,"ë");
		  result = result.replace (/ų/g,"û"); result = result.replace (/ę/g,"jê"); 
		  result = result.replace (/dź/g,"xh");
		  result = result.replace (/šj/g,"š"); result = result.replace (/čj/g,"č"); result = result.replace (/žj/g,"ž"); 
		  result = result.replace (/jj/g,"j"); 

		  result = result.replace (/rЬ/g,"R");
		  result = result.replace (/rь/g,"Rj");
		  result = result.replace (/rj/g,"Rj");
		  result = result.replace (/ri/g,"Ri");
		  result = result.replace (/%r/g,"%rr");
		  result = result.replace (/R/g,"r");

		  result = result.replace (/[Ьь]/g,"j");

		  result = result.replace (/dž/g,"xh");
		  result = result.replace (/dz/g,"x");
		  result = result.replace (/šč/g,"shq");
		  result = result.replace (/š/g,"sh");
		  result = result.replace (/ž/g,"zh");
		  result = result.replace (/[ćč]/g,"ç");
		  result = result.replace (/tj/g,"q"); 
		  result = result.replace (/dj/g,"gj"); 
		  result = result.replace (/sj/g,"s"); 
		  result = result.replace (/zj/g,"z"); 
		  result = result.replace (/le/g,"Ľe"); result = result.replace (/li/g,"Ľi"); result = result.replace (/lj/g,"Ľ");
		  result = result.replace (/l/g,"ll"); result = result.replace (/Ľ/g,"l");
		  result = result.replace (/y/g,"i");
		}

	else if (type == 12)
		{ result = result.replace (/Ь#ь/g,"i");
		  result = result.replace (/[ěę]/g,"je");
		  result = result.replace (/[ṙŕ]/g,"òr");  
		  result = result.replace (/[ŀĺ]/g,"òl");   
		  result = result.replace (/dź/g,"dž");
		  result = result.replace (/šj/g,"š"); result = result.replace (/čj/g,"č"); 
		  result = result.replace (/žj/g,"ž"); result = result.replace (/jj/g,"j"); 
		  result = result.replace (/dz/g,"ձ");
		  result = result.replace (/dž/g,"ջ");
		  result = result.replace (/a/g,"ա");
		  result = result.replace (/b/g,"բ");
		  result = result.replace (/g/g,"գ");
		  result = result.replace (/d/g,"դ");
		  result = result.replace (/%e/g,"է");
		  result = result.replace (/e/g,"ե");
		  result = result.replace (/z/g,"զ");
		  result = result.replace (/[åò’]/g,"ը");
		  result = result.replace (/ž/g,"ժ");
		  result = result.replace (/[iy]/g,"ի");
		  result = result.replace (/l/g,"լ");
		  result = result.replace (/h/g,"խ");
		  result = result.replace (/c/g,"ծ");
		  result = result.replace (/k/g,"կ");
		  result = result.replace (/m/g,"մ");
		  result = result.replace (/[jь]/g,"յ");
		  result = result.replace (/Ь/g,"");  
		  result = result.replace (/n/g,"ն");
		  result = result.replace (/š/g,"շ");
		  result = result.replace (/%o/g,"%օ");
		  result = result.replace (/o/g,"ո");
		  result = result.replace (/[čć]/g,"չ");
		  result = result.replace (/p/g,"պ");
		  result = result.replace (/%r/g,"%ռ");
		  result = result.replace (/r/g,"ր");
		  result = result.replace (/s/g,"ս");
		  result = result.replace (/v/g,"վ");
		  result = result.replace (/t/g,"տ");
		  result = result.replace (/[uų]/g,"ու");
		  result = result.replace (/f/g,"ֆ");
		  result = result.replace (/,/g,",");
		  result = result.replace (String.fromCharCode(46),":");
		  result = result.replace (String.fromCharCode(63),"՞");
		  result = result.replace (/;/g,"՝");
		  result = result.replace (/!/g,"՜");
		  result = result.replace (/«/g,"«");
		  result = result.replace (/»/g,"»");
		}

	else if (type == 13)
		{ result = result.replace (/Ь#ь/g,"i");
		  result = result.replace (/ć/g,"č"); result = result.replace (/dź/g,"dž");
		  result = result.replace (/ṙ/g,"or"); result = result.replace (/ŕ/g,"or");  
		  result = result.replace (/[ŀĺ]/g,"ol");   
		  result = result.replace (/[ěę]/g,"je");
		  result = result.replace (/ij/g,"i"); result = result.replace (/ji/g,"i"); result = result.replace (/Ь/g,""); 
		  result = result.replace (/[iyjь]/g,"ი"); result = result.replace (/იი/g,"ი"); 
		  result = result.replace (/dž/g,"ჯ");
		  result = result.replace (/[aå]/g,"ა");
		  result = result.replace (/b/g,"ბ");
		  result = result.replace (/g/g,"გ");
		  result = result.replace (/d/g,"დ");
		  result = result.replace (/e/g,"ე");
		  result = result.replace (/v/g,"ვ");
		  result = result.replace (/z/g,"ზ");
		  result = result.replace (/k/g,"კ");
		  result = result.replace (/l/g,"ლ");
		  result = result.replace (/m/g,"მ");
		  result = result.replace (/n/g,"ნ");
		  result = result.replace (/[oò’]/g,"ო");
		  result = result.replace (/p/g,"პ");
		  result = result.replace (/ž/g,"ჟ");
		  result = result.replace (/r/g,"რ");
		  result = result.replace (/s/g,"ს");
		  result = result.replace (/t/g,"ტ");
		  result = result.replace (/[uų]/g,"უ");
		  result = result.replace (/f/g,"ფ");
		  result = result.replace (/h/g,"ხ");
		  result = result.replace (/š/g,"შ");
		  result = result.replace (/[ćč]/g,"ჩ");
		  result = result.replace (/c/g,"ც");
		}

	else if (type == 14)
		{ result = result.replace (/ky/g,"ki"); result = result.replace (/gy/g,"gi"); 
		  result = result.replace (/ogo%/g,"ogω%"); result = result.replace (/ego%/g,"egω%"); result = result.replace (/%od/g,"%ωt"); 
		  result = result.replace (/%v`/g,"%vo"); result = result.replace (/%s`/g,"%so");
		  result = result.replace (/Ь/g,""); result = result.replace (/jь/g,"ь");
		  result = result.replace (/ija/g,"ьa"); result = result.replace (/ije/g,"ьe"); result = result.replace (/iji/g,"ьi");
		  result = result.replace (/ijo/g,"ьo"); result = result.replace (/iju/g,"ьu");
		  result = result.replace (/tj/g,"t");
		  result = result.replace (/dj/g,"d");
		  result = result.replace (/sj/g,"s");
		  result = result.replace (/zj/g,"z");
		  result = result.replace (/rj/g,"r");

		  result = result.replace (/ks/g,"ξ");
		  result = result.replace (/ps/g,"ψ");
		  result = result.replace (/a/g,"VαV");
		  result = result.replace (/v/g,"β");
		  result = result.replace (/b/g,"μπ");
		  result = result.replace (/g/g,"γ");
		  result = result.replace (/d/g,"δ");
		  result = result.replace (/e/g,"VεV");
		  result = result.replace (/z/g,"ζ");
		  result = result.replace (/i/g,"VηV");
		  result = result.replace (/j/g,"ι");
		  result = result.replace (/ь/g,"ι");
		  result = result.replace (/k/g,"κ");
		  result = result.replace (/l/g,"λ");
		  result = result.replace (/m/g,"μ");
		  result = result.replace (/n/g,"ν");
		  result = result.replace (/o/g,"VοV");
		  result = result.replace (/p/g,"π");
		  result = result.replace (/r/g,"ρ");
		  result = result.replace (/s%/g,"ς%");
		  result = result.replace (/s/g,"σ");
		  result = result.replace (/t/g,"τ");
		  result = result.replace (/y/g,"VυV");
		  result = result.replace (/u/g,"VουV");
		  result = result.replace (/f/g,"φ");
		  result = result.replace (/h/g,"χ");
		  result = result.replace (/c/g,"τζ");

		  result = result.replace (/%ι/g,"%ϊ");
		  result = result.replace (/VιV/g,"VϊV");
		  result = result.replace (/V/g,"");

		  result = result.replace (/;/g,"·");
		  result = result.replace (String.fromCharCode(63),";");
		}

	else if (type == 15)
		{ result = result.replace (/Ь#ь/g,"ь");
		  result = result.replace (/a/g,"á"); result = result.replace (/å/g,"a"); 
		  result = result.replace (/[ěę]/g,"je");
		  result = result.replace (/[ṙŕ]/g,"ör"); result = result.replace (/[ŀĺ]/g,"öl");  
		  result = result.replace (/y/g,"ü"); 
		  result = result.replace (/[ò’]/g,"ö"); result = result.replace (/ų/g,"ú");
		  result = result.replace (/ć/g,"č"); result = result.replace (/dź/g,"dž");
		  result = result.replace (/šj/g,"š"); result = result.replace (/čj/g,"č"); 
		  result = result.replace (/žj/g,"ž"); result = result.replace (/jj/g,"j"); 

		  result = result.replace (/sЬ/g,"s"); result = result.replace (/zЬ/g,"z"); result = result.replace (/rЬ/g,"r");
		  result = result.replace (/[Ьь]/g,"j");
		  result = result.replace (/tj/g,"ty"); 
		  result = result.replace (/dj/g,"gy"); 
		  result = result.replace (/lj/g,"ly");
		  result = result.replace (/nj/g,"ny");
		  result = result.replace (/yj/g,"y");
		  result = result.replace (/s/g,"sz");
		  result = result.replace (/š/g,"s");
		  result = result.replace (/ž/g,"zs");
		  result = result.replace (/č/g,"cs");
		}

	else if (type == 16)
		{ result = result.replace (/ṙ/g,"or"); result = result.replace (/ŕ/g,"er"); result = result.replace (/[ŀĺ]/g,"ol"); 
		  result = result.replace (/å/g,"a"); 
		  result = result.replace (/[ò’]/g,"o"); 
		  result = result.replace (/[ěę]/g,"ьē"); 
		  result = result.replace (/i/g,"ьi"); result = result.replace (/y/g,"i");
		  result = result.replace (/ų/g,"ū"); 
		  result = result.replace (/čt/g,"č"); result = result.replace (/ć/g,"č"); result = result.replace (/dź/g,"dž");
		  result = result.replace (/šj/g,"š"); result = result.replace (/čj/g,"č"); 
		  result = result.replace (/žj/g,"ž"); result = result.replace (/jj/g,"j"); 

		  result = result.replace (/tЬ/g,"ķ");
		  result = result.replace (/dЬ/g,"ģ");
		  result = result.replace (/rЬ/g,"Ŗ");
		  result = result.replace (/lЬ/g,"ļ");
		  result = result.replace (/nЬ/g,"ņ");
		  result = result.replace (/Ь/g,"");
		  result = result.replace (/tь/g,"ķ");
		  result = result.replace (/dь/g,"ģ");
		  result = result.replace (/rь/g,"Ŗ");
		  result = result.replace (/lь/g,"ļ");
		  result = result.replace (/nь/g,"ņ");
		  result = result.replace (/jь/g,"j");
		  result = result.replace (/ьī/g,"ī");
		  result = result.replace (/ьi/g,"i");
		  result = result.replace (/ь/g,"i");
		}

	else if (type == 17)
	{
	result = result.replace(/Ь/g,"");
	result = result.replace(/ь/g,"j");

	result = result.replace(/bä/g,"በ");
	result = result.replace(/bu/g,"ቡ");
	result = result.replace(/bi/g,"ቢ");
	result = result.replace(/ba/g,"ባ");
	result = result.replace(/be/g,"ቤ");
	result = result.replace(/bə/g,"ብ");
	result = result.replace(/bo/g,"ቦ");
	result = result.replace(/b/g,"ብ");

	result = result.replace(/cä/g,"ጸ");
	result = result.replace(/cu/g,"ጹ");
	result = result.replace(/ci/g,"ጺ");
	result = result.replace(/ca/g,"ጻ");
	result = result.replace(/ce/g,"ጼ");
	result = result.replace(/cə/g,"ጽ");
	result = result.replace(/co/g,"ጾ");
	result = result.replace(/c/g,"ጽ");

	result = result.replace(/čä/g,"ቸ");
	result = result.replace(/ču/g,"ቹ");
	result = result.replace(/či/g,"ቺ");
	result = result.replace(/ča/g,"ቻ");
	result = result.replace(/če/g,"ቼ");
	result = result.replace(/čə/g,"ች");
	result = result.replace(/čo/g,"ቾ");
	result = result.replace(/č/g,"ች");

	result = result.replace(/dä/g,"ደ");
	result = result.replace(/du/g,"ዱ");
	result = result.replace(/di/g,"ዲ");
	result = result.replace(/da/g,"ዳ");
	result = result.replace(/de/g,"ዴ");
	result = result.replace(/də/g,"ድ");
	result = result.replace(/do/g,"ዶ");
	result = result.replace(/d/g,"ድ");

	result = result.replace(/fä/g,"ፈ");
	result = result.replace(/fu/g,"ፉ");
	result = result.replace(/fi/g,"ፊ");
	result = result.replace(/fa/g,"ፋ");
	result = result.replace(/fe/g,"ፌ");
	result = result.replace(/fə/g,"ፍ");
	result = result.replace(/fo/g,"ፎ");
	result = result.replace(/f/g,"ፍ");

	result = result.replace(/gä/g,"ገ");
	result = result.replace(/gu/g,"ጉ");
	result = result.replace(/gi/g,"ጊ");
	result = result.replace(/ga/g,"ጋ");
	result = result.replace(/ge/g,"ጌ");
	result = result.replace(/gə/g,"ግ");
	result = result.replace(/go/g,"ጎ");
	result = result.replace(/g/g,"ግ");
 
	result = result.replace(/ǧä/g,"ጀ");
	result = result.replace(/ǧu/g,"ጁ");
	result = result.replace(/ǧi/g,"ጂ");
	result = result.replace(/ǧa/g,"ጃ");
	result = result.replace(/ǧe/g,"ጄ");
	result = result.replace(/ǧə/g,"ጅ");
	result = result.replace(/ǧo/g,"ጆ");
	result = result.replace(/ǧ/g,"ጅ");

	result = result.replace(/hä/g,"ኸ");
	result = result.replace(/hu/g,"ኹ");
	result = result.replace(/hi/g,"ኺ");
	result = result.replace(/ha/g,"ኻ");
	result = result.replace(/he/g,"ኼ");
	result = result.replace(/hə/g,"ኽ");
	result = result.replace(/ho/g,"ኾ");
	result = result.replace(/h/g,"ኽ");

	result = result.replace(/jä/g,"የ");
	result = result.replace(/ju/g,"ዩ");
	result = result.replace(/ji/g,"ዪ");
	result = result.replace(/ja/g,"ያ");
	result = result.replace(/je/g,"ዬ");
	result = result.replace(/jə/g,"ይ");
	result = result.replace(/jo/g,"ዮ");
	result = result.replace(/j/g,"ይ");

	result = result.replace(/kä/g,"ከ");
	result = result.replace(/ku/g,"ኩ");
	result = result.replace(/ki/g,"ኪ");
	result = result.replace(/ka/g,"ካ");
	result = result.replace(/ke/g,"ኬ");
	result = result.replace(/kə/g,"ክ");
	result = result.replace(/ko/g,"ኮ");
	result = result.replace(/k/g,"ክ");
 
	result = result.replace(/lä/g,"ለ");
	result = result.replace(/lu/g,"ሉ");
	result = result.replace(/li/g,"ሊ");
	result = result.replace(/la/g,"ላ");
	result = result.replace(/le/g,"ሌ");
	result = result.replace(/lə/g,"ል");
	result = result.replace(/lo/g,"ሎ");
	result = result.replace(/l/g,"ል");

	result = result.replace(/mä/g,"መ");
	result = result.replace(/mu/g,"ሙ");
	result = result.replace(/mi/g,"ሚ");
	result = result.replace(/ma/g,"ማ");
	result = result.replace(/me/g,"ሜ");
	result = result.replace(/mə/g,"ም");
	result = result.replace(/mo/g,"ሞ");
	result = result.replace(/m/g,"ም");
 
	result = result.replace(/nä/g,"ነ");
	result = result.replace(/nu/g,"ኑ");
	result = result.replace(/ni/g,"ኒ");
	result = result.replace(/na/g,"ና");
	result = result.replace(/ne/g,"ኔ");
	result = result.replace(/nə/g,"ን");
	result = result.replace(/no/g,"ኖ");
	result = result.replace(/n/g,"ን");

	result = result.replace(/ñä/g,"ኘ");
	result = result.replace(/ñu/g,"ኙ");
	result = result.replace(/ñi/g,"ኚ");
	result = result.replace(/ña/g,"ኛ");
	result = result.replace(/ñe/g,"ኜ");
	result = result.replace(/ñə/g,"ኝ");
	result = result.replace(/ño/g,"ኞ");
	result = result.replace(/ñ/g,"ኝ");

	result = result.replace(/pä/g,"ፐ");
	result = result.replace(/pu/g,"ፑ");
	result = result.replace(/pi/g,"ፒ");
	result = result.replace(/pa/g,"ፓ");
	result = result.replace(/pe/g,"ፔ");
	result = result.replace(/pə/g,"ፕ");
	result = result.replace(/po/g,"ፖ");
	result = result.replace(/p/g,"ፕ");

	result = result.replace(/rä/g,"ረ");
	result = result.replace(/ru/g,"ሩ");
	result = result.replace(/ri/g,"ሪ");
	result = result.replace(/ra/g,"ራ");
	result = result.replace(/re/g,"ሬ");
	result = result.replace(/rə/g,"ር");
	result = result.replace(/ro/g,"ሮ");
	result = result.replace(/r/g,"ር");

	result = result.replace(/sä/g,"ሰ");
	result = result.replace(/su/g,"ሱ");
	result = result.replace(/si/g,"ሲ");
	result = result.replace(/sa/g,"ሳ");
	result = result.replace(/se/g,"ሴ");
	result = result.replace(/sə/g,"ስ");
	result = result.replace(/so/g,"ሶ");
	result = result.replace(/s/g,"ስ");

	result = result.replace(/šä/g,"ሸ");
	result = result.replace(/šu/g,"ሹ");
	result = result.replace(/ši/g,"ሺ");
	result = result.replace(/ša/g,"ሻ");
	result = result.replace(/še/g,"ሼ");
	result = result.replace(/šə/g,"ሽ");
	result = result.replace(/šo/g,"ሾ");
	result = result.replace(/š/g,"ሽ");

	result = result.replace(/tä/g,"ተ");
	result = result.replace(/tu/g,"ቱ");
	result = result.replace(/ti/g,"ቲ");
	result = result.replace(/ta/g,"ታ");
	result = result.replace(/te/g,"ቴ");
	result = result.replace(/tə/g,"ት");
	result = result.replace(/to/g,"ቶ");
	result = result.replace(/t/g,"ት");

	result = result.replace(/vä/g,"ቨ");
	result = result.replace(/vu/g,"ቩ");
	result = result.replace(/vi/g,"ቪ");
	result = result.replace(/va/g,"ቫ");
	result = result.replace(/ve/g,"ቬ");
	result = result.replace(/və/g,"ቭ");
	result = result.replace(/vo/g,"ቮ");
	result = result.replace(/v/g,"ቭ");

	result = result.replace(/w/g,"ዌ");

	result = result.replace(/zä/g,"ዘ");
	result = result.replace(/zu/g,"ዙ");
	result = result.replace(/zi/g,"ዚ");
	result = result.replace(/za/g,"ዛ");
	result = result.replace(/ze/g,"ዜ");
	result = result.replace(/zə/g,"ዝ");
	result = result.replace(/zo/g,"ዞ");
	result = result.replace(/z/g,"ዝ");

	result = result.replace(/žä/g,"ዠ");
	result = result.replace(/žu/g,"ዡ");
	result = result.replace(/ži/g,"ዢ");
	result = result.replace(/ža/g,"ዣ");
	result = result.replace(/že/g,"ዤ");
	result = result.replace(/žə/g,"ዥ");
	result = result.replace(/žo/g,"ዦ");
	result = result.replace(/ž/g,"ዥ");

	result = result.replace(/ä/g,"አ");
	result = result.replace(/u/g,"ኡ");
	result = result.replace(/i/g,"ኢ");
	result = result.replace(/a/g,"ኣ");
	result = result.replace(/e/g,"ኤ");
	result = result.replace(/ə/g,"እ");
	result = result.replace(/o/g,"ኦ");
	}

	else if (type == 18)
	{ 
	result = result.replace(/Ь#ь/g,"ij"); result = result.replace(/#ь/g,"j"); 
	result = result.replace(/tЬ/g,"ť"); result = result.replace(/tь/g,"ťj");
	result = result.replace(/dЬ/g,"ď"); result = result.replace(/dь/g,"ďj");
	result = result.replace(/rЬ/g,"r"); result = result.replace(/rь/g,"rj");
	result = result.replace(/lЬ/g,"lj"); result = result.replace(/lь/g,"lj");
	result = result.replace(/nЬ/g,"ň"); result = result.replace(/nь/g,"ň");
	result = result.replace(/sЬ/g,"s"); result = result.replace(/sь/g,"sj");
	result = result.replace(/zЬ/g,"z"); result = result.replace(/zь/g,"zj");
	result = result.replace(/Ь/g,""); result = result.replace(/ь/g,"j");

	result = result.replace(/[aå]/g,"ā");
	result = result.replace(/j[ěė]/g,"jē"); result = result.replace(/[ěė]/g,"jē");
	result = result.replace(/é/g,"ai");
	result = result.replace(/e/g,"ē");
	result = result.replace(/ę/g,"ēṁ");
	result = result.replace(/i/g,"ī");
	result = result.replace(/[yì]/g,"i");
	result = result.replace(/o/g,"ō");
	result = result.replace(/ò/g,"a");
	result = result.replace(/ų/g,"ūṁ");
	result = result.replace(/[ṙŕ]/g,"ar");
	result = result.replace(/[ŀĺ]/g,"al");
	result = result.replace(/c/g,"ts");
	result = result.replace(/[ćč]/g,"c");
	result = result.replace(/ď/g,"ḍ");
	result = result.replace(/j/g,"y");
	result = result.replace(/dź/g,"j");
	result = result.replace(/dž/g,"j");
	result = result.replace(/h/g,"k‍ẖ");
	result = result.replace(/ľ/g,"ly");
	result = result.replace(/ň/g,"ñ");
	result = result.replace(/ř/g,"ṛ");
	result = result.replace(/ś/g,"ṣ");
	result = result.replace(/š/g,"ś");
	result = result.replace(/ť/g,"ṭ");
	result = result.replace(/ź/g,"z");
	result = result.replace(/ž/g,"zh");

	result = result.replace(/zh/g,"झ़#");
	result = result.replace(/k‍ẖ/g,"ख़#");
	result = result.replace(/b/g,"ब#");
	result = result.replace(/c/g,"च#");
	result = result.replace(/d/g,"द#");
	result = result.replace(/ḍ/g,"ड#");
	result = result.replace(/f/g,"फ़#"); 
	result = result.replace(/g/g,"ग#");
	result = result.replace(/h/g,"ह#");
	result = result.replace(/j/g,"ज#");
	result = result.replace(/k/g,"क#");
	result = result.replace(/l/g,"ल#");
	result = result.replace(/m/g,"म#");
	result = result.replace(/n/g,"न#");
	result = result.replace(/ñ/g,"ञ#");
	result = result.replace(/p/g,"प#");
	result = result.replace(/r/g,"र#");
	result = result.replace(/ṛ/g,"ड़#"); 
	result = result.replace(/t/g,"त#");
	result = result.replace(/ṭ/g,"ट#");
	result = result.replace(/s/g,"स#");
	result = result.replace(/ṣ/g,"ष#");
	result = result.replace(/ś/g,"श#");
	result = result.replace(/v/g,"व#");
	result = result.replace(/y/g,"य#");
	result = result.replace(/z/g,"ज़#");

	result = result.replace(/#ai/g,"ै");
	result = result.replace(/#a/g,"");
	result = result.replace(/#ā/g,"ा");
	result = result.replace(/#i/g,"ि");
	result = result.replace(/#ī/g,"ी");
	result = result.replace(/#u/g,"ु");
	result = result.replace(/#ūṁ/g,"ूँ");
	result = result.replace(/#ēṁ/g,"ें");
	result = result.replace(/#ē/g,"े");
	result = result.replace(/#ō/g,"ो");
	result = result.replace(/#%/g,"%");
	result = result.replace(/#/g,"्");

	result = result.replace(/ai/g,"ऐ");
	result = result.replace(/ā/g,"आ");
	result = result.replace(/i/g,"इ");
	result = result.replace(/ī/g,"ई");
	result = result.replace(/u/g,"उ");
	result = result.replace(/ūṁ/g,"ऊँ");
	result = result.replace(/ū/g,"ऊ");
	result = result.replace(/ēṁ/g,"एँ");
	result = result.replace(/ē/g,"ए");
	result = result.replace(/ō/g,"ओ");

	result = result.replace(/0/g,"०");
	result = result.replace(/1/g,"१");
	result = result.replace(/2/g,"२");
	result = result.replace(/3/g,"३");
	result = result.replace(/4/g,"४");
	result = result.replace(/5/g,"५");
	result = result.replace(/6/g,"६");
	result = result.replace(/7/g,"७");
	result = result.replace(/8/g,"८");
	result = result.replace(/9/g,"९");
	}

	result = result.replace (/jj/g,"j");
	result = result.replace (/#/g,""); result = result.replace (/%/g,""); OrigW = OrigW.replace (/%/g,"");

	/** Hoofdletters maken **/

		result_first = result.charAt (0); result_rest = result.substring (1);

	if (type == 10 || (OrigW.charAt (0) == OrigW.charAt (0).toLowerCase()))
	{
		result = result.toLowerCase();
	}
	else if ((OrigW.length > 1) && (OrigW.charAt (1) == OrigW.charAt (1).toLowerCase()))
	{
		result = result_first.toUpperCase() + result_rest.toLowerCase();
	}
	else
	{
		result = result.toUpperCase();
	}

	result = result.replace (/℅/g,"%");

	var grs = result.lastIndexOf ("ς"); 
	if ((grs == "0") && (OrigW.indexOf ("s") == -1))					{ result = result.replace (/ς/g,"Σ"); }
	else if (result.charAt (grs - 1) != result.charAt (grs - 1).toLowerCase())		{ result = result.replace (/ς/g,"Σ"); }

	return result;
}

function nmsify (iW)
{
	iW = iW.replace (/[я ꙗ]/g,"ja");
	iW = iW.replace (/[єѥ]/g,"je");
	iW = iW.replace (/ї/g,"ji");
	iW = iW.replace (/ё/g,"jo");
	iW = iW.replace (/ю/g,"ju");
	iW = iW.replace (/ѩ/g,"ję");
	iW = iW.replace (/ѭ/g,"jų");
	iW = iW.replace (/љ/g,"lj");
	iW = iW.replace (/њ/g,"nj");
	iW = iW.replace (/[ђѓ]/g,"dź");
	iW = iW.replace (/[ћќ]/g,"ć");
	iW = iW.replace (/ѕ/g,"dz");
	iW = iW.replace (/џ/g,"dž");
	iW = iW.replace (/а/g,"a");
	iW = iW.replace (/б/g,"b");
	iW = iW.replace (/в/g,"v");
	iW = iW.replace (/[гґ]/g,"g");
	iW = iW.replace (/д/g,"d");
	iW = iW.replace (/[еэ]/g,"e");
	iW = iW.replace (/ж/g,"ž");
	iW = iW.replace (/[зꙁꙀ]/g,"z");
	iW = iW.replace (/[иіѵѷ]/g,"i");
	iW = iW.replace (/[йјь]/g,"j");
	iW = iW.replace (/к/g,"k");
	iW = iW.replace (/л/g,"l");
	iW = iW.replace (/м/g,"m");
	iW = iW.replace (/н/g,"n");
	iW = iW.replace (/[оѡ]/g,"o");
	iW = iW.replace (/п/g,"p");
	iW = iW.replace (/р/g,"r");
	iW = iW.replace (/с/g,"s");
	iW = iW.replace (/т/g,"t");
	iW = iW.replace (/[уȣѹ]/g,"u");
	iW = iW.replace (/ф/g,"f");
	iW = iW.replace (/х/g,"h");
	iW = iW.replace (/ц/g,"c");
	iW = iW.replace (/ч/g,"č");
	iW = iW.replace (/ш/g,"š");
	iW = iW.replace (/щ/g,"šč"); 
	iW = iW.replace (/[ыꙑ]/g,"y");
	iW = iW.replace (/ъ/g,"q");
	iW = iW.replace (/ў/g,"ù");
	iW = iW.replace (/ѣ/g,"ě");
	iW = iW.replace (/ѧ/g,"ę");
	iW = iW.replace (/ѫ/g,"ų");
	iW = iW.replace (/ѳ/g,"þ");
	iW = iW.replace (/ѱ/g,"ps");
	iW = iW.replace (/ѯ/g,"ks");
	iW = iW.replace (/⁙/g,".");

	iW = iW.replace (/%s’e/g,"%śe"); iW = iW.replace (/%s’a/g,"%śa"); iW = iW.replace (/%s’ų/g,"%śų"); iW = iW.replace (/%s’u/g,"%śu"); 
	iW = iW.replace (/%s’/g,"%sq"); iW = iW.replace (/%nes’/g,"%nesq"); 

	iW = iW.replace ('a*',"å"); iW = iW.replace ('e*',"ė"); iW = iW.replace ('l*',"ŀ"); iW = iW.replace ('r*',"ṙ"); 
	iW = iW.replace ('c*',"ç"); iW = iW.replace ('z*',"ʒ"); iW = iW.replace ('o*',"œ");
	iW = iW.replace ('s^',"š"); iW = iW.replace ('z^',"ž"); iW = iW.replace ('c^',"č"); iW = iW.replace ('e^',"ě"); iW = iW.replace ('j^',"ĵ");  
	iW = iW.replace ('l^',"ľ"); iW = iW.replace ('n^',"ň"); iW = iW.replace ('r^',"ř"); iW = iW.replace ('t^',"ť"); iW = iW.replace ('d^',"ď");  
	iW = iW.replace (/u~/g,"ų"); iW = iW.replace (/e~/g,"ę"); iW = iW.replace (/o~/g,"ų"); iW = iW.replace (/t~/g,"ṱ"); iW = iW.replace (/d~/g,"ḓ"); 
	iW = iW.replace (/e`/g,"è"); iW = iW.replace (/i`/g,"ì"); iW = iW.replace (/o`/g,"ò"); iW = iW.replace (/u`/g,"ù");
	iW = iW.replace (/a’/g,"á"); iW = iW.replace (/e’/g,"é"); iW = iW.replace (/i’/g,"í"); iW = iW.replace (/o’/g,"œ"); iW = iW.replace (/y’/g,"ý");
	iW = iW.replace (/c’/g,"ć"); iW = iW.replace (/l’/g,"ĺ"); iW = iW.replace (/r’/g,"ŕ"); iW = iW.replace (/s’/g,"ś"); iW = iW.replace (/z’/g,"ź");


	iW = iW.replace (/cj/g,"ć"); iW = iW.replace (/dzj/g,"dź"); 

	iW = iW.replace (/zsk/g,"z#sk"); iW = iW.replace (/zst/g,"z#st"); 
	iW = iW.replace (/%izs/g,"%iz#s"); iW = iW.replace (/%bezs/g,"%bez#s"); iW = iW.replace (/%razs/g,"%raz#s"); iW = iW.replace (/%råzs/g,"%råz#s"); 
	iW = iW.replace (/konjug/g,"kon#jug"); iW = iW.replace (/konjun/g,"kon#jun"); 
	iW = iW.replace (/slovjan/g,"slov#jan"); iW = iW.replace (/slavjan/g,"slav#jan");

	iW = iW.replace (/sz/g,"š"); iW = iW.replace (/sx/g,"š"); iW = iW.replace (/cz/g,"č"); iW = iW.replace (/cx/g,"č");
	iW = iW.replace (/zs/g,"ž"); iW = iW.replace (/zx/g,"ž"); iW = iW.replace (/ż/g,"ž");

	iW = iW.replace (/qu/g,"kv"); iW = iW.replace (/[ăq`]/g,"’");
	iW = iW.replace (/ch/g,"h");
	iW = iW.replace (/w/g,"v");
	iW = iW.replace (/x/g,"ks");
	
	iW = iW.replace (/[àâā]/g,"á"); iW = iW.replace (/[îī]/g,"í"); iW = iW.replace (/[úûůū]/g,"u");
	iW = iW.replace (/[ĕë]/g,"è"); iW = iW.replace (/[ŏö]/g,"ò"); iW = iW.replace (/ó/g,"œ"); 
	iW = iW.replace (/[ąǫũ]/g,"ų"); iW = iW.replace (/ô/g,"å"); iW = iW.replace (/ê/g,"ě");
	iW = iW.replace (/ĭ/g,"ì");
	iW = iW.replace (/ł/g,"l"); 

	iW = iW.replace (/[ľļǉ]/g,"lj"); iW = iW.replace (/[ňñńņǌ]/g,"nj"); iW = iW.replace (/[řŕ]/g,"rj"); 
	iW = iW.replace (/ť/g,"tj"); iW = iW.replace (/ď/g,"dj"); /* iW = iW.replace (/ś/g,"sj"); */ iW = iW.replace (/ź/g,"zj"); iW = iW.replace (/dzj/g,"dź");

	iW = iW.replace (/jy/g,"ji"); iW = iW.replace (/ćy/g,"ći"); iW = iW.replace (/dźy/g,"dźi");
	iW = iW.replace (/šy/g,"ši"); iW = iW.replace (/žy/g,"ži"); iW = iW.replace (/čy/g,"či");

	return iW;
}