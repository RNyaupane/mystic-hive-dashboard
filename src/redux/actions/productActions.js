import { toast } from "react-toastify";
import { productApi } from "../api-service/productApi";

const getProducts = async () => {
  try {
    const response = await productApi.getProduct();
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message?.[0]);
    throw error;
  }
};

const getProductDetail = async ({ payload }) => {
  try {
    const response = await productApi.getProductDetail(payload);
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message?.[0]);
    throw error;
  }
};

export const productService = {
  getProducts,
  getProductDetail,
};
