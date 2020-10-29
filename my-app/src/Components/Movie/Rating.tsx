import React, {useState} from "react";
import { setUpvote, removeUpvote } from "../../Action/Actions";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store";


interface iRating{
    title: string,
    upvote: number | string,
}


export default function Rating(props: iRating){
    const title = props.title;
    const [ranking, setRanking] = useState(0);
    const dispatch: Dispatch<any> = useDispatch();

    

    const changeUpvote = (action: string )=> {
        if(action == "setUpvote"){
            dispatch(setUpvote(title))
            setRanking(1);
            fetchMe();
        }else{
            dispatch(removeUpvote(title))
            setRanking(-1);
            fetchMe();
        }
    }

    const fetchMe = () => {fetch(`http://localhost:4000/api/movie?title=${title}&ranking=${ranking}`, {method: 'PUT'})
    .then(res => res.json()) //format the resault to json
    .then(res => {
        console.log(res);
        })};  



    return(
        
        <div>
            <button onClick = {() => changeUpvote("setUpvote")}>Upvote: {props.upvote}</button>
            <button onClick = {() => changeUpvote("removeUpvote")}>Down vote: {props.upvote}</button>
        </div>

    )
    
}

