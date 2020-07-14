import { combineReducers } from 'redux';


import { commonReducer } from "./commonReducer";
import { productReducer } from "../Pages/Products/reducer";


export const rootReducer = combineReducers({
  common: commonReducer,
  products: productReducer,
});
