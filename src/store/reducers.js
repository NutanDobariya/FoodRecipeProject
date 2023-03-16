import { combineReducers } from "redux";
import location from "./location/reducer";

const rootReducer = combineReducers({
  location: location,
})

export default rootReducer;