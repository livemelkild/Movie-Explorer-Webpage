import { combineReducers } from 'redux';
import movieReducer from "./MovieReducer";

const RootReducer = combineReducers({
  movie: movieReducer
});

export default RootReducer;
