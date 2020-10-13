import { combineReducers } from 'redux';
import pokemonReducer from "./PokemonReducer";

const RootReducer = combineReducers({
  Search_character: characterReducer

});

export default RootReducer;
