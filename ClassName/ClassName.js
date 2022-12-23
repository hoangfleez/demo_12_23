"use strict";
exports.__esModule = true;
exports.ClassName = void 0;
var ClassName = /** @class */ (function () {
    function ClassName() {
        this.CLASS_NAME = /^[CAP]\d{4}[GHIKLM]$/;
    }
    ClassName.prototype.validate = function (regex) {
        return this.CLASS_NAME.test(regex);
    };
    return ClassName;
}());
exports.ClassName = ClassName;
var className = new ClassName();
// let validClassName: string[] = ["C0318G"];
// let invalidClassName: string[] = ["M0318G"];
console.log(className.validate("C0318G"));
console.log(className.validate("M0318G"));
