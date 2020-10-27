


import Connection from "./database_connection/connection"
import React, {useState, Component} from 'react';
import SearchBar from "./Components/Search/SearchBar";
import Header from "./Components/Header/Header";

function App() {

  //Denne branchen, develop_ekstra, er laget for sikkerhetsskyld når jeg merget med develop


  return (
    <div className="App">
      <Header   text = "header"/>
      <SearchBar />
      <Connection/>
    </div>
  );
}

export default App;