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


//Instead, there is just a single store with a single root reducing function.
//As your app grows, instead of adding stores, you split the root reducer
//into smaller reducers independently operating on the different
//parts of the state tree. You can use a helper like combineReducers to
//combine them. This is similar to how there is just one root component in
// a React app, but it is composed out of many small components.
