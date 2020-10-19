import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import SearchBar from "./Components/Search/SearchBar";
import Header from "./Components/Header/Header";

function App() {


  return (
    <div className="App">
      <SearchBar />
      <Header />
    </div>
  );
}

export default App;
