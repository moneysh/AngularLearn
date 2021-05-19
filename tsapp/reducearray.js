var emp = [
    { empno: 1, empname: 'A', dname: 'IT' },
    { empno: 2, empname: 'B', dname: 'HR' },
    { empno: 3, empname: 'C', dname: 'IT' },
    { empno: 4, empname: 'D', dname: 'HR' }
];
// reduce  function 
// Modify the same collection as per the behavior configured on it
var summation = [10, 20, 30, 40].reduce(function (final, current) {
    return final + current;
}, 0); // inital value for final (aka accumalator) is zero
console.log(summation);
function createGroup(sourceArr, groupProperty) {
    // accualtor: final result
    // obj : each record from the source array
    return sourceArr.reduce(function (accualtor, obj) {
        // read the group key
        var key = obj[groupProperty];
        // iterate for group
        if (!accualtor[key]) {
            accualtor[key] = []; // if no key found return empty
        }
        accualtor[key].push(obj); // push object in group by key
        return accualtor;
    }, {});
}
;
var resultant = createGroup(emp, 'dname');
console.log(JSON.stringify(resultant));
