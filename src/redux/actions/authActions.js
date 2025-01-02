import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../../utils/base_url";

// Register Service
const register = async (registerData) => {
  try {
    const response = await axios.post(
      `${base_url}candidate/signup?`,
      registerData
    );
    return response.data;
  } catch (error) {
    console.error("Error during register:", error);
    throw error;
  }
};

//   Login Service
const login = async (data) => {
  try {
    const response = await axios.post(`${base_url}auth/local`, data);
    if (response.status === 200) {
      toast.success(response?.message || "Login Successfully");
    } else {
      toast.error(response?.error?.message);
    }
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
    throw error;
  }
};

//Logout Serive
const logout = async () => {
  try {
    const response = await axios.post(`${base_url}logout`);
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.error("Error during logout:", error);
    throw error;
  }
};

export const authService = {
  register,
  login,
  logout,
};
