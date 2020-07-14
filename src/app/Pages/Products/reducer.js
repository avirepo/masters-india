//initial state
import { parseProduct, parseProducts } from "./helpers";

export const PRODUCTS_INITIAL_STATE = {
  data: [],
  products: [],
  newRow: null,
};

export const ACTION_PRODUCT_LOADED = 'PRODUCT_LOADED';
export const ACTION_PRODUCT_LOADED_FAILED = 'PRODUCT_LOADED_FAILED';
export const ACTION_PRODUCT_ADD_ROW = 'PRODUCT_ADD_ROW';
export const ACTION_PRODUCT_CLEAR_NEW_ROW = 'PRODUCT_CLEAR_NEW_ROW';
export const ACTION_PRODUCT_ADDED = 'PRODUCT_ADDED';
export const ACTION_PRODUCT_ADDED_FAILED = 'PRODUCT_ADDED_FAILED';
export const ACTION_NEW_PRODUCT_NAME = 'NEW_PRODUCT_NAME';
export const ACTION_NEW_PRODUCT_CATEGORY = 'NEW_PRODUCT_CATEGORY';
export const ACTION_NEW_PRODUCT_SUB_CATEGORY = 'NEW_PRODUCT_SUB_CATEGORY';

//reducer
export const productReducer = (state = PRODUCTS_INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_PRODUCT_LOADED:
      let products = action.payload;
      parseProducts(products)
      return { ...state, data: parseProducts(products), products };
    case ACTION_PRODUCT_ADDED:
      state.data.unshift(parseProduct(action.payload))
      return { ...state, data: [...state.data], newRow: null };
    case ACTION_PRODUCT_ADD_ROW:
      return { ...state, newRow: {} };
    case ACTION_NEW_PRODUCT_NAME:
      state.newRow.productName = action.payload
      return { ...state, newRow: { ...state.newRow } };
    case ACTION_NEW_PRODUCT_CATEGORY:
      state.newRow.category = action.payload
      return { ...state, newRow: { ...state.newRow } };
    case ACTION_NEW_PRODUCT_SUB_CATEGORY:
      state.newRow.subCategory = action.payload
      return { ...state, newRow: { ...state.newRow } };
    case ACTION_PRODUCT_CLEAR_NEW_ROW:
      return { ...state, newRow: null };
    default:
      return state;
  }
};
