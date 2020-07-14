//initial state
export const COMMON_INITIAL_STATE = {
  categories: [],
  subCategories: {},
};

//reducer
export const ACTION_CATEGORY_LOADED = 'CATEGORY_LOADED';
export const ACTION_CATEGORY_LOADED_FAILED = 'CATEGORY_LOADED_FAILED';
export const ACTION_SUB_CATEGORY_LOADED = 'SUB_CATEGORY_LOADED';
export const ACTION_SUB_CATEGORY_LOADED_FAILED = 'SUB_CATEGORY_LOADED_FAILED';

export const commonReducer = (state = COMMON_INITIAL_STATE, action) => {
  if (action.type === ACTION_CATEGORY_LOADED) {
    return { ...state, categories: action.payload };
  } else if (action.type === ACTION_SUB_CATEGORY_LOADED) {
    return { ...state, subCategories: { [action.payload.categoryId]: action.payload.data } };
  } else {
    return state;
  }
};
