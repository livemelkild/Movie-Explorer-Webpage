import React, {useState} from "react";
import { setUpvote, removeUpvote } from "../../Action/Actions";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store";

import axios from 'axios'


interface iRating{
    title: string,
    upvote: number,
}


export default function Rating(props: iRating){
    const [title, setTitle] = useState(props.title)
    const dispatch: Dispatch<any> = useDispatch();

    const [ranking, setRanking] = useState(props.upvote);
    const [vote, setVote] = useState(0);

    const changeUpvote = (action: string )=> {
        if(action === "setUpvote"){
            if (vote == 1){
                console.log("already upvoted")
            }else{
                setVote(1)
                console.log(title)
                console.log("start opp" + ranking)

                axios.put(`http://localhost:4000/api/upVote/${title}`)

                const newRate = ranking + 1;
                
                setRanking(newRate);

                console.log("slutt opp" + ranking)

            }

        }else{
            if (vote == -1){
                console.log("already down voted")
            }else{
                setVote(-1)
                console.log("start ned" + ranking)
                axios.put(`http://localhost:4000/api/downVote/${title}`)
                
                const newRate = ranking -1;
                setRanking(newRate)
                console.log("slutt ned" + ranking)
            }


        }
    }



    return(
        
        <div>
            <button onClick = {() => changeUpvote("setUpvote")}>Upvote</button>
            <button onClick = {() => changeUpvote("removeUpvote")}>Down vote</button>
            
            <p>Movie rating: {ranking}</p>
            {}
        </div>

    )
    
}

