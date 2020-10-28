import Connection from "./database_connection/connection"
import React, {useState, Component} from 'react';
import SearchBar from "./Components/Search/SearchBar";
import SearchSort from "./Components/Search/SearchSort";
import Header from "./Components/Header/Header";


import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "./store";
import { searchInput } from "./Action/Actions";
import Pages from "./Components/Pages/Pages";


function App() {

    const searchState = useSelector((state: RootStore) => state.searchReducer.search);
    const [search, setSearch] = useState(searchState);

    searchInput(search)
    

  return (
    <div className="App">
      <Header   text = "header"/>
      <SearchBar />
      <SearchSort />
      <Connection />
      <Pages />
    </div>
  );
}

export default App;