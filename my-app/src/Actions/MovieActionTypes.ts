//The different types
export const MOVIE_LOADING = "MOVIE_LOADING";
export const MOVIE_SUCCESS = "MOVIE_SUCCESS";
export const MOVIE_FAIL = "MOVIE_FAIL";

export type PokemonType = {
  // an array of PokemonAbility
  abilities: PokemonAbility[],
  sprites: PokemonSprites,
  stats: PokemonStats[]

}
//creates a type for the information we take out of the database
//uses the ex from the video, to get the memmo
//here we get what we are intrested in
export type PokemonAbility = {
  ability: {
    name: string
    url: string
  }
}

//creates a new type when we see its a new object in the database
export type PokemonSprites = {
  //only wanna get out the front_default
  //this shows the image
  front_default: string
}

export type PokemonStats= {
  base_stat: number,
  //stat is an object
  stat: {
    name: string
  }
}

export interface MovieLoading {
  //says typeof because MOVIE_LOADING is a string value and we want the type
  type: typeof MOVIE_LOADING
}

export interface MovieFail {
  //says typeof because MOVIE_LOADING is a string value and we want the type
  type: typeof MOVIE_FAIL
}

export interface MovieSuccess {
  //says typeof because MOVIE_LOADING is a string value and we want the type
  type: typeof MOVIE_SUCCESS
  //payload is gonna include some of the data from the database
  payload: PokemonType
}

//we now want to create a type that handels all of these
//we export all the types bc we need to use them in the reducer.
export type PokemonDispatchTypes = MovieLoading | MovieFail | MovieSuccess;
