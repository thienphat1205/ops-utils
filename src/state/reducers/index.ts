import { combineReducers } from "redux";
import userReducer from "./userReducer";
import commonReducer from "./commonReducer";

const rootReducer = combineReducers({
  user: userReducer,
  common: commonReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
