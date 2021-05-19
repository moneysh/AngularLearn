var MyClass = /** @class */ (function () {
    // private str:string;
    // constructor(s:string){
    //     this.str = s;
    // }
    // ctor with the private parameter
    function MyClass(str) {
        //  this.arr = new Array<number>();
        this.str = str;
    }
    MyClass.prototype.changesCase = function (c) {
        if (c === "U" || c === "u")
            return this.str.toUpperCase();
        if (c === "L" || c === "l")
            return this.str.toLowerCase();
        return this.str;
    };
    MyClass.prototype.reverse = function (arr) {
        return arr;
    };
    return MyClass;
}());
var obj = new MyClass('TypeScript is Great');
console.log("Upper case = " + obj.changesCase('U'));
console.log("Lower case = " + obj.changesCase('L'));
console.log("Reverse = " + obj.reverse('Mahesh Sabnis'));
var arr = new Array();
arr.push(40);
arr.push(10);
arr.push(30);
arr.push(20);
console.log("Reverse Array= " + obj.reverse(arr));
