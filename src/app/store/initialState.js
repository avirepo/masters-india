import { PRODUCTS_INITIAL_STATE } from "../Pages/Products/reducer";
import { COMMON_INITIAL_STATE } from "./commonReducer";

const INITIAL_STATE = {
  common: COMMON_INITIAL_STATE,
  products: PRODUCTS_INITIAL_STATE,
};
export default INITIAL_STATE;
