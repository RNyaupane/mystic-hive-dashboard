import { requests } from "../restApi";

export const productApi = {
  getProduct: () =>
    requests.get("shop/products/", {}, { headers: { Authorization: "" } }),
  getProductDetail: (data) =>
    requests.get(
      `shop/products/${data?.id}`,
      {},
      { headers: { Authorization: "" } }
    ),
  createProduct: (data) => requests.post(`shop/products/`, data),
};
