import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpService } from '../services/app.http.service';
// switchMap, is the object that will used to pipe mutiple operations
// those are working on Observables so that easy navigation from one to another
// operations is possible aka process of linking input operation with output operation by
// implicitely subscribing to it 
import { switchMap } from "rxjs/operators";
import { ProductActions } from '../actions';
// the operator that provides an auto subscription to Observable and map it to the swichMap
// so that effect can read the data from the observable and subscribe to it
import { of } from 'rxjs';
import { Product } from '../models/app.product.model';

@Injectable()
export class ProductEffect {

    // wrting methods those are accessing HttpService methods. Since all methods from service
    // returns Observable, effects accessing these methods will be representing Observbale type subscription
    // using tail as $ to the effect name
    
    getProducts$ = createEffect(()=> this.action$.pipe(
        ofType(ProductActions.getProducts), // moitor the action taht is dispatched from UI
        switchMap(()=> this.serv.getData()), // call the method from the service for dispatched action from UI
        // dispatch the success or output action
        // the reducer which monitor the getProductSuccess will read the payload (products)
        // and update back to the store
        switchMap((products:Product[])=>of(ProductActions.getProductsSuccess({products})))
    ));

    posProduct$ = createEffect(()=> this.action$.pipe(
        ofType(ProductActions.postProduct), // moitor the action taht is dispatched from UI
        switchMap((param)=> this.serv.postData(param.payload)), // call the method from the service for dispatched action from UI
        // dispatch the success or output action
        // the reducer which monitor the postProductSuccess will read the payload (products)
        // and update back to the store
        switchMap((payload:Product)=>of(ProductActions.postProductSuccess({payload})))
    ));




    // the effect must be injected with following
    // 1. The Service that is accessing WEB APIs / REST APIs / Any other External Communication (Generally usesd)
    // 2. Actions, actions to be monitored as input from UI and  output actions to be dispatched (Mandatory)
    // 3. Store, if the effect is accessing store to query then inject the store (optional)
    constructor(private serv: HttpService,
         private action$:Actions) { } 
         // <Identifier>$ means this object will be used to subscribe ton observables for Data Read/Writeoperations, e.g. action$
    
}