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
  uploadImage: (data, id) =>
    requests.postFormData(`shop/products/${id}/images/create-multiple/`, data),
  createCart: () => requests.post(`shop/carts/`),
  getCartItem: (cartId) =>
    requests.get(
      `shop/carts/${cartId}/items/`,
      {},
      { headers: { Authorization: "" } }
    ),
  addItemToCart: (cartId) => requests.post(`shop/carts/${cartId}/items/`),
};
