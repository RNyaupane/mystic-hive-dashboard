import { toast } from "react-toastify";
import { categoryApi } from "../api-service/categoryApi";

const getCategories = async () => {
  try {
    const response = await categoryApi.getCategory();
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message?.[0]);
    throw error;
  }
};

export const categoryService = {
  getCategories,
};
