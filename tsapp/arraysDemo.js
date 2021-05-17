// Implicit Array Definition
var names = ['Tejas', 'Mahesh', 'Ramesh', 'Ram', 'Shankar', 'Sabnis'];
// Explict Array Declarations
var heros = new Array();
// use Array methods to push data and other data manipulations
heros.push('James Bond');
heros.push('Jason Bourn');
heros.push('Ethan Hunt');
heros.push('Indiana Jones');
heros.push('Jack Reacher');
heros.push('Jack Ryan');
// Standard Itaration using for..loop
for (var i = 0; i < heros.length; i++) {
    console.log("Value at " + i + "th position = " + heros[i]);
}
// ES 6 Iteration on Array using for..of loop, internally uses an iterator
for (var _i = 0, heros_1 = heros; _i < heros_1.length; _i++) {
    var n = heros_1[_i];
    console.log("Hero = " + n);
}
// ES 6 methods for Array Operations
// the standard Iteration using 'forEach()' method
// define ann explict function of which address will be passed to the method 
function printData(v, i) {
    console.log("Value at index " + i + " =  " + v);
}
heros.forEach(printData);
console.log();
console.log("Passing the Function Body to the array function");
heros.forEach(function (v, i) {
    console.log("Value at index " + i + " =  " + v);
});
console.log();
console.log("Using Arrow Operator");
heros.forEach(function (v, i) {
    console.log("Value at index " + i + " =  " + v);
});
