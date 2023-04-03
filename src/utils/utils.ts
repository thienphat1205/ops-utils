import proxy, { EnvType, ServiceNameType } from "@/config/proxy";
import { notification } from "antd";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

enum Environment {
  LOCAL = "LOCAL",
  STAGING = "STAGING",
  BETA = "BETA",
  PRODUCTION = "PRODUCTION",
}

export const setLocalStorage = (name: string, value: any): void =>
  localStorage.setItem(name, value);
export const getLocalStorage = (name: string): string => {
  return localStorage.getItem(name) || "";
};

export const dialog = (error: any) => {
  const { message = "Đã có lỗi xảy ra" } = error;
  notification.error({
    message,
  });
};

export const setPreviousUrl = (data: any) => {
  return localStorage.setItem("prevUrl", JSON.stringify(data));
};

export const getPreviousURL = () => {
  const prevUrlString: any = localStorage.getItem("prevUrl");
  let objPrevUrl;
  try {
    objPrevUrl = JSON.parse(prevUrlString) || {};
  } catch (e) {
    objPrevUrl = {};
  }
  return objPrevUrl;
};

export const getKeyValue =
  <T extends object, U extends keyof T>(obj: T) =>
  (key: U) =>
    obj[key];

export const getEnv = (): EnvType => {
  const { REACT_APP_ENV = "" } = process.env;
  switch (REACT_APP_ENV) {
    case Environment.LOCAL:
      return Environment.LOCAL;
    case Environment.STAGING:
      return Environment.STAGING;
    case Environment.BETA:
      return Environment.BETA;
    case Environment.PRODUCTION:
      return Environment.PRODUCTION;
    default:
      return Environment.STAGING;
  }
};

export const genPagination = (
  page: number = 0,
  size: number = 10
): { offset: number; limit: number } => {
  return {
    offset: page * size,
    limit: size * 1,
  };
};
export const formatListRoutes = (list: any) => {
  let newList: any[] = [];
  list.forEach((item: any) => {
    const { isParent, subRoutes = [] } = item;
    if (!isParent) {
      newList = [...newList, item];
    } else {
      newList = [...newList, ...subRoutes];
    }
  });
  return newList;
};

export const exportExcel = (list: any, fileName: any) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  const ws = XLSX.utils.json_to_sheet(list);
  const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  const data = new Blob([excelBuffer], { type: fileType });
  FileSaver.saveAs(data, fileName + fileExtension);
};

export const getParamUrl = (name: string): string => {
  let search = window.location.search;
  let urlParams = new URLSearchParams(search);
  let param = urlParams.get(name) || "";
  return param;
};

export const formatObject = (obj: any) => {
  Object.keys(obj).forEach((key) => (!obj[key] ? delete obj[key] : {}));
  return obj;
};

export const checkPermission = (
  permissions: Array<string> = [],
  permission: any = ""
) => {
  if (!permission) return true;
  return permissions.indexOf(permission) > -1;
};

export const getBaseUrlByServiceName = (
  serviceName: ServiceNameType
): string => {
  const ENV = getEnv();
  const proxyByEnv = proxy[ENV];
  const baseURL = getKeyValue(proxyByEnv)(serviceName);
  return baseURL;
};

export const formatTime = "DD/MM/YYYY - HH:mm:ss";
