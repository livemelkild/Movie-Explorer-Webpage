import React, {useState} from 'react';
import SearchBar from "./Components/Search/SearchBar";
import Header from "./Components/Header/Header";

function App() {


  return (
    <div className="App">
      <Header   text = "header"/>
      <SearchBar />
    </div>
  );
}

export default App;
