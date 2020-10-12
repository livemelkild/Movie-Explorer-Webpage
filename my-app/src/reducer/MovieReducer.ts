import {
  PokemonDispatchTypes,
  PokemonType,
  MOVIE_LOADING,
  MOVIE_SUCCESS,
  MOVIE_FAIL}
  from "../Actions/MovieActionTypes";

interface DefaultStateI {
  loading: boolean,
  //uses ? to make it optional
  pokemon?: PokemonType

};

const defaultState: DefaultStateI =  {
  loading: false
};
// endre any type senere
const pokemonReducer = (state: DefaultStateI = defaultState , action: PokemonDispatchTypes): DefaultStateI => {
  //here everything is handeled by our reducer
  switch (action.type) {
    case MOVIE_FAIL:
    return {
      loading: false
    }
    case MOVIE_LOADING:
    return {
      loading: true
    }
    case MOVIE_SUCCESS:
    return {
      loading: false,
      pokemon: action.payload
    }
    default:
      return state
  }
};

export default pokemonReducer;
