import { requests } from "../restApi";

export const categoryApi = {
  getCategory: () =>
    requests.get("shop/categories/", {}, { headers: { Authorization: "" } }),
  postCategory: (data) => requests.post(`shop/categories/`, data),
};
