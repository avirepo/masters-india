import AxiosBuilder from "./axiosBuilder";

export const getCategories = () => {
  return new AxiosBuilder('category/').GET()
}

export const getSubCategories = (categoryId) => {
  return new AxiosBuilder(`sub-category/${categoryId}/`).GET()
}