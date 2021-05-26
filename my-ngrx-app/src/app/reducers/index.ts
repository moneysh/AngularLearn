// generally recommended that aggrigate all reducres together so that
// they can be configuraged to store at once
// ActionReducerMap<T,U>, T is a global State, U is all actions monitored by Reducer
import { ActionReducerMap } from "@ngrx/store";
// global state object that Aggrigate all state together
import {  IAppState} from "./../state/app.state";

import { reducer } from "./app.product.reducers";

export const mainReducer:ActionReducerMap<IAppState,any> =  {
    products:reducer // the products is a Store name the contains state updated by any action
};
