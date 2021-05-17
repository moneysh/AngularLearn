let characters = new Array<string>();
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

let charactersToUpper = characters.map((v,i)=>{
    return v.toLocaleUpperCase();
});
console.log(charactersToUpper); // array with uppercase convertion
let charactersToUpperForEach = characters.forEach((v,i)=>{
    return v.toLocaleUpperCase();
});
console.log(charactersToUpperForEach); // undefined

let heroeswithlengthmorethan14 = characters.map((v,i)=>{
    return characters[i].length > 10;
});
console.log(heroeswithlengthmorethan14); // [ false, true, false, true, true, false ]

let dataheroeswithlengthmorethan10 = characters.filter((v,i)=>{
    return v.length > 10;
});
console.log(dataheroeswithlengthmorethan10); // [ 'Jason Bourn', 'Indiana Jones', 'Jack Reacher' ]
