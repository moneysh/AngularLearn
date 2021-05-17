// simple declaration
var x = 10;
console.log("x = " + x);
var y;
y = x;
console.log("y = " + y);
y = 100;
console.log("After changing y = 10 x = " + x + " and y = " + y);
// simple JSON Object or Obejct literal
var obj1 = { x: 10 };
console.log("obj1.x = " + obj1.x);
var obj2 = obj1; // assigning obj1 to obj2
console.log("After assign obj1 to obj2 , obj1.x = " + obj1.x + " and obj2.x = " + obj2.x);
obj2.x = 1000;
console.log("After updating obj2.x to 1000  , obj1.x = " + obj1.x + " and obj2.x = " + obj2.x);
// create a new object from the schema and values of the source object using Object.assign()
// Parameter 1: the Target object to becreated
// Parameter 2: the Sourve object that will used to create target object but at new location
var obj3 = Object.assign({}, obj2);
console.log("obj3 = " + obj3.x + " and obj2 = " + obj2.x);
obj3.x = 3000;
console.log("Aster update obj3, obj3 = " + obj3.x + " and obj2 = " + obj2.x);
