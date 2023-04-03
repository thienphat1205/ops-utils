import { CommonTypes } from "../actionTypes";

interface ICommonState {}

interface IAction {
  type: string;
  payload?: {};
}

const initialState = {};

const commonReducer = (
  state: ICommonState = initialState,
  action: IAction
): ICommonState => {
  switch (action.type) {
    case CommonTypes.SET_COMMON_REDUCER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default commonReducer;
