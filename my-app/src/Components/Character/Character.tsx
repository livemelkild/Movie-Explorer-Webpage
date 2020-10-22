import { Dispatch } from "redux";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// hvorfor går det ikke å importere filene?
import { RootStore } from "../../store";
import { isPropertySignature } from "typescript";

/*
const [items, setItems] = useState([]);
const [isLoaded, setisLoaded] = useState(false);

function componentDidMount(res: () => void | any){

    fetch("http://localhost:4000/api/character")
      .then(res => res.json()) //format the resault to json
      .then(res => {setisLoaded(true)}) //getting the data ans saving it inside the app component
      .then(res => {setItems( res.DATA )})
      .catch( (error) => {console.error(error)} );

  }
  */

// tar inn search som er inputet brukeren skriver inn
export const Character = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const characterState = useSelector((state: RootStore) => state.loadingReducer.loading); 
    const [character, setCharacter] = useState(characterState);


    return (
        <div className = "Character">
            <div className = "Name">
                

            </div>
            <div className = "image">
                <img />
            </div>
            <div className = "House">
                // props.getHouse...
            </div>
        
        </div>
        )
}

export default Character;