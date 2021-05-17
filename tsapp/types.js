// implicit datatype definition based on initial value
var n1 = 1000; // 'n1' will be implicitely declated to 'number'
// n1 = 'sss'; // generate error
// explict type dfinition
var n2 = 56733;
console.log('n2 = ' + n2 + ' and tyep of n2 = ' + typeof (n2));
var str1 = "Mahesh Sabnis";
console.log('str1 = ' + str1 + ' and tyep of str1 = ' + typeof (str1));
// methods with types
// Template String Type , the template string maintatin the state of 
// newline and tabs
console.log("Value of str1 = \n                " + str1);
console.log("Upper Case of str1 = " + str1.toUpperCase());
console.log("Lower Case of str1 = " + str1.toLowerCase());
