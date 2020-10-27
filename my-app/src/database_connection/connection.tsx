import React, { Component, useEffect } from "react";
import { isTemplateSpan } from "typescript";
import { RootStore } from "../store";
import { useDispatch, useSelector } from "react-redux";
import searchReducer from "../Reducer/searchReducer";
import { selectModal } from "../Reducer/ModalReducer";


import { openModal, fetchPending, fetchSuccess, fetchError } from '../Action/Actions';
import { error } from "console";

interface ModalState {
  id: number,
  title: string,
  year: string,
  user_rating: string,
  img_url: string,
  gendre: string[]
}

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

    fetch("http://localhost:4000/api/movie")
      .then(res => res.json()) //format the resault to json
      .then(res => {
          this.setState({
              isLoaded: true,
              items: res.DATA, //getting the data ans saving it inside the app component
          })

      }).catch( (error) => {console.error(error)} );

  }


/*
getCharacter(charName: String): (String | Number)[]{
    var { isLoaded, items }  = this.state;
    const getCharacter = items.filter(item => 
    item.name === charName);
    const getChar = getCharacter.map(function (char){
      return char.name;
    });
    return getChar;
  }
  */
 /*
  dispatch = useDispatch();
  
  filterTitle() {
    console.log("hei");
    const filter = "A Rainy Day in New York";
    console.log("hei");
    fetch( `http://localhost:4000/api/movie/${filter}`)
    .then(res => res.json())
    .then((data: ModalState) => this.dispatch(fetchSuccess(data)))
    .catch(error => this.dispatch(fetchError))
    }
    
*/
  

  render() {

    var { isLoaded, items }  = this.state;
    if (!isLoaded){
      return (<div>Loading...</div>);
    } else{
      return (
        <div>
          <h1>Data has been loaded</h1>
          <h3>filter</h3>
          {/*<button onClick={ () => this.filterTitle() }> filter title</button>*/}
          {/*
          <div>
            { this.getCharacter("harry potter") }
          </div>
          */}
          {/*
          <ul>
            {items.map(item => (
                <li key={item.title}>
                      Ttile: {item.title} | House: {item.year} | Image: <img src={"item.image"} width="50" height="50"></img> 
                </li>
            ))};
          </ul>
            */}
            
        </div>
      )}
  }
}

export default Connection;