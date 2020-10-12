import {Dispatch} from 'redux';
import {PokemonDispatchTypes, MOVIE_LOADING, MOVIE_SUCCESS, MOVIE_FAIL} from "./MovieActionTypes";
import axios from "axios";

export const GetMovie = (pokemon: string) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
  try {
    dispatch({
      type: MOVIE_LOADING,
    })

    //now we make the API request
    //add pokemon/${pokemon} to exept pokemon that comes from getMovie = (pokemon)
    const res = await axios.get( `https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    //if it goes good
    dispatch({
      type: MOVIE_SUCCESS,
      payload: res.data //får jeg ut dataen her? ser den ikke i console
    })

  } catch(e) {
    dispatch({
      type: MOVIE_FAIL
    }
    )

  }
};
