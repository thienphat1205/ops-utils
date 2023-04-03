import { Dispatch } from "redux";
import { CommonTypes } from "../actionTypes";

export const setDataCommonReducer =
  (payload: object) => async (dispatch: Dispatch<any>) => {
    dispatch({
      type: CommonTypes.SET_COMMON_REDUCER,
      payload,
    });
  };
