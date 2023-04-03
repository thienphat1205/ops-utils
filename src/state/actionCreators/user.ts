import {
  getAllowedAppListAPI,
  getCurrentUserAPI,
  logout,
  PayloadActionVerifyType,
  verifyAuthorCodeAPI,
} from "@/services/auth";
import { renderUiAppList } from "@/utils/mapping";
import { dialog, getEnv, setLocalStorage } from "@/utils/utils";
import { Dispatch } from "redux";
import { IUserAction } from "../actionsInterface/user";
import { UserTypes } from "../actionTypes";

export const setDataUserReducer =
  (payload: object) => async (dispatch: Dispatch<IUserAction>) => {
    dispatch({
      type: UserTypes.SET_DATA_USER_REDUCER,
      payload,
    });
  };

export const verifyAuthorCode =
  (payload: PayloadActionVerifyType, functionNavigate: () => void) =>
  async (dispatch: Dispatch<IUserAction>) => {
    try {
      dispatch({
        type: UserTypes.USER_LOADING,
        payload: { loadingVerify: true },
      });
      const response: any = await verifyAuthorCodeAPI(payload);
      dispatch({
        type: UserTypes.USER_LOADING,
        payload: { loadingVerify: false },
      });
      const { status, data = {} } = response;
      if (status !== "OK") throw response;
      const { accessToken, iamToken } = data;
      setLocalStorage("SESSION", iamToken);
      setLocalStorage("ACCESS_TOKEN", accessToken);
      functionNavigate();
    } catch (errors) {
      logout();
    }
  };

export const getCurrentUser = () => async (dispatch: Dispatch<any>) => {
  try {
    dispatch({
      type: UserTypes.USER_LOADING,
      payload: { loadingGetCurrentUser: true },
    });
    const response: any = await getCurrentUserAPI();
    dispatch({
      type: UserTypes.USER_LOADING,
      payload: { loadingGetCurrentUser: false },
    });
    const { status, data = {} } = response;
    if (status !== "OK") throw response;
    dispatch({
      type: UserTypes.GET_CURRENT_USER,
      payload: data,
    });
  } catch (errors) {
    logout();
  }
};

export const getAllowedAppList = () => async (dispatch: Dispatch<any>) => {
  const currentApp = {
    key: "lastmile",
    name: "Lastmile",
  };
  const ENV = getEnv();
  try {
    dispatch({
      type: UserTypes.USER_LOADING,
      payload: { loading: true },
    });
    const response: any = await getAllowedAppListAPI();
    dispatch({
      type: UserTypes.USER_LOADING,
      payload: { loading: false },
    });
    const { status, data = {} } = response;
    if (status !== "OK") throw response;
    const appList = data?.allowedApps || [];
    dispatch({
      type: UserTypes.GET_ALLOWED_APP_LIST,
      payload: appList,
    });
    const permissionAccessPage = appList.find(
      (item: string) => item === currentApp.key
    );
    if (!permissionAccessPage) {
      dispatch({
        type: UserTypes.USER_LOADING,
        payload: { loading: true },
      });
      const mapAppListToObject = appList
        .map((item: string) => {
          const findItem = renderUiAppList.find(
            (itemApp) => itemApp.key === item
          );
          return findItem;
        })
        .sort((a: any, b: any) => a?.indexApp - b?.indexApp);
      alert(`Bạn không có quyền truy cập ${currentApp.name}`);
      const [firstApp] = mapAppListToObject;
      const link = firstApp ? firstApp?.link[ENV] : "";
      if (link) {
        window.location.href = link;
      } else {
        logout();
      }
    }
  } catch (errors) {
    dialog(errors);
  }
};
