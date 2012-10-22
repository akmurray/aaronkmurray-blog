(function () {
/*!

	Prototype extensions to base objects.
	Methods that should exist by default, with checks in case they actually do.

	Aaron K. Murray, akmurray@gmail.com, @aaronkmurray, www.aaronkmurray.com

*/
}());


if (!Element.prototype.hasClassName) Element.prototype.hasClassName = function (c) {
	///<summary>Check to see if an element has a given css class name</summary>
	///<returns>boolean. true/false</returns>
    return new RegExp('(?:^|\\s+)' + c + '(?:\\s+|$)').test(this.className);
};

if (!Element.prototype.addClassName) Element.prototype.addClassName = function (c) {
	///<summary>Add a css class name to an element</summary>
	///<returns>boolean. true/false if the element had the css class before calling this method</returns>
    if (!this.hasClassName(c)) {
        this.className = [this.className, c].join(' ');
		return true;
    }
	return false;
};

if (!Element.prototype.removeClassName) Element.prototype.removeClassName = function (c) {
	///<summary>Remove a css class name from an element</summary>
	///<returns>boolean. true/false if the class name was found and removed</returns>
    if (this.hasClassName(c)) {
        var a = this.className;
        this.className = a.replace(new RegExp('(?:^|\\s+)' + c + '(?:\\s+|$)', 'g'), ' ');
		return true;
    }
	return false;
};

if (!Element.prototype.toggleClassName) Element.prototype.toggleClassName = function (c) {
	///<summary>Add a given css class name if it does not exist on the element. Remove the class if the class exists on the element.</summary>
	///<returns>undefined</returns>
	this[this.hasClassName(c) ? 'removeClassName' : 'addClassName'](c);
};

