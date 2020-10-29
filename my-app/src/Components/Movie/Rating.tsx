import React from "react";
import { setUpvote, removeUpvote } from "../../Action/Actions";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";


interface iRating{
    title: string | number,
    upvote: number | string,
}


export default function Rating(props: iRating){
    const title = props.title;

    const dispatch: Dispatch<any> = useDispatch();

    const addUpvote = (action:any) => dispatch(action(title))
    const deleteUpvote = (action:any) => dispatch(action(title))

    return(
        
        <div>
            <button onClick = {() => addUpvote(setUpvote)}>Upvote: {props.upvote}</button>
            <button onClick = {() => deleteUpvote(removeUpvote)}>Down vote: {props.upvote}</button>
        </div>

    )
    
}

