class MyClass {
    // private str:string;

    // constructor(s:string){
    //     this.str = s;
    // }


    // ctor with the private parameter
    constructor(private str:string){
      //  this.arr = new Array<number>();
        
    }

    changesCase(c:string):string {
        if (c === "U" || c === "u") return  this.str.toUpperCase();
        if (c === "L" || c === "l") return  this.str.toLowerCase();
        return this.str;
    }   

    // func object of JavaScript
    reverse(arr:string):string;
   
    reverse(arr:Array<number>):Array<number>{
        return arr;
    }

    // CognitoUserSession => { idToken, refreshToken, accessToken }

    // reverse(str:string):string {
    //     let result:string = '';
    //     for(let i= str.length-1; i>=0; i--){
    //         result += str[i];
    //     }
    //     return result;
    // };
    // reverse(arr:Array<number>):Array<number>{
    //     return arr.reverse();
    // }
}

let obj = new MyClass('TypeScript is Great');
console.log(`Upper case = ${obj.changesCase('U')}`);
console.log(`Lower case = ${obj.changesCase('L')}`);
// internall func.apply() for string
console.log(`Reverse = ${obj.reverse('Mahesh Sabnis')}`);
let arr:Array<number> = new Array<number>();
arr.push(40);
arr.push(10);
arr.push(30);
arr.push(20);
// internall func.apply() for number array
console.log(`Reverse Array= ${obj.reverse(arr)}`);