import { combineReducers } from 'redux';
import pokemonReducer from "./MovieReducer";

const RootReducer = combineReducers({
  pokemon: pokemonReducer
});

export default RootReducer;
