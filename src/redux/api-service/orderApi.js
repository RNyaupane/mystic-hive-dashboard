import { requests } from "../restApi";

export const orderApi = {
  getOrders: () => requests.get("shop/orders/"),
  postOrder: (data) => requests.post(`shop/orders/`, data),
};
