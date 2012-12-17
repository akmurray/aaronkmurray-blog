(function () {
/*!

	
	Javascript related to the gists show on https://github.com/akmurray/aaronkmurray-blog

	Prerequisite files: 
		[none]

	Aaron K. Murray, akmurray@gmail.com, @aaronkmurray, www.aaronkmurray.com

*/
})();

// 'akm' is the base object that I will use like a namespace so that it's easy to navigate the js I write (and so that global space doesn't get too cluttered because that is frowned upon these days)
var akm = akm || {};
akm.gist = {}; //'akm.gist' is the root object for gist-related javascript data and functions

akm.gist.renderGist = function(pGistId, pContainerElementId) {
    /// <summary>
    /// Draw the gist html for a given gist id inside a specific dom element
    /// <param name='pGistId'>int. Gist id to render</param>
    /// <param name='pContainerElementId'>string. DOM element id being rendered into</param>
    ///</summary>

	var el = document.getElementById(pContainerElementId);
	if (!el)
		return false;
	
	return akm.gist.renderGistToElement(pGistId, el);
};

akm.gist.renderGistToElement = function(pGistId, pElement) {
    /// <summary>
    /// Draw the gist html for a given gist id inside a specific dom element
    /// <param name='pGistId'>int. Gist id to render</param>
    /// <param name='pElement'>DOM element. DOM element being rendered into</param>
    ///</summary>

	var gist = akm.gist.gists[pGistId];
	if (!gist)
		return false;

	if (!pElement)
		return false;

	if (pElement.innerHTML)
		pElement.innerHTML = gist.html;
	else if (pElement.innerText)
		pElement.innerText = gist.html;
	else 
		pElement.textContent = gist.html;
	return true;
};

akm.gist.gists = {}; //kvp object. key=gist id (ex: 3811888), value=object. {html:'',querystring:''} optional querystring params used originally

akm.gist.gists[3811888] = {
	html: '<div id=\"gist-3811888\" class=\"gist\">\n    \n\n        <div class=\"gist-file\">\n          <div class=\"gist-data gist-syntax\">\n              <div class=\"gist-highlight\"><pre><div class=\'line\' id=\'LC1\'><span class=\"nt\">&lt;div<\/span> <span class=\"na\">id=<\/span><span class=\"s\">&#39;logo-cube&#39;<\/span> <span class=\"na\">class=<\/span><span class=\"s\">&#39;show-side-1&#39;<\/span><span class=\"nt\">&gt;<\/span><\/div><div class=\'line\' id=\'LC2\'>	<span class=\"nt\">&lt;figure<\/span> <span class=\"na\">class=<\/span><span class=\"s\">&#39;side-2&#39;<\/span><span class=\"nt\">&gt;&lt;img<\/span> <span class=\"na\">src=<\/span><span class=\"s\">&#39;img/blog/logo/logo-2-128.png&#39;<\/span> <span class=\"na\">class=<\/span><span class=\"s\">&#39;logo&#39;<\/span><span class=\"nt\">&gt;&lt;/figure&gt;<\/span><\/div><div class=\'line\' id=\'LC3\'>	<span class=\"nt\">&lt;figure<\/span> <span class=\"na\">class=<\/span><span class=\"s\">&#39;side-3&#39;<\/span><span class=\"nt\">&gt;&lt;img<\/span> <span class=\"na\">src=<\/span><span class=\"s\">&#39;img/blog/logo/logo-3-128.png&#39;<\/span> <span class=\"na\">class=<\/span><span class=\"s\">&#39;logo&#39;<\/span><span class=\"nt\">&gt;&lt;/figure&gt;<\/span><\/div><div class=\'line\' id=\'LC4\'>	<span class=\"nt\">&lt;figure<\/span> <span class=\"na\">class=<\/span><span class=\"s\">&#39;side-4&#39;<\/span><span class=\"nt\">&gt;&lt;img<\/span> <span class=\"na\">src=<\/span><span class=\"s\">&#39;img/blog/logo/logo-4-128.png&#39;<\/span> <span class=\"na\">class=<\/span><span class=\"s\">&#39;logo&#39;<\/span><span class=\"nt\">&gt;&lt;/figure&gt;<\/span><\/div><div class=\'line\' id=\'LC5\'>	<span class=\"nt\">&lt;figure<\/span> <span class=\"na\">class=<\/span><span class=\"s\">&#39;side-5&#39;<\/span><span class=\"nt\">&gt;&lt;img<\/span> <span class=\"na\">src=<\/span><span class=\"s\">&#39;img/blog/logo/logo-5-128.png&#39;<\/span> <span class=\"na\">class=<\/span><span class=\"s\">&#39;logo&#39;<\/span><span class=\"nt\">&gt;&lt;/figure&gt;<\/span><\/div><div class=\'line\' id=\'LC6\'>	<span class=\"nt\">&lt;figure<\/span> <span class=\"na\">class=<\/span><span class=\"s\">&#39;side-6&#39;<\/span><span class=\"nt\">&gt;&lt;img<\/span> <span class=\"na\">src=<\/span><span class=\"s\">&#39;img/blog/logo/logo-6-128.png&#39;<\/span> <span class=\"na\">class=<\/span><span class=\"s\">&#39;logo&#39;<\/span><span class=\"nt\">&gt;&lt;/figure&gt;<\/span><\/div><div class=\'line\' id=\'LC7\'>	<span class=\"nt\">&lt;figure<\/span> <span class=\"na\">class=<\/span><span class=\"s\">&#39;side-1&#39;<\/span><span class=\"nt\">&gt;&lt;img<\/span> <span class=\"na\">src=<\/span><span class=\"s\">&#39;img/blog/logo/logo-1-128.png&#39;<\/span> <span class=\"na\">class=<\/span><span class=\"s\">&#39;logo&#39;<\/span><span class=\"nt\">&gt;&lt;/figure&gt;<\/span><\/div><div class=\'line\' id=\'LC8\'><span class=\"nt\">&lt;/div&gt;<\/span><\/div><div class=\'line\' id=\'LC9\'><br/><\/div><\/pre><\/div>\n          <\/div>\n\n          <div class=\"gist-meta\">\n            <a href=\"https://gist.github.com/raw/3811888/e7567848ead813cc7cbdedee520ee71f6f098ef0/css3-logo-cube.html\" style=\"float:right;\">view raw<\/a>\n            <a href=\"https://gist.github.com/3811888#file_css3_logo_cube.html\" style=\"float:right;margin-right:10px;color:#666\">css3-logo-cube.html<\/a>\n            <a href=\"https://gist.github.com/3811888\">This Gist<\/a> brought to you by <a href=\"http://github.com\">GitHub<\/a>.\n          <\/div>\n        <\/div>\n<\/div>\n',
	querystring:''
};

akm.gist.gists[3811934] = {
	html: '<div id=\"gist-3811934\" class=\"gist\">\n    \n\n        <div class=\"gist-file\">\n          <div class=\"gist-data gist-syntax\">\n              <div class=\"gist-highlight\"><pre><div class=\'line\' id=\'LC1\'><span class=\"c1\">//NOTE: [element].removeClassName() and [element].addClassName() are not built-in methods, but IMHO they should be. <\/span><\/div><div class=\'line\' id=\'LC2\'><span class=\"c1\">//Those are defined using unobtrusive javascript if the browser doesn&#39;t provide the. See code here: https://github.com/akmurray/aaronkmurray-blog/blob/master/js/prototype-extensions.js <\/span><\/div><div class=\'line\' id=\'LC3\'><br/><\/div><div class=\'line\' id=\'LC4\'><span class=\"c1\">//make a function called &quot;init&quot; that we&#39;ll run after the page finishes loading<\/span><\/div><div class=\'line\' id=\'LC5\'><span class=\"kd\">var<\/span> <span class=\"nx\">init<\/span> <span class=\"o\">=<\/span> <span class=\"kd\">function<\/span><span class=\"p\">()<\/span> <span class=\"p\">{<\/span><\/div><div class=\'line\' id=\'LC6\'>	<span class=\"c1\">///&lt;summary&gt;Code to be run once the page finishes loading html and inline/sync javascript&lt;/summary&gt;<\/span><\/div><div class=\'line\' id=\'LC7\'>	<span class=\"c1\">///&lt;returns&gt;undefined&lt;/returns&gt;<\/span><\/div><div class=\'line\' id=\'LC8\'><br/><\/div><div class=\'line\' id=\'LC9\'>	<span class=\"c1\">//rotate the logo cube...<\/span><\/div><div class=\'line\' id=\'LC10\'>	<span class=\"kd\">var<\/span> <span class=\"nx\">logoRotate<\/span> <span class=\"o\">=<\/span> <span class=\"kd\">function<\/span><span class=\"p\">()<\/span> <span class=\"p\">{<\/span><\/div><div class=\'line\' id=\'LC11\'>		<span class=\"kd\">var<\/span> <span class=\"nx\">cube<\/span> <span class=\"o\">=<\/span> <span class=\"nb\">document<\/span><span class=\"p\">.<\/span><span class=\"nx\">getElementById<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;logo-cube&#39;<\/span><span class=\"p\">);<\/span> <span class=\"c1\">//get the cube element<\/span><\/div><div class=\'line\' id=\'LC12\'>		<span class=\"k\">for<\/span> <span class=\"p\">(<\/span><span class=\"kd\">var<\/span> <span class=\"nx\">i<\/span><span class=\"o\">=<\/span><span class=\"mi\">1<\/span><span class=\"p\">;<\/span><span class=\"nx\">i<\/span><span class=\"o\">&lt;=<\/span><span class=\"mi\">6<\/span><span class=\"p\">;<\/span><span class=\"nx\">i<\/span><span class=\"o\">++<\/span><span class=\"p\">)<\/span><\/div><div class=\'line\' id=\'LC13\'>			<span class=\"nx\">cube<\/span><span class=\"p\">.<\/span><span class=\"nx\">removeClassName<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;show-side-&#39;<\/span> <span class=\"o\">+<\/span> <span class=\"nx\">i<\/span><span class=\"p\">);<\/span> <span class=\"c1\">//remove the css class for &#39;showing&#39; this element from all 6 sides<\/span><\/div><div class=\'line\' id=\'LC14\'>		<span class=\"kd\">var<\/span> <span class=\"nx\">num<\/span> <span class=\"o\">=<\/span> <span class=\"nb\">Math<\/span><span class=\"p\">.<\/span><span class=\"nx\">ceil<\/span><span class=\"p\">(<\/span><span class=\"nb\">Math<\/span><span class=\"p\">.<\/span><span class=\"nx\">random<\/span><span class=\"p\">()<\/span><span class=\"o\">*<\/span><span class=\"mi\">6<\/span><span class=\"p\">);<\/span> <span class=\"c1\">//choose a random side to show<\/span><\/div><div class=\'line\' id=\'LC15\'>		<span class=\"nx\">cube<\/span><span class=\"p\">.<\/span><span class=\"nx\">addClassName<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;show-side-&#39;<\/span> <span class=\"o\">+<\/span> <span class=\"nx\">num<\/span><span class=\"p\">);<\/span> <span class=\"c1\">//add the css class required to show that side<\/span><\/div><div class=\'line\' id=\'LC16\'>	<span class=\"p\">};<\/span><\/div><div class=\'line\' id=\'LC17\'><br/><\/div><div class=\'line\' id=\'LC18\'>	<span class=\"c1\">//...every few seconds<\/span><\/div><div class=\'line\' id=\'LC19\'>	<span class=\"kd\">var<\/span> <span class=\"nx\">intervalLogo<\/span> <span class=\"o\">=<\/span> <span class=\"nx\">self<\/span><span class=\"p\">.<\/span><span class=\"nx\">setInterval<\/span><span class=\"p\">(<\/span><span class=\"nx\">logoRotate<\/span><span class=\"p\">,<\/span><span class=\"mi\">3000<\/span><span class=\"p\">);<\/span><\/div><div class=\'line\' id=\'LC20\'>&nbsp;&nbsp;<\/div><div class=\'line\' id=\'LC21\'><span class=\"p\">};<\/span><\/div><div class=\'line\' id=\'LC22\'><br/><\/div><div class=\'line\' id=\'LC23\'><span class=\"c1\">//tell the browser to run the new init function once it finishes loading the page  <\/span><\/div><div class=\'line\' id=\'LC24\'><span class=\"k\">if<\/span> <span class=\"p\">(<\/span><span class=\"nb\">window<\/span><span class=\"p\">.<\/span><span class=\"nx\">addEventListener<\/span><span class=\"p\">)<\/span> <span class=\"p\">{<\/span> <span class=\"c1\">//new browsers<\/span><\/div><div class=\'line\' id=\'LC25\'>	<span class=\"nb\">window<\/span><span class=\"p\">.<\/span><span class=\"nx\">addEventListener<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;DOMContentLoaded&#39;<\/span><span class=\"p\">,<\/span> <span class=\"nx\">init<\/span><span class=\"p\">,<\/span> <span class=\"kc\">false<\/span><span class=\"p\">);<\/span> <span class=\"c1\">//&#39;DOMContentLoaded&#39; - the HTML and JS has been loaded. &#39;load&#39; - HTML/JS/Images all loaded<\/span><\/div><div class=\'line\' id=\'LC26\'><span class=\"p\">}<\/span> <span class=\"k\">else<\/span> <span class=\"k\">if<\/span> <span class=\"p\">(<\/span><span class=\"nb\">window<\/span><span class=\"p\">.<\/span><span class=\"nx\">attachEvent<\/span><span class=\"p\">)<\/span> <span class=\"p\">{<\/span> <span class=\"c1\">//old IE<\/span><\/div><div class=\'line\' id=\'LC27\'>	<span class=\"nb\">window<\/span><span class=\"p\">.<\/span><span class=\"nx\">attachEvent<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;onload&#39;<\/span><span class=\"p\">,<\/span> <span class=\"nx\">init<\/span><span class=\"p\">);<\/span><\/div><div class=\'line\' id=\'LC28\'><span class=\"p\">}<\/span><\/div><div class=\'line\' id=\'LC29\'><br/><\/div><div class=\'line\' id=\'LC30\'><span class=\"o\">&lt;<\/span><span class=\"err\">/script&gt;<\/span><\/div><\/pre><\/div>\n          <\/div>\n\n          <div class=\"gist-meta\">\n            <a href=\"https://gist.github.com/raw/3811934/31e6fe19a24c8685dc70bab34ddcaa86be3a0b7b/css3-logo-cube.js\" style=\"float:right;\">view raw<\/a>\n            <a href=\"https://gist.github.com/3811934#file_css3_logo_cube.js\" style=\"float:right;margin-right:10px;color:#666\">css3-logo-cube.js<\/a>\n            <a href=\"https://gist.github.com/3811934\">This Gist<\/a> brought to you by <a href=\"http://github.com\">GitHub<\/a>.\n          <\/div>\n        <\/div>\n<\/div>\n',
	querystring:''
};

akm.gist.gists[3739310] = {
	html: '<div id=\"gist-3739310\" class=\"gist\">\n    \n        <div class=\"gist-file\">\n          <div class=\"gist-data gist-syntax\">\n              <div class=\"gist-highlight\"><pre><div class=\'line\' id=\'LC1\'><span class=\"c\">REM Make thumbnails if necessary<\/span><\/div><div class=\'line\' id=\'LC2\'><span class=\"k\">FOR<\/span> <span class=\"n\">/F<\/span> <span class=\"nv\">%%A<\/span> IN (<span class=\"s1\">&#39;dir /b &quot;../../aaronkmurray-blog/img/blog/screenshots/&quot; ^|findstr /liv &quot;thumb&quot;&#39;<\/span>) <span class=\"k\">DO<\/span> (<\/div><div class=\'line\' id=\'LC3\'>&nbsp;&nbsp;<span class=\"c\">REM &quot;SETLOCAL ENABLEDELAYEDEXPANSION&quot; so that we can update variables inside a loop. Those variables are wrapped in &quot;!&quot; instead of &quot;%&quot;<\/span><\/div><div class=\'line\' id=\'LC4\'>&nbsp;&nbsp;<span class=\"k\">SETLOCAL<\/span> ENABLEDELAYEDEXPANSION<\/div><div class=\'line\' id=\'LC5\'>&nbsp;&nbsp;<\/div><div class=\'line\' id=\'LC6\'>&nbsp;&nbsp;<span class=\"c\">REM variables <\/span><\/div><div class=\'line\' id=\'LC7\'>&nbsp;&nbsp;<span class=\"k\">SET<\/span> <span class=\"nv\">thumbName<\/span><span class=\"o\">=<\/span><span class=\"nv\">%%~nA<\/span>-thumb<span class=\"m\">-100<\/span>.png<\/div><div class=\'line\' id=\'LC8\'>&nbsp;&nbsp;<span class=\"k\">SET<\/span> <span class=\"nv\">thumbPath<\/span><span class=\"o\">=<\/span>..<span class=\"n\">/../aaronkmurray-blog/img/blog/screenshots/<\/span><\/div><div class=\'line\' id=\'LC9\'>&nbsp;&nbsp;<span class=\"k\">SET<\/span> <span class=\"nv\">thumbPathAndName<\/span><span class=\"o\">=<\/span>!thumbPath!!thumbName!<\/div><div class=\'line\' id=\'LC10\'>&nbsp;&nbsp;<\/div><div class=\'line\' id=\'LC11\'>&nbsp;&nbsp;<span class=\"k\">IF<\/span> NOT <span class=\"k\">EXIST<\/span> !thumbPathAndName! (<\/div><div class=\'line\' id=\'LC12\'>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"k\">ECHO<\/span> Creating thumbnail <span class=\"k\">for<\/span> !thumbName!<\/div><div class=\'line\' id=\'LC13\'>&nbsp;&nbsp;&nbsp;&nbsp;convert.exe -thumbnail <span class=\"m\">100<\/span> !thumbPath!<span class=\"nv\">%%A<\/span> !thumbPathAndName!<\/div><div class=\'line\' id=\'LC14\'>&nbsp;&nbsp;) <span class=\"k\">ELSE<\/span> (<\/div><div class=\'line\' id=\'LC15\'>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"c\">REM ECHO Already created thumbnail for !thumbName!<\/span><\/div><div class=\'line\' id=\'LC16\'>&nbsp;&nbsp;)<\/div><div class=\'line\' id=\'LC17\'>)<\/div><\/pre><\/div>\n          <\/div>\n\n          <div class=\"gist-meta\">\n            <a href=\"https://gist.github.com/raw/3739310/fd517b402c96c5322d3b53e3a4cfdbceae159a75/aaronkmurray.com-generate-post-thumbnails.bat\" style=\"float:right;\">view raw<\/a>\n            <a href=\"https://gist.github.com/3739310#file_aaronkmurray.com_generate_post_thumbnails.bat\" style=\"float:right;margin-right:10px;color:#666\">aaronkmurray.com-generate-post-thumbnails.bat<\/a>\n            <a href=\"https://gist.github.com/3739310\">This Gist<\/a> brought to you by <a href=\"http://github.com\">GitHub<\/a>.\n          <\/div>\n        <\/div>\n<\/div>\n',
	querystring:''
};

akm.gist.gists[3694724] = {
	html: '<div id=\"gist-3694724\" class=\"gist\">\n    \n        <div class=\"gist-file\">\n          <div class=\"gist-data gist-syntax\">\n              <div class=\"gist-highlight\"><pre><div class=\'line\' id=\'LC1\'>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;<\/div><div class=\'line\' id=\'LC2\'>&lt;configuration&gt;<\/div><div class=\'line\' id=\'LC3\'>&lt;system.webServer&gt;<\/div><div class=\'line\' id=\'LC4\'>	&lt;staticContent&gt;<\/div><div class=\'line\' id=\'LC5\'>		&lt;remove fileExtension=&quot;.js&quot; /&gt;<\/div><div class=\'line\' id=\'LC6\'>		&lt;mimeMap fileExtension=&quot;.js&quot; mimeType=&quot;text/javascript&quot; /&gt;<\/div><div class=\'line\' id=\'LC7\'>	&lt;/staticContent&gt;<\/div><div class=\'line\' id=\'LC8\'>	&lt;httpCompression directory=&quot;%SystemDrive%\\inetpub\\temp\\IIS Temporary Compressed Files&quot;&gt;<\/div><div class=\'line\' id=\'LC9\'>		&lt;scheme name=&quot;gzip&quot; dll=&quot;%Windir%\\system32\\inetsrv\\gzip.dll&quot; /&gt;<\/div><div class=\'line\' id=\'LC10\'>		&lt;dynamicTypes&gt;<\/div><div class=\'line\' id=\'LC11\'>			&lt;add mimeType=&quot;text/*&quot; enabled=&quot;true&quot;/&gt;<\/div><div class=\'line\' id=\'LC12\'>			&lt;add mimeType=&quot;message/*&quot; enabled=&quot;true&quot;/&gt;<\/div><div class=\'line\' id=\'LC13\'>			&lt;add mimeType=&quot;application/javascript&quot; enabled=&quot;true&quot;/&gt;<\/div><div class=\'line\' id=\'LC14\'>			&lt;add mimeType=&quot;*/*&quot; enabled=&quot;false&quot;/&gt;<\/div><div class=\'line\' id=\'LC15\'>		&lt;/dynamicTypes&gt;<\/div><div class=\'line\' id=\'LC16\'>		&lt;staticTypes&gt;<\/div><div class=\'line\' id=\'LC17\'>			&lt;add mimeType=&quot;text/*&quot; enabled=&quot;true&quot;/&gt;<\/div><div class=\'line\' id=\'LC18\'>			&lt;add mimeType=&quot;message/*&quot; enabled=&quot;true&quot;/&gt;<\/div><div class=\'line\' id=\'LC19\'>			&lt;add mimeType=&quot;application/javascript&quot; enabled=&quot;true&quot;/&gt;<\/div><div class=\'line\' id=\'LC20\'>			&lt;add mimeType=&quot;*/*&quot; enabled=&quot;false&quot;/&gt;<\/div><div class=\'line\' id=\'LC21\'>		&lt;/staticTypes&gt;<\/div><div class=\'line\' id=\'LC22\'>	&lt;/httpCompression&gt;<\/div><div class=\'line\' id=\'LC23\'>	&lt;httpProtocol&gt;<\/div><div class=\'line\' id=\'LC24\'>		&lt;customHeaders&gt;<\/div><div class=\'line\' id=\'LC25\'>			&lt;remove name=&quot;X-Powered-By&quot; /&gt;<\/div><div class=\'line\' id=\'LC26\'>		&lt;/customHeaders&gt;<\/div><div class=\'line\' id=\'LC27\'>	&lt;/httpProtocol&gt;<\/div><div class=\'line\' id=\'LC28\'>&lt;/system.webServer&gt;<\/div><div class=\'line\' id=\'LC29\'>&lt;/configuration&gt;<\/div><div class=\'line\' id=\'LC30\'><br/><\/div><\/pre><\/div>\n          <\/div>\n\n          <div class=\"gist-meta\">\n            <a href=\"https://gist.github.com/raw/3694724/ecf9d9946fe9e74bd6f45f85c5245d1875372ca8/web.config-aaronkmurray.com\" style=\"float:right;\">view raw<\/a>\n            <a href=\"https://gist.github.com/3694724#file_web.config_aaronkmurray.com\" style=\"float:right;margin-right:10px;color:#666\">web.config-aaronkmurray.com<\/a>\n            <a href=\"https://gist.github.com/3694724\">This Gist<\/a> brought to you by <a href=\"http://github.com\">GitHub<\/a>.\n          <\/div>\n        <\/div>\n<\/div>\n',
	querystring:'file=web.config-aaronkmurray.com'
};

akm.gist.gists[3678669] = {
	html: '<div id=\"gist-3678669\" class=\"gist\">\n    \n        <div class=\"gist-file\">\n          <div class=\"gist-data gist-syntax\">\n              <div class=\"gist-highlight\"><pre><div class=\'line\' id=\'LC1\'>	&lt;!-- Quantcast Tag --&gt;<\/div><div class=\'line\' id=\'LC2\'>	&lt;script type=&quot;text/javascript&quot;&gt;<\/div><div class=\'line\' id=\'LC3\'>	var _qevents = _qevents || [];<\/div><div class=\'line\' id=\'LC4\'><br/><\/div><div class=\'line\' id=\'LC5\'>	(function() {<\/div><div class=\'line\' id=\'LC6\'>	var elem = document.createElement(&#39;script&#39;);<\/div><div class=\'line\' id=\'LC7\'>	elem.src = (document.location.protocol == &quot;https:&quot; ? &quot;https://secure&quot; : &quot;http://edge&quot;) + &quot;.quantserve.com/quant.js&quot;;<\/div><div class=\'line\' id=\'LC8\'>	elem.async = true;<\/div><div class=\'line\' id=\'LC9\'>	elem.type = &quot;text/javascript&quot;;<\/div><div class=\'line\' id=\'LC10\'>	var scpt = document.getElementsByTagName(&#39;script&#39;)[0];<\/div><div class=\'line\' id=\'LC11\'>	scpt.parentNode.insertBefore(elem, scpt);<\/div><div class=\'line\' id=\'LC12\'>	})();<\/div><div class=\'line\' id=\'LC13\'><br/><\/div><div class=\'line\' id=\'LC14\'>	_qevents.push({ qacct:&quot;p-M_hV8wgLbE9k_&quot; });<\/div><div class=\'line\' id=\'LC15\'>	&lt;/script&gt;<\/div><div class=\'line\' id=\'LC16\'><br/><\/div><div class=\'line\' id=\'LC17\'>	&lt;noscript&gt;<\/div><div class=\'line\' id=\'LC18\'>	&lt;div style=&quot;display:none;&quot;&gt;&lt;img src=&quot;//pixel.quantserve.com/pixel/p-M_hV8wgLbE9k_.gif&quot; border=&quot;0&quot; height=&quot;1&quot; width=&quot;1&quot; alt=&quot;Quantcast&quot;/&gt;&lt;/div&gt;<\/div><div class=\'line\' id=\'LC19\'>	&lt;/noscript&gt;<\/div><div class=\'line\' id=\'LC20\'>	&lt;!-- End Quantcast tag --&gt;<\/div><\/pre><\/div>\n          <\/div>\n\n          <div class=\"gist-meta\">\n            <a href=\"https://gist.github.com/raw/3678669/9f1f59a979a0776e909b25c3adf93cc19195d3e4/quantcast-aaronkmurray.com\" style=\"float:right;\">view raw<\/a>\n            <a href=\"https://gist.github.com/3678669#file_quantcast_aaronkmurray.com\" style=\"float:right;margin-right:10px;color:#666\">quantcast-aaronkmurray.com<\/a>\n            <a href=\"https://gist.github.com/3678669\">This Gist<\/a> brought to you by <a href=\"http://github.com\">GitHub<\/a>.\n          <\/div>\n        <\/div>\n<\/div>\n',
	querystring:'file=quantcast-aaronkmurray.com'
};
