import Connection from "./database_connection/connection"
import React, {useState, Component} from 'react';
import SearchBar from "./Components/Search/SearchBar";
import SearchSort from "./Components/Search/SearchSort";
import Header from "./Components/Header/Header";

import PrintText from "./Components/PrintText";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "./store";


function App() {

    const searchState = useSelector((state: RootStore) => state.searchReducer.search);
    const [search, setSearch] = useState(searchState);
    

  return (
    <div className="App">
      <Header   text = "header"/>
      <SearchBar />
      <SearchSort />
      <PrintText text = {search} />
      <Connection />
    </div>
  );
}

export default App;