
import * as actionTypes from "./actionTypes"

export function addCharacter(character: ICharacter) {
  const action: CharacterAction = {
    type: actionTypes.ADD_CHARACTER,
    character,
  }

  return simulateHttpRequest(action)
}

export function removeCharacter(character: ICharacter) {
  const action: CharacterAction = {
    type: actionTypes.REMOVE_CHARACTER,
    character,
  }
  return simulateHttpRequest(action)
}

export function selectCharacter(character: ICharacter){
  return {
    type: actionTypes.SHOW_CHARACTER
  }
}

export function simulateHttpRequest(action: CharacterAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}

