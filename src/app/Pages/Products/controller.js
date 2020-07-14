import { addProduct, fetchProducts } from './actions';

export const mapStateToProps = (state) => ({
  products: state.products.data
})
export const mapDispatchToProps = {
  addProduct,
  fetchProducts
}