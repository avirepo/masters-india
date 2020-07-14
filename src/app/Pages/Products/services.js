import AxiosBuilder from "../../Common/axiosBuilder";

export const getProducts = () => {
  return new AxiosBuilder('products/').GET()
}

export const addProducts = (productName, subCategory) => {
  return new AxiosBuilder('products/', {
    data: JSON.stringify({
      name: productName,
      sub_category: subCategory
    })
  }).POST()
}