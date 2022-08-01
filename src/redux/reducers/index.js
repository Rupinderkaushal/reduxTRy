import { combineReducers } from "redux";
import { ProductReducer,selectedProductReducer } from "./ProductReducer";

const reducers = combineReducers({
    products:ProductReducer,
    product:selectedProductReducer,
})
export default reducers;