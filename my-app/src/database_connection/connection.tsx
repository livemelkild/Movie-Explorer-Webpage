import React, { Component } from "react";
import { isTemplateSpan } from "typescript";
import { RootStore } from "../store";
import { useDispatch, useSelector } from "react-redux";
import searchReducer from "../Reducer/searchReducer";
import SearchBar from "../Components/Search/SearchBar";




type importState = {
  items: {[key: string]: string | number}[];
  isLoaded: Boolean;
}


//const searchState = useSelector((state: RootStore) => state.searchReducer.search);

class Connection extends Component<{}, importState> {
  

  constructor(props: importState){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
//when an instance of a component is being created and inserted into the DOM
//componentDidMount renders after the render methode, and then renders the render() methode again
  componentDidMount(){

    fetch("http://localhost:8000/api/character")
      .then(res => res.json()) //format the resault to json
      .then(res => {
          this.setState({
              isLoaded: true,
              items: res.DATA, //getting the data ans saving it inside the app component
          })

      }).catch( (error) => {console.error(error)} );

  }

//skal man filtrere i backend eller frontend
getCharacter(charName: String): (String | Number)[]{
    var { isLoaded, items }  = this.state;
    const getCharacter = items.filter(item => 
    item.name === charName);
    const getChar = getCharacter.map(function (char){
      return char.name;
    });
    return getChar;
  }


  render() {

    var { isLoaded, items }  = this.state;
    if (!isLoaded){
      return (<div>Loading...</div>);
    } else{
      return (
        <div>
          <h1>Data has been loaded</h1>
          <div>
            { this.getCharacter("harry potter") }
          </div>
          <ul>
            {items.map(item => (
                <li key={item.name}>
                      Name: {item.name} | House: {item.house} | Image: <img src={"item.image"} width="50" height="50"></img> {/*hvorfor får jeg ikke hentet ut bildene*/}
                </li>
            ))};
          </ul>
            
        </div>
      )}
  }
}

export default Connection;