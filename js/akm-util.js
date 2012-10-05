(function () {
/*!

	Javascript related to https://github.com/akmurray/aaronkmurray-blog

	Prerequisite files: 
		[none]
		[optional, but recommended: XMLHttpRequest.js, see: https://github.com/ilinsky/xmlhttprequest/blob/master/XMLHttpRequest.js ]

	Aaron K. Murray, akmurray@gmail.com, @aaronkmurray, www.aaronkmurray.com

*/
})();

// 'akm' is the base object that I will use like a namespace so that it's easy to navigate the js I write (and so that global space doesn't get too cluttered because that is frowned upon these days)
var akm = akm || {};
akm.util = {}; //'akm.util' is the root object for generic javascript utility functions

akm.util.isPageLoaded = false; //bool. will be set to true after akm.util.handlePageLoaded() gets called
akm.util.pageLoadDate = null; //date. nullable. will be set to the current datetime after the page is loaded
akm.util.isSecure = (document.location.protocol == 'https:'); //bool. true/false if we are using https

akm.util._handlePageLoaded = function() {
    /// <summary>
	/// This gets automatically triggered after the page load event gets fired.
	/// Sets variables: akm.util.pageLoadDate and akm.util.isPageLoaded
    /// </summary>
	akm.util.pageLoadDate = new Date();
	akm.util.isPageLoaded = true;
};

//wire up the window 'load' event so that we can do some more logic after the page is rendered
if (window.addEventListener) {   //newer browsers
	window.addEventListener('DOMContentLoaded', akm.util._handlePageLoaded, false); //'DOMContentLoaded' - the HTML and JS has been loaded. 'load' - HTML/JS/Images all loaded
} else if (window.attachEvent) { //older IE
	window.attachEvent('onload', akm.util._handlePageLoaded);
}


akm.util.loadScript = function (pUrl, pLoadAsync, pOnLoadCallback) {
    /// <summary>
    /// Given a URL, load a javascript file
    /// <param name='pUrl'>string. URL of JS file to load</param>
    /// <param name='pLoadAsync'>bool. optional. Load the file asyncronously?</param>
    /// <param name='pOnLoadCallback'>function. optional. Function to be called upon successful completion of the script loading</param>
	/// <returns>bool. true/false for successful inclusion</returns>
    /// </summary>
    var async = pLoadAsync || false;

	akm.util.log('akm.util.loadScript start', [pUrl, pLoadAsync, async, akm.util.isPageLoaded, akm.util.pageLoadDate]);

	if (!async && akm.util.isPageLoaded) {
		//after the page load event all javascript includes are async by default...so we have to handle that case specially

		//need to create a syncronous ajax request to load the file
		var req = new XMLHttpRequest();
		req.open('GET', pUrl, false);
		req.onreadystatechange = function(){
			if (req.readyState == 4) {
				var s = document.createElement("script");
				s.type = 'text/javascript';
				s.appendChild(document.createTextNode(req.responseText));
				var root = document.getElementsByTagName('script')[0];
				root.parentNode.insertBefore(s, root);
			}
		};
		try {
			req.send(null);
		} catch (err) {
			//If error is:	"Origin null is not allowed by Access-Control-Allow-Origin."
			//see:			http://stackoverflow.com/questions/4208530/xmlhttprequest-origin-null-is-not-allowed-access-control-access-allow-for-file
			//if error is:  "Origin file:// is not allowed by Access-Control-Allow-Origin."
			//see:			http://stackoverflow.com/questions/9327218/access-control-allow-origin-not-allowed-by
			akm.util.log('akm.util.loadScript error', [pUrl, pLoadAsync, async, akm.util.isPageLoaded, akm.util.pageLoadDate, err]);
			return false;
		}
	} else {
		var s = document.createElement('script');
		s.type = 'text/javascript';
		s.src = pUrl;
		if (async)
			s.async = async;
		if (pOnLoadCallback)
			s.onload = pOnLoadCallback;
		var root = document.getElementsByTagName('script')[0];
		root.parentNode.insertBefore(s, root);
	}

	akm.util.log('akm.util.loadScript end', [pUrl, pLoadAsync, async, akm.util.isPageLoaded, akm.util.pageLoadDate]);
	return true;
};

akm.util.log = function (pMessage, pLogObjects) {
    /// <summary>
    /// Convenience wrapper for logging data/errors to the console
    /// <param name='pMessage'>string. Message to log</param>
    /// <param name='pLogObjects'>object, or array of objects. Params to be logged to the console</param>
    ///</summary>

    if (window.console && console.log) {
        console.log(pMessage, pLogObjects);
    }
};

