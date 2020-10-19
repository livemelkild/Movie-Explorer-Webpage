import {createStore, applyMiddleware} from "redux";
import RootReducer from "./Reducer/RootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

//trenger kanskje ikke thunk
const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootStore = ReturnType<typeof RootReducer>

export default Store





