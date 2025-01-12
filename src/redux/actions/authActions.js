import { toast } from "react-toastify";
import { requests } from "../restApi";
import axios from "axios";
import { API_BASE_URL } from "../../config/config-global";

// Login Service
const login = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}auth/login/`, data, {
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response?.data?.data?.user?.is_staff === false) {
      toast.warning("You are not an Admin");
      return false;
    } else if (response?.data?.status) {
      toast.success(response?.message || "Login Successfully");
      return response?.data;
    }
  } catch (error) {
    toast.error(error?.response?.data?.message?.[0] || "Login failed!");
    throw error;
  }
};

// Logout Service
const logout = async () => {
  try {
    const response = await requests.post("logout");
    if (response) {
      toast.success("Logged out successfully!");
      return response;
    }
  } catch (error) {
    toast.error("Error during logout!");
    console.error("Error during logout:", error);
    throw error;
  }
};

export const authService = {
  login,
  logout,
};
