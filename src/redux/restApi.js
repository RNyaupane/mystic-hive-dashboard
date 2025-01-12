/* eslint-disable no-unused-vars */
/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-unused-expressions */

import axios from "axios";

import { store } from "./store";
import authReducer, { authSlice, logoutUser } from "./reducers/authSlice";
import { toast } from "react-toastify";
import { Public_Paths, API_BASE_URL } from "../config/config-global";

const { pathname } = window.location;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 120000, // reduce later to 30000
  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*",
    // "ngrok-skip-browser-warning": "69420",
  },
});

export const updateToken = (token) => {
  axiosInstance.defaults.headers.common.Authorization = !!!token
    ? `${token}`
    : `JWT ${token}`;
};

// !refresh token implementation hold for some time

let isRefreshing = false;

let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue?.length > 0 &&
    failedQueue?.forEach((prom) => {
      if (error) {
        prom?.reject(error);
      } else {
        prom?.resolve(token ?? "");
      }
    });

  failedQueue = [];
};

axiosInstance.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;
    console.log(error);
    if (error?.code === "ERR_NETWORK" || error?.status === 500) {
      toast.error("Netwrok Error");
    }
    if (
      !error.response?.status ||
      (!!!store?.getState()?.auth?.accessToken &&
        !!!Public_Paths?.includes(pathname))
    ) {
      history.push("auth/login");

      store.dispatch(logoutUser());
      return Promise.reject(error);
    }
    if (error.response?.status === 403) {
      toast.error("You are not admin");
      // throw error;
      return null;
    }

    if (
      error.response?.status === 401 &&
      !!!originalRequest._retry &&
      error.response?.config?.url !== "auth/refresh/token" &&
      !!!Public_Paths?.includes(pathname)
      // &&
      // !publicRoutes.includes(Router.router?.route ?? '')
    ) {
      if (!!!store?.getState()?.auth?.accessToken) {
        toast.error("Unauthorized !!!");
        store.dispatch(logoutUser());
      }

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            // Get the latest token from axios defaults or from the cookie.
            const latestToken =
              axiosInstance.defaults.headers.common.Authorization ||
              store?.getState()?.login?.token ||
              token;

            originalRequest.headers.Authorization = latestToken;
            return axiosInstance(originalRequest);
          })
          .catch((err) => {
            Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      // This need to do later
      // try {
      //   const { access_token, token_type } = await AuthApi.refreshToken()

      //   const token = `${token_type} ${access_token}`

      //   store.dispatch(authReducer.updateToken(token))
      //   updateToken(token)
      //   axiosInstance.defaults.headers.common.Authorization = `${token}`
      //   originalRequest.headers.Authorization = `${token}`

      //   const response = await axiosInstance(originalRequest)

      //   processQueue(null, token)
      //   // return axiosInstance(originalRequest)
      //   return response
      // } catch (err) {
      //   if (axios.isAxiosError(err)) {
      //     showErrorToast(err?.response?.data?.message)
      //   } else {
      //     showErrorToast('Session expired')
      //   }

      //   isRefreshing = processQueue(err, null)

      //   // return Promise.reject(err)
      // } finally {
      //   isRefreshing = false
      // }
      if (!!!Public_Paths?.includes(pathname)) {
        store.dispatch(authReducer.logout());
      }
      toast.error("Unauthorized !");
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

updateToken(null);

const responseBody = (response) => response.data;

export const requests = {
  get: (url, query_params = {}, option = {}) =>
    axiosInstance
      .get(url, {
        params: query_params,
        ...option,
      })
      .then(responseBody),
  postFormData: (url, formData, config = {}) => {
    const headers = { "Content-Type": "multipart/form-data" };
    return axiosInstance
      .post(url, formData, { ...config, headers })
      .then(responseBody);
  },
  post: (url, body, config = {}) =>
    axiosInstance.post(url, body, config).then(responseBody),
  put: (url, body) => axiosInstance.put(url, body).then(responseBody),
  delete: (url, config = {}) =>
    axiosInstance.delete(url, config).then(responseBody),
};

export const fetcher = async (args) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosInstance.get(url, { ...config });

  return res.data;
};
