export type ServiceNameType =
  | "NHANH_API"
  | "NHANH_WEB"
  | "AUTH"
  | "ONLINE_GATEWAY";

export type EnvType = "LOCAL" | "STAGING" | "BETA" | "PRODUCTION";

type ProxyType = {
  [key in EnvType]: {
    [key in ServiceNameType]: string;
  };
};

type CommonType = {
  [key in EnvType]: string;
};

const proxy: ProxyType = {
  LOCAL: {
    AUTH: "https://sso-v2.ghn.dev/internal",
    NHANH_API: "https://dev-nhanh-api.ghn.dev",
    ONLINE_GATEWAY: "https://dev-online-gateway.ghn.vn",
    NHANH_WEB: "https://nhanh.ghn.dev",
  },
  STAGING: {
    AUTH: "https://sso-v2.ghn.dev/internal",
    NHANH_API: "https://dev-nhanh-api.ghn.dev",
    ONLINE_GATEWAY: "https://dev-online-gateway.ghn.vn",
    NHANH_WEB: "https://nhanh.ghn.dev",
  },
  BETA: {
    AUTH: "https://sso-v2.ghn.dev/internal",
    NHANH_API: "https://dev-nhanh-api.ghn.dev",
    ONLINE_GATEWAY: "https://dev-online-gateway.ghn.vn",
    NHANH_WEB: "https://nhanh.ghn.dev",
  },
  PRODUCTION: {
    AUTH: "https://sso-v2.ghn.vn/internal",
    NHANH_API: "https://fe-nhanh-api.ghn.vn",
    ONLINE_GATEWAY: "https://online-gateway.ghn.vn",
    NHANH_WEB: "https://nhanh.ghn.vn",
  },
};

export const appKey: CommonType = {
  LOCAL: "6e3132ca-8833-4db0-8a7a-3447d7a09d63",
  STAGING: "6e3132ca-8833-4db0-8a7a-3447d7a09d63",
  BETA: "6e3132ca-8833-4db0-8a7a-3447d7a09d63",
  PRODUCTION: "efb07642-c37b-4318-8a6f-a221f64770a5",
};

export const myHost: CommonType = {
  LOCAL: "http://localhost:3000",
  STAGING: "https://nhanh.ghn.dev",
  BETA: "https://nhanh.ghn.vn",
  PRODUCTION: "https://nhanh.ghn.vn",
};

export default proxy;
