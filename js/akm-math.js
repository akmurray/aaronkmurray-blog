(function () {
/*!

	Javascript related to https://github.com/akmurray/aaronkmurray-blog

	Prerequisite files: 
		[none]

	Aaron K. Murray, akmurray@gmail.com, @aaronkmurray, www.aaronkmurray.com

*/
})();

// 'akm' is the base object that I will use like a namespace so that it's easy to navigate the js I write (and so that global space doesn't get too cluttered because that is frowned upon these days)
var akm = akm || {};
akm.math = {}; //'akm.math' is the root object for math-related javascript utility functions


akm.math.toInt = function (pNumber, pOptions) {
    /// <summary>
    /// Given any argument, value will be coersed into a numeric int number (not other numeric types. ex: NaN or Infinity)
    /// <param name='pNumber'>any type or undefined. 
	///		If pNumber is array, first value will be used.
	///		If pNumber is an object, the value returned in .toString() will be parsed
	///	</param>
    /// <param name='pOptions'>optional object. 
	///		properties: 
	///			'round': bool. if true, will round the parsed value
	///			'floor': bool. if true, will round the parsed value
	///			'ceil' : bool. if true, will round the parsed value
	///		Default: 'round'
	///	</param>
	/// <returns>number. 0 if: failure to parse a valid value, Infinity, NaN</returns>
    /// </summary>

	//default option is round
	if (!pOptions)
		pOptions = 'round';

	//check to see if the option was just passed in as a string for the name of the option they want to be true. Example: toInt(1234.45, 'round')
	if (typeof pOptions == 'string')
	{
		var s = pOptions;
		pOptions = {};
		pOptions[s] = true;
	}

	//try to extract number for special types

	var t = typeof pNumber;

	//extract first element from an array. This needs to happen before our pre-checks below
	if (t === 'object' && pNumber != null && (pNumber.length|0 > 0))
		pNumber = pNumber[0];

	//now that we have a single object to work with...pre-check for special types/values
	t = typeof pNumber; //typeof null == object
	if (t === 'undefined' || pNumber === null) {
		pNumber = 0;
	} else if (t === 'boolean') {
		return pNumber|0;
	}

	//convert objects, and remove dollar signs, commas, and whitespace from the value
	if (t != 'number') {
		if (pNumber.toString)
			pNumber = pNumber.toString();
	
		if (typeof pNumber == 'string') {
			pNumber = pNumber.replace(/[\s]/g, '');
			pNumber = pNumber.replace(/[\,]/, ''); //first comma
			pNumber = pNumber.replace(/[\$]/, ''); //first dollar sign
		}

		pNumber = Number(pNumber);
	} 

	//apply the coersion option
	if (pOptions['floor']) {
		if (pNumber < 0)
			return (pNumber - 0.99999999999)|0; //negative numbers just need the decimal portion removed and then have 1 subtracted if there is any decimal portion > 0
		return pNumber|0;
	}

	if (pOptions['ceil'] || pOptions['ceiling'] || pOptions['ciel'] || pOptions['cieling']) {		//nice check for folks who can't remember how to spell it
		if (pNumber < 0)
			return pNumber|0;						//negative numbers just need the decimal portion removed
		return (pNumber + 0.99999999999)|0;		// == 1		0 with 14 9s, == 2		0 with 16 9s
	}

	//if (pOptions['round']) //'round' is default...no need to check since it is last
	if (pNumber < 0)
		return (pNumber - 0.49999999999)|0;
	return (pNumber + 0.5)|0;
};

akm.math.ceil = function (pNumber) {
    /// <summary>
    /// Given any argument, value will be coersed into a numeric int number (not other numeric types. ex: NaN or Infinity)
    /// <param name='pNumber'>any type or undefined</param>
	/// <returns>number. 0 if: failure to parse a valid value, Infinity, NaN</returns>
    /// </summary>

	return akm.math.toInt(pNumber, 'ceil');
};

akm.math.floor = function (pNumber) {
    /// <summary>
    /// Given any argument, value will be coersed into a numeric int number (not other numeric types. ex: NaN or Infinity)
    /// <param name='pNumber'>any type or undefined</param>
	/// <returns>number. 0 if: failure to parse a valid value, Infinity, NaN</returns>
    /// </summary>

	return akm.math.toInt(pNumber, 'floor');
};

akm.math.round = function (pNumber) {
    /// <summary>
    /// Given any argument, value will be coersed into a numeric int number (not other numeric types. ex: NaN or Infinity)
    /// <param name='pNumber'>any type or undefined</param>
	/// <returns>number. 0 if: failure to parse a valid value, Infinity, NaN</returns>
    /// </summary>

	return akm.math.toInt(pNumber, 'round');
};