import * as React from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"

type Props = {
  character: ICharacter
  removeCharacter: (character: ICharacter) => void
}

export const Character: React.FC<Props> = ({ character, removeCharacter }) => {
  const dispatch: Dispatch<any> = useDispatch()

  const deleteCharacter = React.useCallback(
    (character: ICharacter) => dispatch(removeCharacter(character)),
    [dispatch, removeCharacter]
  )

  return (
    <div className="Character">
      <div>
        <h1>{character.title}</h1>
        <p>{character.body}</p>
      </div>
      <button onClick={() => deleteCharacter(character)}>Delete</button>
    </div>
  )
}
