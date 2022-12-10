import { combineReducers } from "redux";
import commentsReducer from "./reducers";

const rootReducer = combineReducers({
  commentsReducer
});

export default rootReducer;
