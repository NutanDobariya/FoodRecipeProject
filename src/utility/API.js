
import apiPath from '../constants/apiconstants';
import axios, { AxiosRequestConfig } from "axios";

axios.interceptors.request.use(async (config) => {
  config.baseURL = apiPath.BASEURL;
    config.headers = {
      common: {
        "Access-Control-Allow-Origin": apiPath.BASEURL,
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest",
        'Content-Type': 'application/json', 
      },
    };
  return config;
});

axios.interceptors.response.use( 
  (response) => response,
  (error) => {
    if (error?.message === "Network Error") {
      error.response = {
        status: 500,
        data: {
          message:'EROOROORORORORORORORO.....',
         },
      };
    }
    if (error.response?.status === 401) {
     // manageExpiredToken()
    }
    if (error.response?.status === 500) {
      if (!error.response.data || !error.response.data.message) {
        error.response = {
          status: 500,
          data: {
            message: "Something went wrong",
          },
        };
      }
    }
    return Promise.reject(error);
  }
);

export default axios;







