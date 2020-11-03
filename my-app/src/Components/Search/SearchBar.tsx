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
      //

    return (
        <div className= "total">
            <div className="submit">
            <input className='searchField' type="search" onChange={handleChange} placeholder="Søk på filmer du leter etter" name="search"></input>
       
                <button id = "submitKnapp" className="waves-effect btn  blue darken-1" type="submit" name="action" onClick = {() => handleSubmit()}>
                submit
                <i className="material-icons right">send</i>
            </button>
          
            
            </div>


        {search === "" ? 
        <div/>
                :
                <SearchSort />
                }
        
        </div>
        
        
        )
}

export default SearchBar;