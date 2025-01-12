import { requests } from "../restApi";

export const categoryApi = {
  getCategory: () => requests.get("shop/categories/", {}),
  postCategory: (data) => requests.post(`shop/categories/`, data),
};
