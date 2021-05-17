var characters = new Array();
characters.push('James Bond');
characters.push('Jason Bourn');
characters.push('Ethan Hunt');
characters.push('Indiana Jones');
characters.push('Jack Reacher');
characters.push('Jack Ryan');
// using map() method to array iteration
// characters.map((v,i)=>{
//     console.log(`value = ${v}`);
// });
var charactersToUpper = characters.map(function (v, i) {
    return v.toLocaleUpperCase();
});
console.log(charactersToUpper); // array with uppercase convertion
var charactersToUpperForEach = characters.forEach(function (v, i) {
    return v.toLocaleUpperCase();
});
console.log(charactersToUpperForEach); // undefined
var heroeswithlengthmorethan14 = characters.map(function (v, i) {
    return characters[i].length > 10;
});
console.log(heroeswithlengthmorethan14); // [ false, true, false, true, true, false ]
var dataheroeswithlengthmorethan10 = characters.filter(function (v, i) {
    return v.length > 10;
});
console.log(dataheroeswithlengthmorethan10);
