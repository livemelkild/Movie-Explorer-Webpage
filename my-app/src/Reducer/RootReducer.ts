import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import loadingReducer from"./LoadingReducer";
import fetchDataReducer from "./FetchDataReducer";
import sortReducer from "./SortReducer";


const RootReducer = combineReducers({
    searchReducer: searchReducer,
    loadingReducer: loadingReducer,
    fetchDataReducer: fetchDataReducer,
    sortReducer: sortReducer
  });
  
  export default RootReducer