import React, {useState} from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

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

    const changeUpvote = (action: string ) => {
        if (Number.isNaN(ranking)){
            setRanking(0)
        }
        if(action === "setUpvote"){
            if (vote === 1){
                console.log("already upvoted")
            }else{
                setVote(1)

                axios.put(`http://localhost:4000/api/upVote/${title}`)
                    .then(res => setRanking(res.data.DATA.upvote))


            }

        }else{
            if (vote === -1){
                console.log("already down voted")
            }else{
                setVote(-1)
                axios.put(`http://localhost:4000/api/downVote/${title}`)
                .then(res => setRanking(res.data.DATA.upvote))

            }
        }
    }

    return(
        
        <div>
            <button id= "like" className="btn-floating btn-large waves-effect waves-light teal accent-3" onClick = {() => changeUpvote("setUpvote")}>like</button>
            <button id= "dislike" className="btn-floating btn-large waves-effect waves-light deep-orange lighten-1" onClick = {() => changeUpvote("removeUpvote")}>dislike</button>

            <p>Likes: {ranking}</p>
       
        </div>

    )
    
}

