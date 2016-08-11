'use strict';

var inherits = function (child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
};

var isNumber = function(val) {
    return !isNaN(parseFloat(val)) && isFinite(val);
};

module.exports = {
    inherits: inherits,
    isNumber: isNumber
};
