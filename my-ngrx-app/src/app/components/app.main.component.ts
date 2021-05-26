import { Component, OnInit } from '@angular/core';

// this component uses the ROute Table to Query for Component Navigation 
// [routerLink], a custom attribute directive used to nquery to Route Table
// this accepts input as array, that contains route url as first entry and second onwards are route parameters 
//if any
// router-outlet, is a component directive that renders the component being navigated

@Component({
    selector: 'app-main-component',
    template: `
       <h1>The Angular NGRX Application</h1>
       <div class="container">
       <table class="table table-bordered table-striped">
           <tbody>
               <tr>
                   <td>
                       <a [routerLink]="['']">List of Products</a>
                   </td>
                   <td>
                       <a [routerLink]="['create']">Create Product</a>
                   </td>
               </tr>
           </tbody>
       </table>

       <hr>
       <router-outlet></router-outlet>
</div>
    `
})

export class MainComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}