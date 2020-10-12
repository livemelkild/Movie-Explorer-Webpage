import React, {useState} from 'react';
//import Header from "./Components/Header/Header";
import {useSelector, useDispatch} from "react-redux";
import {RootStore} from "./Store";
//import the stuff for the onClick
import {GetMovie} from "./Actions/MovieActions"


function App() {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState("");
  const pokemonState = useSelector((state: RootStore) => state.pokemon);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setPokemonName(event.target.value);

  const handleSubmit = () => dispatch(GetMovie(pokemonName));

  console.log("pokemonState:", pokemonState);

  return (
    <div className="App">
      <input type="text" onChange={handleChange}/>
      <button onClick={handleSubmit}>Search</button>
      {pokemonState.pokemon && (
        //show the data
        <div>
          <img src={pokemonState.pokemon.sprites.front_default} alt=""/>
          {pokemonState.pokemon.abilities.map(ability => {
            return <p>{ability.ability.name}</p>
          })}
        </div>
      )}
    </div>
  );
}

export default App;
