// createReducer, is a function, that accepts first parameter as initial state and secod parameter as 
// action that is dispatched and returns modified or updated state  based on payload 
// returned by action method

import { createReducer,on } from "@ngrx/store";
import { ProductActions } from "./../actions/index";
import { initialProductStat } from "./../state/app.product.state";

// define the reducer
export const reducer = createReducer(
    initialProductStat,
    on(ProductActions.getProductsSuccess, (state, {products})=>({
        ...state, products // mutating the state by using new products
    })),
    on(ProductActions.postProductSuccess, (state, payload)=>({
        ...state,payload // newly created product is added in state
    }))
);

