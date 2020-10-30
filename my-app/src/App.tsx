import React from 'react';
import "./App.css"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
//import Startepage from "../public/therdpart/index";
import Nextpage from "./Components/Next_page/Next_page";
import Startpage from "./Components/Next_page/Start_page";
import "./materialize/css/materialize.css"
import "./materialize/css/materialize.min.css"

type importState = {
  items: {[key: string]: string}[];
  isLoaded: Boolean;
}

function App(){


  return (
    <div  className="card-panel blue-grey darken-1">
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