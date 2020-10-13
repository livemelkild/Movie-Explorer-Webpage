import {Dispatch} from 'redux';
import {PokemonDispatchTypes, POKEMON_LOADING, POKEMON_SUCCESS, POKEMON_FAIL} from "./PokemonActionTypes";
import axios from "axios";

export const GetPokemon = (pokemon: string) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
  try {
    dispatch({
      type: POKEMON_LOADING,
    })

    // API request
    const res = await axios.get( `https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    dispatch({
      type: POKEMON_SUCCESS,
      payload: res.data //får jeg ut dataen her? ser den ikke i console
    })

  } catch(e) {
    dispatch({
      type: POKEMON_FAIL
    }
    )
  }
};
