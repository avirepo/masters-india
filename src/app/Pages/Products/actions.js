import { addProducts, getProducts } from './services';
import Logger from "../../Common/logging";
import {
  ACTION_NEW_PRODUCT_CATEGORY,
  ACTION_NEW_PRODUCT_NAME,
  ACTION_NEW_PRODUCT_SUB_CATEGORY,
  ACTION_PRODUCT_ADD_ROW,
  ACTION_PRODUCT_ADDED,
  ACTION_PRODUCT_ADDED_FAILED,
  ACTION_PRODUCT_CLEAR_NEW_ROW,
  ACTION_PRODUCT_LOADED,
  ACTION_PRODUCT_LOADED_FAILED
} from './reducer';

const LOGGER = Logger.createLogger('ProductActions');

export const fetchProducts = () => dispatch => {
  getProducts().then(res => {
    dispatch({
      type: ACTION_PRODUCT_LOADED,
      payload: res.data
    })
  }).catch(err => {
    LOGGER.error(err)
    dispatch({
      type: ACTION_PRODUCT_LOADED_FAILED,
    })
  })
}

export const addProductRow = () => dispatch => {
  dispatch({
    type: ACTION_PRODUCT_ADD_ROW
  })
}

export const clearNewProductRow = () => dispatch => {
  dispatch({
    type: ACTION_PRODUCT_CLEAR_NEW_ROW
  })
}

export const addProductName = (value) => dispatch => {
  dispatch({
    type: ACTION_NEW_PRODUCT_NAME,
    payload: value
  })
}

export const selectCategory = (value) => dispatch => {
  dispatch({
    type: ACTION_NEW_PRODUCT_CATEGORY,
    payload: value
  })
}

export const selectSubCategory = (value) => dispatch => {
  dispatch({
    type: ACTION_NEW_PRODUCT_SUB_CATEGORY,
    payload: value
  })
}

export const addProduct = ({productName, subCategory}) => dispatch => {
  addProducts(productName, subCategory).then(res => {
    dispatch({
      type: ACTION_PRODUCT_ADDED,
      payload: res.data
    })
  }).catch(err => {
    LOGGER.error(err)
    dispatch({
      type: ACTION_PRODUCT_ADDED_FAILED,
    })
  })
}