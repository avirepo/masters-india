import {
  addProduct,
  addProductName,
  clearNewProductRow,
  selectCategory,
  selectSubCategory
} from '../../actions';
import { fetchCategory, fetchSubCategory } from '../../../../Common/actions';

export const mapStateToProps = (state) => {
  let newRow = state.products.newRow;
  let productName = newRow && newRow.productName;
  let selectedCategory = newRow && newRow.category;
  let subCategories = (selectedCategory && state.common.subCategories[selectedCategory.id]) || []

  let selectedSubCategory = newRow && newRow.subCategory;
  let disableSaveAction = !(productName && selectedCategory && selectedSubCategory)
  let addPayload = null;
  if (newRow) {
    addPayload = {
      productName,
      subCategory: selectedSubCategory && selectedSubCategory.id,
    }
  }
  return {
    newRow: newRow,
    categories: state.common.categories,
    selectedCategory,
    selectedSubCategory,
    subCategories,
    allSubCategories: state.common.subCategories,
    disableSaveAction,
    addPayload
  }
}
export const mapDispatchToProps = {
  addProduct,
  clearNewProductRow,
  fetchCategory,
  fetchSubCategory,
  addProductName,
  selectCategory,
  selectSubCategory
}