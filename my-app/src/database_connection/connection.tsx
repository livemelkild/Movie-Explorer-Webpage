import React, { Component } from "react";
import { isTemplateSpan } from "typescript";

type importState = {
  items: {[key: string]: string | number}[];
  isLoaded: Boolean;
}

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

    fetch("http://localhost:4000/api/character")
      .then(res => res.json()) //format the resault to json
      .then(res => {
          this.setState({
              isLoaded: true,
              items: res.DATA, //getting the data ans saving it inside the app component
          })

      }).catch( (error) => {console.error(error)} );

  }


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
            { this.getCharacter("Harry Potter") }
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