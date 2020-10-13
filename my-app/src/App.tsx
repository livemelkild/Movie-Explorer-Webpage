import React, {useState} from 'react';
//import Header from "./Components/Header/Header";
import {useSelector, useDispatch} from "react-redux";
import {RootStore} from "./Store";
//import the stuff for the onClick
import {GetPokemon} from "./Actions/PokemonActions"


function App() {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState("");
  const pokemonState = useSelector((state: RootStore) => state.pokemon);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setPokemonName(event.target.value);

  const handleSubmit = () => dispatch(GetPokemon(pokemonName));

  return (
    <div className="App">
      <input type="text" onChange={handleChange}/>
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
}

export default App;
