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
