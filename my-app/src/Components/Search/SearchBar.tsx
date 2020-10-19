import { Dispatch } from "redux";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// hvorfor går det ikke å importere filene?
import searchArtist from "../../Action/searchAction";
import { RootStore } from "../../store";


// tar inn search som er inputet brukeren skriver inn
export const SearchBar = () => {
    const dispatch: Dispatch<any> = useDispatch();
      // Annen mulig løsning: 
      const searchState = useSelector((state: RootStore) => state.searchReducer.search);
      const [search, setSearch] = useState(searchState);
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value);
      const handleSubmit = () => dispatch(searchArtist(search));

    return (
        <div>
        //trenger en funksjon som blir kalt på når man trykker submit. 
            <button onClick = {handleSubmit} >
                submit 
            </button>
            <input type="search" onChange={handleChange}/>
        </div>
    
        )
}




export default SearchBar;