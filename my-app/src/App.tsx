import Connection from "./database_connection/connection"
import React, {useState, Component} from 'react';
import SearchBar from "./Components/Search/SearchBar";
import SearchSort from "./Components/Search/SearchSort";
import Header from "./Components/Header/Header";
import Movie from "./Components/Movie/Movie";


import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "./store";
import { searchInput } from "./Action/Actions";


function App() {

    const searchState = useSelector((state: RootStore) => state.searchReducer.search);
    const [search, setSearch] = useState(searchState);

    searchInput(search)
    

  return (
    <div className="App">
      <Header   text = "header"/>
      <SearchBar />
      <SearchSort />
      <Movie />
      <Connection />
    </div>
  );
}

export default App;