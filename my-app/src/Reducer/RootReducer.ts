import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import loadingReducer from"./LoadingReducer";
import fetchDataReducer from "./FetchDataReducer";
import sortReducer from "./SortReducer";
import ModalReducer from "./ModalReducer";
import pageReducer from "./PageReducer";


const RootReducer = combineReducers({
    searchReducer: searchReducer,
    loadingReducer: loadingReducer,
    fetchDataReducer: fetchDataReducer,
    sortReducer: sortReducer,
    ModalReducer: ModalReducer,
    pageReducer: pageReducer
  });
  
  export default RootReducer