import { Dispatch } from "redux";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// hvorfor går det ikke å importere filene?
import {searchInput} from "../../Action/Actions";
import { RootStore } from "../../store";
import SearchSort from "./SearchSort";


import './SearchBar.css';

// tar inn search som er inputet brukeren skriver inn
export const SearchBar = () => {



    const dispatch: Dispatch<any> = useDispatch();
      // Annen mulig løsning: 
      const searchState = useSelector((state: RootStore) => state.searchReducer.search);
      const [search, setSearch] = useState(searchState);
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value);

      const handleSubmit = () => dispatch(searchInput(search));



    return (
        <div className= "total">

        
            <button onClick = {() => handleSubmit()}>
                submit
            </button>
            <input type="search" onChange={handleChange} placeholder="Søk på filmer du leter etter" name="search"></input>

            <SearchSort />
        </div>
        )
}

export default SearchBar;