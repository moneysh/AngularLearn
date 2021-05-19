var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Base = /** @class */ (function () {
    function Base(v) {
        this.v = v;
    }
    Base.prototype.display = function () {
        console.log("v  =" + this.v);
    };
    Base.prototype.privateMethod = function () {
        console.log('I am a Private method');
    };
    Base.prototype.protectedMethod = function () {
        console.log('I am a Protected method');
    };
    return Base;
}());
var Derive = /** @class */ (function (_super) {
    __extends(Derive, _super);
    function Derive(x) {
        var _this = _super.call(this, x) || this;
        _this.x = x;
        return _this;
    }
    Derive.prototype.printData = function () {
        this.protectedMethod();
    };
    return Derive;
}(Base));
var objD = new Derive('My Data');
objD.display();
objD.printData();
