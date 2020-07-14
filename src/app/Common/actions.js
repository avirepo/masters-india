import {
  ACTION_CATEGORY_LOADED,
  ACTION_CATEGORY_LOADED_FAILED,
  ACTION_SUB_CATEGORY_LOADED,
  ACTION_SUB_CATEGORY_LOADED_FAILED
} from '../store/commonReducer'
import { getCategories, getSubCategories } from "./services";
import Logger from "./logging";

const LOGGER = Logger.createLogger('CommonActions')

export const fetchCategory = () => dispatch => {
  getCategories().then(res => {
    dispatch({
      type: ACTION_CATEGORY_LOADED,
      payload: res.data
    })
  }).catch(err => {
    LOGGER.error(err)
    dispatch({
      type: ACTION_CATEGORY_LOADED_FAILED,
    })
  })
}

export const fetchSubCategory = (categoryId) => dispatch => {
  getSubCategories(categoryId).then(res => {
    dispatch({
      type: ACTION_SUB_CATEGORY_LOADED,
      payload: { categoryId, data: res.data }
    })
  }).catch(err => {
    LOGGER.error(err)
    dispatch({
      type: ACTION_SUB_CATEGORY_LOADED_FAILED,
    })
  })
}
