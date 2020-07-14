export function parseProduct(product) {
  return {
    key: product.id,
    name: product.name,
    category: product.category,
    subCategory: product.sub_category_name,
  };
}

export function parseProducts(products) {
  return products.map(product => parseProduct(product))
}