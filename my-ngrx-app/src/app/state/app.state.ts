import { IProductState } from "./app.product.state";

// define a single intreface that will be used as Global Application State
// the 'products' represents the state in the Global Store having store name as 'products'


export interface IAppState{
    products:IProductState
}