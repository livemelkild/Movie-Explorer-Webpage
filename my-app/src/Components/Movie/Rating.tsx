import React from "react";
import { setUpvote, removeUpvote } from "../../Action/Actions";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";


interface iRating{
    id: string | number
}


export default function Rating(props: iRating){
    const id = props.id;

    const dispatch: Dispatch<any> = useDispatch();

    const addUpvote = (action:any) => dispatch(action(id))
    const deleteUpvote = (action:any) => dispatch(action(id))

    return(
        
        <div>
            <button onClick = {() => addUpvote(setUpvote)}>Upvote</button>
            <button onClick = {() => deleteUpvote(removeUpvote)}>Down vote</button>
        </div>

    )
    
}

