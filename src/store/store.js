import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
const middleware = [thunkMiddleware];
//const composeEnhancers =(window as any).REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
let store;
store = createStore(
  rootReducer,
  {},
  //composeEnhancers(applyMiddleware(...middleware))
  applyMiddleware(...middleware)
);
export { store };