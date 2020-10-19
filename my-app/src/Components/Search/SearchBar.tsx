import { Dispatch } from "redux";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import searchArtist from ".../Action/searchAction";
import { RootStore } from ".../store";

type SearchProps = {
    search: string;
    searchArtist: (search:string) => void;
}

export const SearchBar: React.FC<SearchProps> = ({ search }) => {
    const dispatch: Dispatch<any> = useDispatch();

    const checkArtist = React.useCallback(
        (search: string) => dispatch(searchArtist(search)),
        [dispatch, searchArtist]
      )
    
      const callSearchFunction = (e: React.ChangeEvent<HTMLButtonElement>) => {
          e.preventDefault(); 
          //search.searchArtist
          dispatch(searchArtist(search))
      }
      // Annen mulig løsning: 
      const [Name, setName] = useState("");
      const nameState = useSelector((state: RootStore) => state.name);
      const handleChange = (event: React.ChangeEvent<HTMLAnchorElement) => setName(event.target.value);
      const handleSubmit = () => dispatch(searchArtist(search));

    return (
        <div>
            <button onClick = {callSearchFunction} value = "SEARCH_ARTIST">
                submit 
            </button>
            <input type="text" onChange={handleChange}/>
            <button onClick = {handleSubmit}>search</button>
        </div>
    
        )
}




export default SearchBar;