
import {combineReducers} from "redux";
import reducer from "./reducer";
import addReducer from "./Ducks/addReducer";


const RootReducer = combineReducers({
  reducer: reducer,
  addReducer: addReducer
});

export default RootReducer
