(function () {
/*!

	Javascript related to https://github.com/akmurray/aaronkmurray-blog

	Prerequisite files: 
		prototype-extensions.js

	Aaron K. Murray, akmurray@gmail.com, @aaronkmurray, www.aaronkmurray.com

*/
})();


var akm = akm || {};
akm.blog = akm.blog || {};

akm.blog.init = function() {
	///<summary>Code to be run once the page finishes loading html and inline/sync javascript</summary>
	///<returns>undefined</returns>

	//rotate the logo cube...
	var logoRotate = function() {
		var cube = document.getElementById('logo-cube');
		for (var i=1;i<=6;i++)
			cube.removeClassName('show-side-' + i);
		var num = Math.ceil(Math.random()*6);
		cube.addClassName('show-side-' + num);
	};

	//...every few seconds
	var intervalLogo = self.setInterval(logoRotate,3000);
  
};


if (window.addEventListener) { //newer browsers
	window.addEventListener('DOMContentLoaded', akm.blog.init, false); //'DOMContentLoaded' - the HTML and JS has been loaded. 'load' - HTML/JS/Images all loaded
} else if (window.attachEvent) { //older IE
	window.attachEvent('onload', akm.blog.init);
}