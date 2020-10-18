import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import searchBar from "./Components/SearchBar";
import searchArtist from "./Actions/searchAction";
import {RootStore} from "./store";

function App() {

  const dispatch = useDispatch();
  const [Name, setName] = useState("");
  const nameState = useSelector((state: RootStore) => state.name);
  const handleChange = (event: React.ChangeEvent<HTMLAnchorElement) => setName(event.target.value);
  const handleSubmit = () => dispatch(searchArtist(search));

  return (
    <div className="App">
      <input type="text" onChange={handleChange}/>
      <button onClick = {handleSubmit}>search</button>
    </div>
  );
}

export default App;
