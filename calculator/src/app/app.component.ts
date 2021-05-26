import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string;
  url: string;
  name: string;
  static num1: number;
  static num2: number;
  ans: string ='';
  display:string='';
  op:String='';
  

  constructor(){
    this.message = 'The Component';
    this.url = 'https://www.dotnetcurry.com';
    this.name ='';
    
  }

  setNumber(input:number ){
    if(this.ans != '')
    {
      this.display='';
      this.ans ='';
    }
    
      this.display=this.display+input;
     
    
    
  }
  operation(op:string){
    this.op=op;
    AppComponent.num1=parseInt(this.display);
    this.display='';

  }
  result(){
    AppComponent.num2=parseInt(this.display);
    switch(this.op){
      case '+':this.ans = ''+(AppComponent.num1+AppComponent.num2);
        this.display=''+this.ans ;
      break;
      case '-':this.ans = ''+(AppComponent.num1-AppComponent.num2);
      this.display=''+this.ans ;
       break;
      case '*':this.ans = ''+(AppComponent.num1*AppComponent.num2);
      this.display=''+this.ans ;
      break;
      case '/':this.ans = ''+(AppComponent.num1/AppComponent.num2);
      this.display=''+this.ans ;
       break;
    }

  }

  cancel(){
    this.display='';
    this.ans = '';
    this.op='';
    AppComponent.num1=0;
    AppComponent.num2=0;
  }

    

  
}
