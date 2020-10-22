


import Connection from "./database_connection/connection"
import React, {useState, Component} from 'react';
import SearchBar from "./Components/Search/SearchBar";
import Header from "./Components/Header/Header";
import Searchstate from "./Components/Content";

import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
// hvorfor går det ikke å importere filene?
import {searchArtist} from "./Action/Actions";
import { RootStore } from "./store";
import { ExecFileOptionsWithStringEncoding } from "child_process";
import { isPropertySignature } from "typescript";

function App() {
  const dispatch: Dispatch<any> = useDispatch();

  const searchState = useSelector((state: RootStore) => state.searchReducer.search);
  const [search, setSearch] = useState(searchState);


  return (
    <div className="App">
      <Header   text = "header"/>
      <SearchBar />
      <Searchstate text = {searchState}/>
      <Connection/>
    </div>
  );
}

export default App;