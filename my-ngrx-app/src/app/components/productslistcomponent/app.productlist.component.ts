import { Component, OnInit } from '@angular/core';
// Store: will be subscribed by the component 
// by injecting the store as constructor injector
// select is the function the executes seletor on store
import { Store,select } from "@ngrx/store";
// since the store needs a initia state imporing the IAppState 
import { IAppState } from "./../../state/app.state";
// importing actions for dispatching actions
import { ProductActions } from "./../../actions/index";
 
// importing the selector
import { selectProductsList } from "./../../selectors/app.product.selector";


import { Product } from "./../../models/app.product.model";
@Component({
    selector: 'app-productlist-component',
    templateUrl: './app.productlist.view.html'
})

export class ProductListComponent implements OnInit {
    // products:Array<Product>;
    columnHeaders:Array<string>;
    product: Product;


    // use the selector that will provide teh data from store once it is available in te store
    products$ = this.store.pipe(select(selectProductsList));


    constructor(private store:Store<IAppState>) {
        this.product  =new Product();
        // this.products = new Array<Product>();
        this.columnHeaders = new Array<string>();
    }

    ngOnInit() { 
        this.columnHeaders = Object.keys(this.product);
        console.log(JSON.stringify(this.columnHeaders));
        // dispatch the action to get an initial data

        this.store.dispatch(ProductActions.getProducts());
    }
}