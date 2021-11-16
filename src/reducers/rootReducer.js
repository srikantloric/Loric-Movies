import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import movieReducer from "./movieReducer";

const prevState = {
  default: false,
};

const defaultReducer = (state = prevState, action) => {
  switch (action.type) {
    case "DEFAULT":
      break;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  defaultReducer: defaultReducer,
  homeReducer: homeReducer,
  movieReducer: movieReducer,
});

export default rootReducer;
