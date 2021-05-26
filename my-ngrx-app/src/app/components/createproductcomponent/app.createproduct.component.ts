import { Component, OnInit } from '@angular/core';
import { Categories, Manufacturers } from 'src/app/models/app.constants';
import { Product } from 'src/app/models/app.product.model';
import { Store,select } from "@ngrx/store";
// since the store needs a initia state imporing the IAppState 
import { IAppState } from "./../../state/app.state";
// importing actions for dispatching actions
import { ProductActions } from "./../../actions/index";

// the 'Router' is an object that is used to provide event based navigation

import { Router } from "@angular/router";


@Component({
    selector: 'app-createproduct-component',
    templateUrl: './app.createproduct.view.html'
})

export class CreateProductComponent implements OnInit {
    product:Product
    categories=Categories;
    manufacturers=Manufacturers;
    // inject the Router, this will be resolved by ROuterModule imporetd in NgModule
    constructor(private store:Store<IAppState>, private router:Router) {
        this.product  =new  Product();
     }

    ngOnInit() { }
    save():void{
         this.store.dispatch(ProductActions.postProduct({payload:this.product}));
         setTimeout(()=>{
            this.router.navigate(['']); // navigate to the ProductListComponent
         }, 4000); // wait for 4 seconds
    }
    clear():void{
        this.product  =new  Product();
    }
}