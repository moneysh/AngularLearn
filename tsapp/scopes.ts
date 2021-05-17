function doWork(x:boolean){
    if(x) {
        let y = 10;
        console.log(`In if true y  =${y}`);
    }
    console.log(`In if false y  =${y}`);
}

doWork(true);
doWork(false);

for(let i=0;i<8;i++){
    console.log(`in loop i = ${i}`);
}
console.log(`out of loop i = ${i}`);
i++;
console.log(`out of loop i post increament= ${i}`);