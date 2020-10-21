import { Dispatch } from "redux";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// hvorfor går det ikke å importere filene?
import { RootStore } from "../../store";
import { isPropertySignature } from "typescript";


// tar inn search som er inputet brukeren skriver inn
export const Character = () => {
    //const dispatch: Dispatch<any> = useDispatch();
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