import { Dispatch } from "redux";
import * as React from "react";
import { useDispatch } from "react-redux";
import searchArtist from "../Action/searchArtist"

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
    
      const callSearchFunction = (e) => {
          e.preventDefault(); 
          //search.searchArtist
          

      }

    return (
        <div>
            <button onClick></button>
        </div>
    
        )
}


}