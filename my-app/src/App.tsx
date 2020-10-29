import Connection from "./database_connection/connection"
import React, {useState, Component, useEffect} from 'react';
import SearchBar from "./Components/Search/SearchBar";
import SearchSort from "./Components/Search/SearchSort";
import Header from "./Components/Header/Header";
import "./App.css"

import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "./store";
import { searchInput } from "./Action/Actions";
import Pages from "./Components/Pages/Pages";


import SingleMovie from "./Components/Movie/SingleMovie"
import { isTemplateSpan } from "typescript";


type importState = {
  items: {[key: string]: string}[];
  isLoaded: Boolean;
}

const App = () => {

    const searchState = useSelector((state: RootStore) => state.searchReducer.search);
    const [search, setSearch] = useState(searchState);

    searchInput(search)

    const page = useSelector((state: RootStore) => state.pageReducer.page);
    const filterSingle = useSelector((state: RootStore) => state.filterReducer.filterby);
    const filter = [filterSingle]

    const order = useSelector((state: RootStore) => state.sortReducer.order);



    const [items, setItems] = useState();
    
    useEffect(() => {
    fetch(`http://localhost:4000/api/movie?page=${page}&search=${searchState}&filter=${filter}&order=${order}`)
      .then(res => res.json()) //format the resault to json
      .then(res => {
          console.log(res)
          console.log(page)
          setItems(res.DATA)
          });}, [page, searchState, filterSingle, order]);



/*
          useEffect(() => {
            fetch(`http://localhost:4000/api/search/:title?filter=${filter}`)
              .then(res => res.json()) //format the resault to json
              .then(res => {
                  console.log(res)
                  console.log(page)
                  setItems(res.DATA)
                  });}, [filter]);

    useEffect(() => {
    fetch(`http://localhost:4000/api/movie/:title=${search}`)
      .then(res => res.json()) //format the resault to json
      .then(res => {
          console.log(res)
          console.log(page)
          setItems(res.DATA)
          });}, [search]);

*/
  return (
    <div className="App">
      <Header   text = "header"/>
      <SearchBar />
        
        {items?.map((item:any) => (
          <div key={item._id}>
            <SingleMovie 
                title={item.title}
                year={item.year}
                users_rating={item.user_rating}
                img_url={item.img_url}
                genre={item.genre}
                />
              </div>
        ))}
    
      <Pages />
    </div>
  );
}

export default App;