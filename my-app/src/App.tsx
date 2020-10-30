import React, {useState, Component, useEffect} from 'react';
import SearchBar from "./Components/Search/SearchBar";
import SearchSort from "./Components/Search/SearchSort";
import "./App.css"

import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "./store";
import { searchInput } from "./Action/Actions";
import Pages from "./Components/Pages/Pages";
 

import SingleMovie from "./Components/Movie/SingleMovie"
import { isTemplateSpan } from "typescript";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
//import Startepage from "../public/therdpart/index";
import Nextpage from "./Components/Next_page/Next_page";
import Startpage from "./Components/Next_page/Start_page";
import Header from "./Components/Header/Header";

import "./materialize/css/materialize.css"
import "./materialize/css/materialize.min.css"

type importState = {
  items: {[key: string]: string}[];
  isLoaded: Boolean;
}

function App(){


  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/" component={Startpage} />
          <Route exact path="/next" component={Nextpage} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;