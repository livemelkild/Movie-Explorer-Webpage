
//action Types
export const ADD_CHARACTER = "ADD_CHARACTER"
export const REMOVE_CHARACTER = "REMOVE_CHARACTER"

//initialstate
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
  
  //reducer
  const addReducer = ( state: CharacterState = initialState, action: CharacterAction): CharacterState => {
    switch (action.type) {
  
      case ADD_CHARACTER:
        const newCharacter: ICharacter = {
          id: Math.random(), // her må vi hente inn en id
          title: action.character.title,
          body: action.character.body,
        }
        return {
          ...state, // hva betyr ...state?
          characters: state.characters.concat(newCharacter),
        }
  
      case REMOVE_CHARACTER:
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
  
  export default addReducer


  //action Creators

  export function addCharacter(character: ICharacter) {
    const action: CharacterAction = {
      type: ADD_CHARACTER,
      character,
    }
  
    return simulateHttpRequest(action)
  }
  
  export function removeCharacter(character: ICharacter) {
    const action: CharacterAction = {
      type: REMOVE_CHARACTER,
      character,
    }
    return simulateHttpRequest(action)
  }
  
  export function simulateHttpRequest(action: CharacterAction) {
    return (dispatch: DispatchType) => {
      setTimeout(() => {
        dispatch(action)
      }, 500)
    }
  }