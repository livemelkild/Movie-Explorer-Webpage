import { combineReducers } from "redux";
import searchReducer from "./searchReducer";


const RootReducer = combineReducers({
    searchReducer: searchReducer
  });
  
  export default RootReducer