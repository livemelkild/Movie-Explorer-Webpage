import {createStore, applyMiddleware} from 'redux';
import RootReducer from "./reducer/RootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

//spørsmål
//hva er tunk? hvorfor bruke applyMiddleware ? 
const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

//tells your the type of the return type "ReturnType"
export type RootStore = ReturnType<typeof RootReducer>

export default Store
