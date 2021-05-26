import{LitElement , customElement , html , property , css} from "lit-element";

@customElement('grid-element')
export class GridLitElement extends LitElement {

    @property({type:String}) inputMessage;
    @property({type:Array}) products;
    @property({type:Array}) headers;

    constructor(){
        super();
        this.inputMessage  ='';
        this.products = new Array<any>();
        this.headers = new Array<string>();  
    }

   
    render(){
        return html `<div> 
               <strong> The Grid Element </strong>
               <table >
               <thead>
                   <tr>
                   ${this.headers.map((d)=>
                    html `<th>${d}</th>`)}
                   </tr>
               </thead>
               <tbody>
               ${this.products.map((d)=> 
                html `<tr> ${ this.headers.map((key) => 
                    html `<td> ${d[key]} </td>`  
                   )} </tr>`)}
                
               
                   
               </tbody>
           </table>

                        
              
            </div>
        `;
    }
}
