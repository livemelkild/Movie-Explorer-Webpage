import React, { Component, useEffect } from "react";
import { isTemplateSpan } from "typescript";
import { RootStore } from "../store";
import { useDispatch, useSelector } from "react-redux";
import searchReducer from "../Reducer/searchReducer";
import { selectModal } from "../Reducer/ModalReducer";
import { selectPage } from "../Reducer/PageReducer";
import SingleMovie from "../Components/Movie/SingleMovie"
import "./connection.css"

import { openModal, fetchPending, fetchSuccess, fetchError } from '../Action/Actions';
import { error } from "console";

interface ModalState {
  id: number,
  title: string,
  year: string,
  user_rating: string,
  img_url: string,
  genre: string[]
}

type importState = {
  items: {[key: string]: string}[];
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
    const page = (state: RootStore) => ({
      pageState: state.pageReducer.page
    });
    fetch(`http://localhost:4000/api/movie?page=${page}`)
      .then(res => res.json()) //format the resault to json
      .then(res => {
          console.log(res)
          this.setState({
              isLoaded: true,
              items: res.DATA, //getting the data ans saving it inside the app component
          })

      }).catch( (error) => {console.error(error)} )
  }

  changeState() {
    const filter = "";
    const page = (state: RootStore) => ({
      pageState: state.pageReducer.page
    });
    const limit = 5;
    const order = "";
    const sort = "";
    fetch(`http://localhost:4000/api/movie?filter=${filter}&page=${page}&limit=${limit}&order=${order}&sort=${sort}`)
    .then(res => res.json()) //format the resault to json
    .then(res => {
        console.log(res)
        this.setState({
            isLoaded: true,
            items: res.DATA, //getting the data ans saving it inside the app component
        })

    }).catch( (error) => {console.error(error)} );
  }


  render() {
    

    var { isLoaded, items }  = this.state;
    if (!isLoaded){
      return (<div>Loading...</div>);
    } else{
      return (
        <div>
          {/*<button onClick={ () => this.filterTitle() }> filter title</button>*/}
          <div>
          <div>

            {items?.map(item => (
              <div  key={item._id}>
              <SingleMovie
                    title={item.title}
                    year={item.year}
                    users_rating={item.user_rating}
                    img_url={item.img_url}
                    genre={item.genre}
                    />
              </div>

            ))}

          </div>

              {/*
              <button onClick = { () => this.changeState()}>prev</button>
              <button onClick = { () => this.changeState()}>next</button>
              */}
          </div>
            
        </div>
      )}
  }
}

export default Connection;