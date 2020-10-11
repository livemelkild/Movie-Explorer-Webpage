import React, {useEffect} from 'react';
import Header from "./Components/Header/Header";

interface Header {
  Header: string;
}

function App() {
  return (
    <div className="App">
      <Header title= "Movie World" />
    </div>
  );
}

export default App;
