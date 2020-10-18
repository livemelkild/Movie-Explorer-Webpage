import { Dispatch } from "redux";
import * as React from "react";
import { useDisptach } from "react-redux";


type SearchProps = {
    search: string;
    searchArtist: (search:string) => void;
}

export const SearchBar: React.FC<SearchProps> = ({ search }) => {
    const dispatch: Dispatch<any> = useDisptach();

    const checkArtist = React.useCallback(
        (search: string) => dispatch(searchArtist(search)),
        [dispatch, searchArtist]
      )
    return (
        <div>
            
        </div>
    
        )
}


}