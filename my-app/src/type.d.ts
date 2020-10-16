interface ICharacter {
  id: number
  title: string
  body: string
  /*
  id: number
  name: string
  house: string
  */
}

type CharacterState = {
  characters: ICharacter[]

}

type CharacterAction = {
  type: string
  character: ICharacter
}

type DispatchType = (args: CharacterAction) => CharacterAction

type StringState = {
  
}

interface DefaultStateI {
  loading: boolean,
  pokemon?: PokemonType
}

const defaultState: DefaultStateI = {
  loading: false
};


type CharacterType = {

  _id: String;
  name: String;
  gender: String;
  house: String;
  dateOfBirth?: String;
  yearOfBirth?: Number;
  actor: String;
  image?: String;

}


