// IProductState, to read only products data from GLobal State
import { IProductState } from "./../state/app.product.state";
// createSelector, used to creae a query that will be used by component to select/read data from Global Store
import { createSelector } from "@ngrx/store";
// the Global State that will be queried
import { IAppState } from "./../state/app.state";
// point to the Store so that Products can be read from it like a conection string
export const selectProducts = (state:IAppState) => state.products; 

// create a slector that will read only products list from the store

export const selectProductsList = createSelector(
    selectProducts, // the store on which the query is executed 
    (state:IProductState) => state.products // get only the products
);