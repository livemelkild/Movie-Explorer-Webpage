import React from "react";
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

    return(
    <div className="container">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img src= {props.img_url} alt="hei"/>
                <span className="card-title">{ props.title}</span>
            </div>
            <div className="card-content">
            <p> Year: {props.year}, Genre: {props.genre[0]}</p>
            <p>Antall upvote</p>
            </div>
            <div className="card-action">
              <Rating 
              id={props.id}/>
            </div>
          </div>
        </div>
    </div>
    )
}

export default SingleMovie;