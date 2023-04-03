import proxy, { appKey, myHost } from "@/config/proxy";
import { getEnv } from "@/utils/utils";
import APINetworkService from "./APINetworkService";

const ENV = getEnv();
const { AUTH } = proxy[ENV];
const AUTH_APP_KEY = appKey[ENV];
const MY_HOST = myHost[ENV];

export type PayloadActionVerifyType = {
  authorCode: string;
};

export const logout = () => {
  localStorage.clear();
  const urlLogout = `${AUTH}/logout/?app_key=${AUTH_APP_KEY}&redirect_uri=${MY_HOST}/sso-login-v2?authorcode=`;
  window.location.href = urlLogout;
};

export const login = () => {
  const urlLogout = `${AUTH}/login/?app_key=${AUTH_APP_KEY}&redirect_uri=${MY_HOST}/sso-login-v2?authorcode=`;
  window.location.href = urlLogout;
};

export const verifyAuthorCodeAPI = async (data: PayloadActionVerifyType) => {
  const rs = await APINetworkService({
    url: "/api/lastmile/auth/login-sso",
    data,
  });
  return rs;
};

export const getCurrentUserAPI = async () => {
  const rs = await APINetworkService({
    url: "/api/lastmile/user/my-profile",
    data: {},
  });
  return rs;
};

export const getAllowedAppListAPI = async () => {
  const rs = await APINetworkService({
    url: "/api/lastmile/user/get-allowed-app-list",
    data: {},
  });
  return rs;
};

export const getHubListAPI = async () => {
  const rs = await APINetworkService({
    url: "/api/hms/metadata/get-locations",
    data: { query: { scopeCode: "GHN_HUB" }, limit: 0, offset: 0 },
  });
  return rs;
};
