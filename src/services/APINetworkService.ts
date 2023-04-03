import { ServiceNameType } from "@/config/proxy";
import { getBaseUrlByServiceName, getLocalStorage } from "@/utils/utils";
import axios, { AxiosInstance, AxiosRequestConfig, Method } from "axios";

interface Request {
  url: string;
  method?: Method;
  data?: any;
  serviceName?: ServiceNameType;
  header?: any;
  params?: any;
  forceBaseUrl?: string;
}

const configuredAxios = (serviceName: ServiceNameType): AxiosInstance => {
  const baseURL = getBaseUrlByServiceName(serviceName);
  const axiosRequestConfig: AxiosRequestConfig = {
    baseURL,
    headers: {
      "content-type": "application/json",
    },
  };
  return axios.create(axiosRequestConfig);
};

const request = async ({
  url = "",
  method = "post",
  data,
  serviceName = "NHANH_API",
  header = {},
  params,
}: Request) => {
  const instance = configuredAxios(serviceName);

  instance.interceptors.request.use(async (config) => {
    const prefix = "Bearer";
    let token = getLocalStorage("SESSION");
    config.headers = {
      ...config.headers,
      ...header,
      Authorization: token ? `${prefix} ${token}` : "",
    };

    return config;
  });

  instance.interceptors.response.use(
    (config) => config,
    async (error) => {
      // ****** handle refresh token here ⬇️  *********
      // const originalRequest = error.config;
      // if (error.response.status === 401) {
      //   const newToken = await refreshToken();
      //   originalRequest.headers['Authorization'] = newToken;
      //   return instance(originalRequest);
      // }
      return Promise.reject(error);
    }
  );

  let rs = {};

  await instance({ method, url, data, params })
    .then((response: any) => {
      rs = response?.data;
    })
    .catch((reason: any) => {
      rs = reason?.response?.data;
    });

  return rs;
};

export default request;
