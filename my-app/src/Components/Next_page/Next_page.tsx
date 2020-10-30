import React, {useState, Component, useEffect} from 'react';
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store";
import { searchInput } from "../../Action/Actions";
import Pages from "../Pages/Pages";
import SingleMovie from "../Movie/SingleMovie"
import SearchBar from "../Search/SearchBar";
import Header from "../Header/Header";
import 'materialize-css/dist/css/materialize.min.css'

 

function NextPage() {

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

    return(
        <div>
        <Header   text = "Movie Explorer"/>
        <SearchBar />
        <div className="container">
        {items?.map((item:any) => (
          <div key={item._id}>
            <SingleMovie 
                id={item._id}
                title={item.title}
                year={item.year}
                users_rating={item.user_rating}
                img_url={item.img_url}
                genre={item.genre}
                upvote={item.upvote}
                />
              </div>
        ))}
        
        </div>
        
    <Pages />
    </div>
    )
}


export default NextPage;