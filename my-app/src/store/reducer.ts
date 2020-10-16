import * as actionTypes from "./actionTypes"

//some characters to show when the page loads

const initialState: CharacterState = {
  characters: [
    {
      id: 1,
      title: "harry potter",
      body: "griffendor"
    },
    {
      id: 2,
      title: "Draco Malfoy",
      body:" slideren"
    },
  ],
}

const reducer = ( state: CharacterState = initialState, action: CharacterAction): CharacterState => {
  switch (action.type) {

    
    case actionTypes.ADD_CHARACTER:
      const newCharacter: ICharacter = {
        id: Math.random(), // her må vi hente inn en id
        title: action.character.title,
        body: action.character.body,
      }
      return {
        ...state,
        characters: state.characters.concat(newCharacter),
      }

    case actionTypes.REMOVE_CHARACTER:
      const updatedCharacters: ICharacter[] = state.characters.filter(
        character => character.id !== action.character.id
      )
      return {
        ...state,
        characters: updatedCharacters,
      }

  }
  return state
}

export default reducer
