function zeropad(text, numPlaces) {
	while(text.length < numPlaces)
		text = '0' + text;
	return text;
}


function post29RenderOutputToElement(el) {
	if (!el)
		return;

	var inputs = [-1.75, -1.5, -1.1, -1, -0.9, -0.51, -0.50, -0.49, -0.1, 0, 0.49, 0.50, 0.99, 1, 1.9, Infinity, '1.', '', ' ', '-1', '0', '1', ' 77 ', '010', '0xa', '0xff', '7.89E+3', '1.23E-2', '$234', '$234.', '$234.56', '$23,456.78', 'foo', '2bar', 'baz3', '123,456', '1,234.56', '1.2.3', '4,5,6', '-1a', '- 2', 'true', 'false', true, false, NaN, null, [], {}, new Function(), undefined];

	var html = '<div class="wrapper-tables">';

	html += '<table class=table-tests>';
	html += '<tr><th>Value (x)</th><th>isNaN(x)</th><th>isFinite(x)</th><th>Number(x)</th><th>Math.round(x)</th><th>Math.ceil(x)</th><th>Math.floor(x)</th><th>parseInt(x)</th><th>parseInt(x,8)</th><th>parseInt(x,10)</th><th>x|0</th><th>akm.math<br>.toInt(x,\'round\')</th><th>akm.math<br>.toInt(x,\'ceil\')</th><th>akm.math<br>.toInt(x,\'floor\')</th><th>x.toFixed(0)</th></tr>';
	for(var i=0;i<inputs.length;i++) {

		var v;
		var t = (typeof inputs[i]);
		var isStr = (t == 'string');
		var isNull = inputs[i] === null;
		var isUndef = inputs[i] === undefined;
		var isFunc = t == 'function';
		var isArr = (t == 'object' && inputs[i] && !isNull && !isUndef && inputs[i].length === 0);
		var isObj = (t == 'object' && !isArr);

		var valueWrapper = isStr ? '&quot;' : '';
		var valueToString = valueWrapper + String(inputs[i]) + valueWrapper;
		if (isArr)
			valueToString = '[]';
		else if (isNull)
			valueToString = 'null';
		else if (isFunc)
			valueToString = 'function()';
		else if (isObj)
			valueToString = '{}';


		html += '<tr>';
		html += '<td class=\"'+(isNaN(inputs[i]) ? 'value-nan ' : 'value-number ') + ' type-' + t + '\" title=\"Type: '+t+'\">' + valueToString + '</td>';
		//html += '<td class=\" type-' + (typeof inputs[i]) + '\">' + t + '</td>';
		
		v = isNaN(inputs[i]);
		html += '<td class=\"'+(isNaN(inputs[i]) ? 'value-nan ' : 'value-number ') + ' type-' + t + '\" title=\'isNaN('+valueToString+')\'>' + v + '</td>';

		v = isFinite(inputs[i]);
		html += '<td class=\"'+(isNaN(inputs[i]) ? 'value-nan ' : 'value-number ') + ' type-' + t + '\" title=\'isFinite('+valueToString+')\'>' + v + '</td>';

		v = Number(inputs[i]);
		html += '<td class=\"'+' type-' + (typeof v) + (isNaN(v) ? ' value-nan ' : ' value-number ') + '\" title=\'Number('+valueToString+')\'>' + v + '</td>';

		v = Math.round(inputs[i]);
		html += '<td class=\"'+' type-' + (typeof v) + (isNaN(v) ? ' value-nan ' : ' value-number ') + '\" title=\'Math.round('+valueToString+')\'>' + v + '</td>';

		v = Math.ceil(inputs[i]);
		html += '<td class=\"'+' type-' + (typeof v) + (isNaN(v) ? ' value-nan ' : ' value-number ') + '\" title=\'Math.ceil('+valueToString+')\'>' + v + '</td>';

		v = Math.floor(inputs[i]);
		html += '<td class=\"'+' type-' + (typeof v) + (isNaN(v) ? ' value-nan ' : ' value-number ') + '\" title=\'Math.floor('+valueToString+')\'>' + v + '</td>';

		v = parseInt(inputs[i]);
		html += '<td class=\"'+' type-' + (typeof v) + (isNaN(v) ? ' value-nan ' : ' value-number ') + '\" title=\'parseInt('+valueToString+')\'>' + v + '</td>';

		v = parseInt(inputs[i],8);
		html += '<td class=\"'+' type-' + (typeof v) + (isNaN(v) ? ' value-nan ' : ' value-number ') + '\" title=\'parseInt('+valueToString+',8)\'>' + v + '</td>';

		v = parseInt(inputs[i],10);
		html += '<td class=\"'+' type-' + (typeof v) + (isNaN(v) ? ' value-nan ' : ' value-number ') + '\" title=\'parseInt('+valueToString+',10)\'>' + v + '</td>';

		v = (inputs[i]|0);
		html += '<td class=\"'+' type-' + (typeof v) + (isNaN(v) ? ' value-nan ' : ' value-number ') + '\" title=\''+valueToString+'|0\'>' + v + '</td>';

		v = akm.math.toInt(inputs[i],'round');
		html += '<td class=\"'+' type-' + (typeof v) + (isNaN(v) ? ' value-nan ' : ' value-number ') + '\" title=\'akm.math.toInt('+valueToString+', "round")\'>' + v + '</td>';

		v = akm.math.toInt(inputs[i],'ceil');
		html += '<td class=\"'+' type-' + (typeof v) + (isNaN(v) ? ' value-nan ' : ' value-number ') + '\" title=\'akm.math.toInt('+valueToString+', "ceil")\'>' + v + '</td>';

		v = akm.math.toInt(inputs[i],'floor');
		html += '<td class=\"'+' type-' + (typeof v) + (isNaN(v) ? ' value-nan ' : ' value-number ') + '\" title=\'akm.math.toInt('+valueToString+', "floor")\'>' + v + '</td>';

		v = Number(inputs[i]).toFixed(0);
		html += '<td class=\"'+' type-' + (typeof v) + (isNaN(v) ? ' value-nan ' : ' value-number ') + '\" title=\'Number('+valueToString+').toFixed(0)\'>' + v + '</td>';

		html += '</tr>';
	}
	html += '</table>'

	html += '<table class=table-legend title=\"Type/isNan\">';
	html += '<tr><th>Legend</th></tr>';
	html += '<tr><td class="type-number value-number">Number/Number</td></tr>';
	html += '<tr><td class="type-number value-nan">Number/NaN</td></tr>';
	html += '<tr><td class="type-string value-number">String/Number</td></tr>';
	html += '<tr><td class="type-string value-nan">String/NaN</td></tr>';
	html += '<tr><td class="type-boolean value-number">Boolean/Number</td></tr>';
	html += '<tr><td class="type-boolean value-nan">Boolean/NaN</td></tr>';
	html += '<tr><td class="type-object value-number">Object/Number</td></tr>';
	html += '<tr><td class="type-object value-nan">Object/NaN</td></tr>';
	html += '<tr><td class="type-undefined value-nan">Function/NaN</td></tr>';
	html += '<tr><td class="type-undefined value-nan">Undefined/NaN</td></tr>';
	html += '</table>';

	html += '</div>';

	el.innerHTML = html;
}
