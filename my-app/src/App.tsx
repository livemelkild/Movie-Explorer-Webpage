
/*
import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
*/

import * as React from "react"
/*
import { useSelector, shallowEqual, useDispatch } from "react-redux"
//import "./styles.css"

import { Character } from "./components/character"
import { AddCharacter } from "./components/AddCharacter"
import { addCharacter, removeCharacter } from "./store/actionCreators"
import { Dispatch } from "redux"

const App: React.FC = () => {
  const characters: readonly ICharacter[] = useSelector(
    (state: CharacterState) => state.characters,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const saveCharacter = React.useCallback(
    (character: ICharacter) => dispatch(addCharacter(character)),
    [dispatch]
  )

  return (
    <main>
      <h1>My Characters</h1>
      <AddCharacter saveCharacter={saveCharacter} />
      {characters.map((character: ICharacter) => (
        <Character
          key={character.id}
          character={character}
          removeCharacter={removeCharacter}
        />
      ))}
    </main>
  )
}
*/
import Searchbar from "./components/searchBar"
const App: React.FC = () => {

  return(
    <Searchbar />
  )

}

export default App
