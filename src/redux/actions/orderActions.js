import { toast } from "react-toastify";
import { orderApi } from "../api-service/orderApi";

const getOrders = async () => {
  try {
    const response = await orderApi.getOrders();
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message?.[0]);
    throw error;
  }
};

export const orderService = {
  getOrders,
};
