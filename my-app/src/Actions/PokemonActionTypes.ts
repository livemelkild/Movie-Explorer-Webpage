export const POKEMON_LOADING = "POKEMON_LOADING";
export const POKEMON_SUCCESS = "POKEMON_SUCCESS";
export const POKEMON_FAIL = "POKEMON_FAIL";

export type PokemonType = {
  abilities: PokemonAbility[],
  sprites: PokemonSprites,
  stats: PokemonStats[]

}

export type PokemonAbility = {
  ability: {
    name: string
    url: string
  }
}

//creates a new type when we see its a new object in the database
export type PokemonSprites = {
  front_default: string
}


export type PokemonStats = {
  base_stat: number,
  //stat is an object
  stat: {
    name: string
  }
}


export interface PokemonLoading {
  type: typeof POKEMON_LOADING
}

export interface PokemonFail {
  type: typeof POKEMON_FAIL
}

export interface PokemonSuccess {
  type: typeof POKEMON_SUCCESS
  //payload is gonna include some of the data from the database
  payload: PokemonType
}

//we now want to create a type that handels all of these
export type PokemonDispatchTypes = PokemonLoading | PokemonFail | PokemonSuccess;
