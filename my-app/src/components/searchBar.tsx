import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { updateSearch } from "../store/Ducks/searchDuck"
import { isReturnStatement } from "typescript";

export default function Searchbar() {
    //tillater staten å bli oppdatert
    const dispatch = useDispatch(); 
    //useSelector henter ønsket verdi fra storen
    const search = useSelector(state => state.payload);


    return(
        <div>
            <div>
                { search }
            </div>
            <input>Skriv noe</input>
            <button onClick = { () => dispatch(updateSearch("heihei")) } >klikk meg</button>

        </div>
    )
}
    
