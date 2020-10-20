import React, { Component } from "react";
import Connection from "./database_connection/connection"

class App extends Component {


  render() {
      return (
        <div>
          <Connection/>
        </div>
      )}
  }

export default App;