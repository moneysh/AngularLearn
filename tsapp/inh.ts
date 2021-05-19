class Base {
    private v:string; 
    constructor(v:string){
        this.v  =v;
    }
    display():void {
        console.log(`v  =${this.v}`);
    }
    private privateMethod(){
        console.log('I am a Private method');
    }
    protected protectedMethod(){
        console.log('I am a Protected method');
    }
}

class Derive extends Base {
    constructor(public x:string){
        super(x);
    }
    printData():void{
        this.protectedMethod();
    }
}

let objD = new Derive('My Data');
objD.display();
objD.printData();