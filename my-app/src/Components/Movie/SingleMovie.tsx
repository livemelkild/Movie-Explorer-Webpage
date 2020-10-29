import React, {useState} from "react";
import "./SingleMovie.css"
import Rating from "./Rating"

interface iMovie {
        id: string | number,
        title: string | number,
        year: string | number,
        users_rating: string | number,
        img_url: string,
        genre: string
}

const SingleMovie = (props: iMovie) => {
const genreList = props.genre;
const printList = []
var i; 
for(i = 0; i  < props.genre.length ; i++){
  printList.push(" " + props.genre[i]);
}
const [showInfo, openInfo] = useState(false);

    return(
    <div className="container">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img src= {props.img_url} alt="Picture"/>
            </div>
            {showInfo ?

            <div className="card-content">
              <button onClick={() => openInfo(false) }>Hide Info</button>
              <span className="card-title" color = "black">{props.title}</span>
              <p> Year: {props.year}, Genre: {printList}</p>
              <p>Antall upvote</p>
            <div className="card-action">
                <Rating 
                id={props.id}/>
            </div>
            
            </div>
            :
            <div> 
              <button onClick={() => openInfo(true)}>Show Info</button>
            </div>
            }     
          </div>
        </div>
    </div>
    )
}


export default SingleMovie;