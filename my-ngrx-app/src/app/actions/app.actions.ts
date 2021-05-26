// actions are dispatched from UI or effects.
// actions has payload
// IMP: If actions are used for Async operations then create seperate actions for
// 1. Async Initialization
// 2. Async Success
// 3. Async Error (Optional)

// createAction: Used to define an Action to be dispated,
// props: is a payload (input or output parameter) 
import { createAction, props } from "@ngrx/store";
import { Product } from "./../models/app.product.model";

export const getProducts = createAction(
    '[Product] Get Products' // developer friendly action type. This will be logged by DevTools to inform the action being dispatched
);
// output action, a success action that shows the payload as Product[] to be updated in store
export const getProductsSuccess = createAction(
    '[Product] Get Products Success',
    props<{products:Product[]}>()
);

export const postProduct = createAction(
    '[Product] Post Product',
    props<{payload:Product}>()
);

export const postProductSuccess = createAction(
    '[Product] Post Product Success',
    props<{payload:Product}>()
);
