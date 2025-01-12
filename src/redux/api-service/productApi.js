import { requests } from "../restApi";

export const productApi = {
  getProduct: () => requests.get("shop/products/", {}),
  getProductDetail: (data) => requests.get(`shop/products/${data?.id}`),
  createProduct: (data) => requests.post(`shop/products/`, data),
};
