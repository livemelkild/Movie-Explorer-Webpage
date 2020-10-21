import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import loadingReducer from"./LoadingReducer";


const RootReducer = combineReducers({
    searchReducer: searchReducer,
    loadingReducer: loadingReducer
  });
  
  export default RootReducer