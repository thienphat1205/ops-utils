import { UserTypes } from "../actionTypes";

interface IUserState {
  loading: {
    loading?: boolean;
    loadingVerify?: boolean;
    loadingGetCurrentUser?: boolean;
  };

  currentUser: {
    userInfo?: {
      roles?: { roleCode: string; name: string }[];
      warehouseIds?: number[];
      ssoId?: string;
      title?: string;
      profile?: {
        fullname?: string;
      };
      isSupperUser?: boolean;
    };
  };
  permissions: string[] | undefined;

  allowedAppList: Array<string>;
}

interface IAction {
  type: string;
  payload?: any;
}

const initialState = {
  loading: {},
  currentUser: {},
  allowedAppList: [],
  permissions: undefined,
};

const userReducer = (
  state: IUserState = initialState,
  action: IAction
): IUserState => {
  switch (action.type) {
    case UserTypes.SET_DATA_USER_REDUCER:
      return {
        ...state,
        ...action.payload,
      };
    case UserTypes.GET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case UserTypes.GET_ALLOWED_APP_LIST:
      return {
        ...state,
        allowedAppList: action.payload,
      };
    case UserTypes.USER_LOADING:
      return {
        ...state,
        loading: { ...state.loading, ...action.payload },
      };
    default:
      return state;
  }
};

export default userReducer;
