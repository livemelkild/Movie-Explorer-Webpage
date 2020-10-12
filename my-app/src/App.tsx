import React, {useState} from 'react';
//import Header from "./Components/Header/Header";
import {useSelector, useDispatch} from "react-redux";
import {RootStore} from "./Store";
//import the stuff for the onClick
import {GetMovie} from "./Actions/MovieActions"


function App() {
  const dispatch = useDispatch();
  const [movieName, setMovieName] = useState("");
  const movieState = useSelector((state: RootStore) => state.movie);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setMovieName(event.target.value);

  const handleSubmit = () => dispatch(GetMovie(movieName));

  console.log("pokemonState:", movieState);

  return (
    <div className="App">
      <input type="text" onChange={handleChange}/>
      <button onClick={handleSubmit}>Search</button>
      {movieState.movie && (
        //show the data
        <div>
          <img src={movieState.movie.sprites.front_default} alt=""/>
          {movieState.movie.abilities.map(ability => {
            return <p>{ability.ability.name}</p>
          })}
        </div>
      )}
    </div>
  );
}

export default App;
