import { Dispatch } from "redux";
import * as React from "react";
import { useDispatch } from "react-redux";
import searchArtist from "../Action/searchAction";

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

    return (
        <div>
            <button onClick = {callSearchFunction} value = "SEARCH_ARTIST">
                submit 
            </button>
        </div>
    
        )
}




export default SearchBar;