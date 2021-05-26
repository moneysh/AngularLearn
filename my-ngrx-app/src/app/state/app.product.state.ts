import { Product } from "../models/app.product.model";

// defining the interface that will contains schema for the State

export interface IProductState {
    products: Product[], // the schema that represents array of Product
    product:Product // schema for creating / updating / deleting / seleting product
}

// define an initial state for the store
export const initialProductStat:IProductState = {
    products:[],
    product:new Product()
};
