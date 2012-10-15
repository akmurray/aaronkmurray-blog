(function () {
/*!

	Javascript related to https://github.com/akmurray/aaronkmurray-blog

	Prerequisite files: 
		prototype-extensions.js		(el.addClassName, el.removeClassName)
		akm.util.js
		akm.gist.js

	Aaron K. Murray, akmurray@gmail.com, @aaronkmurray, www.aaronkmurray.com

*/
})();


//	Global variables required by external scripts
var _qevents = _qevents || [];	//quantcast
var switchTo5x=true;			//ShareThis

var _gaq = _gaq || [];			//Google Analytics
_gaq.push(['_setAccount', 'UA-35522056-1']);
_gaq.push(['_trackPageview']); 



// 'akm' is the base object that I will use like a namespace so that it's easy to navigate the js I write (and so that global space doesn't get too cluttered because that is frowned upon these days)
var akm = akm || {};
akm.blog = akm.blog || {}; //'akm.blog' is the root object for blog-related functions

akm.blog._init = function() {
	///<summary>
	///Code to be run once the page finishes loading html and inline/sync javascript.
	///This method has to finish before the actual load events complete in the browser.
	///</summary>
	///<returns>undefined</returns>

	akm.util.log('akm.blog._init start', [new Date()]);

	
	var gistIds = [3811888,3811934,3739310,3694724,3678669];
	for (var i=0;i<gistIds.length;i++)
		akm.gist.renderGist(gistIds[i], 'wrapper-gist-' + gistIds[i]);

	setTimeout(akm.blog._initDeferred, 250);

	akm.util.log('akm.blog._init complete', [new Date()]);
};

akm.blog._initDeferred = function() {
	///<summary>This gets triggered by akm.blog._init, but allows the browser to finish firing its events before waiting on this code to run. This is for low priority and non-blocking code, like tracking scripts</summary>
	///<returns>undefined</returns>
	akm.util.log('akm.blog._initDeferred start', [new Date()]);


	//rotate the logo cube...
	var logoRotate = function() {
		var cube = document.getElementById('logo-cube');
		for (var i=1;i<=6;i++)
			cube.removeClassName('show-side-' + i);
		var num = Math.ceil(Math.random()*6);
		cube.addClassName('show-side-' + num);
	};
	//...every few seconds
	var intervalLogo = self.setInterval(logoRotate, 3000);
  

    //Google Analytics
	var gaSrc = (akm.util.isSecure ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	akm.util.loadScript(gaSrc, true, (function(){ _qevents.push({ qacct:'p-M_hV8wgLbE9k_' }); })	);


    //ShareThis
	akm.util.loadScript('http://w.sharethis.com/button/buttons.js', true, (function(){ stLight.options({publisher: "3be7e6b2-8565-4c3c-bbdc-a3de5fdd1bc3"}); })	);


	//quantcast
	var quantcastSrc = (akm.util.isSecure ? 'https://secure' : 'http://edge') + '.quantserve.com/quant.js';
	akm.util.loadScript(quantcastSrc, true, (function(){ _qevents.push({ qacct:'p-M_hV8wgLbE9k_' }); })	);

	akm.util.log('akm.blog._initDeferred complete', [new Date()]);
};

//wire up the window 'load' event so that we can do some more logic after the page is rendered
if (window.addEventListener) {   //newer browsers
	window.addEventListener('DOMContentLoaded', akm.blog._init, false); //'DOMContentLoaded' - the HTML and JS has been loaded. 'load' - HTML/JS/Images all loaded
} else if (window.attachEvent) { //older IE
	window.attachEvent('onload', akm.blog._init);
}